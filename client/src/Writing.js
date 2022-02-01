import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import axios from "axios";
// import { centered } from "./grid";
// import styled from "styled-components";
import { randomUser, languages, tests } from "./data";
import axios from "axios";

// const apiUrl = "http://localhost:8080";

const Writing = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, errors } = useForm();

  const [wikiArticles, setWikiArticles] = React.useState([]);

  // TODO будет использоваться для записи данных, запрошенных в бд
  //const [languages, setLanguages] = React.useState([]);
  //const [tests, setTests] = React.useState([]);

  //const [isSettingsDisabled, setIsSettingsDisabled] = React.useState(false);
  // const [isTopicChoiceDisabled] = React.useState(false);
  // const [isWritingDisabled] = React.useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const getRandomArticlesFromWiki = async (languageCode) => {
    let wikiUrl = `https://${languageCode}.wikipedia.org/w/api.php?origin=*`;

    const params = {
      action: "query",
      rnnamespace: 0,
      format: "json",
      list: "random",
      rnlimit: "5",
    };

    Object.keys(params).forEach(function (key) {
      wikiUrl += "&" + key + "=" + params[key];
    });

    await axios
      .get(wikiUrl)
      .then(function (response) {
        setWikiArticles(response.data.query.random);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  React.useEffect(() => {
    // WIKI
    getRandomArticlesFromWiki("en");

    //---------------------------------------------------------------------------
    // SETTINGS
    const writingSettings = randomUser["writing-settings"]; // TODO запросить в БД настройки для написания эссе для этого юзера
    //setLanguages(langs); // TODO запрос в бд на список языков
    // setTests(tests); // TODO запрос в бд на список экзаменов
    setValue("words-count", writingSettings["words-count"]);
    setValue("timing-in-minutes", writingSettings["timing-in-minutes"]);

    const language = languages.find(
      (lang) => lang.id === writingSettings["language-id"]
    ).language;
    setValue("language", t(`languages.${language}`));

    const test = tests.find(
      (test) => test.id === writingSettings["test-id"]
    ).test;
    setValue("test", test);
  }, [setValue]);

  return (
    <div>
      <div className="container">
        <h1>{t("writing.title")}</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/*TODO 1. сделать кнопку сохранения настроек*/}
          {/*TODO 2. сделать запрос к апи вики*/}
          {/*TODO 3. сделать кнопку начать*/}
          {/*TODO 4. сделать таймер*/}
          {/*TODO 5. сделать форму написания эссе*/}
          {/*TODO 6. сделать логику сохранения в бд*/}
          {/*TODO 7. добавить register ко всем полям*/}
          {/*TODO 8. добавить errors для required И ограничений на поля*/}
          <fieldset
            className="row justify-content-center"
            // disabled={isSettingsDisabled}
          >
            <legend>{t("writing.form.settings.title")}</legend>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.words-count")}</Form.Label>
              <Form.Control
                type="number"
                {...register("words-count", {
                  required: t("writing.form.settings.words-count-required"),
                  valueAsNumber: true,
                  min: 1,
                  max: 500,
                })}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>
                {t("writing.form.settings.timing-in-minutes")}
              </Form.Label>
              <Form.Control
                type="number"
                {...register("timing-in-minutes", {
                  required: t("writing.form.settings.timing-in-minutes"),
                  valueAsNumber: true,
                  min: 1,
                  max: 60,
                })}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.language")}</Form.Label>
              <Form.Select {...register("language")}>
                {languages.map((language) => (
                  <option key={language.id}>
                    {t(`languages.${language.language}`)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.test")}</Form.Label>
              <Form.Select {...register("test")}>
                {tests.map((test) => (
                  <option key={test.id}>{test.test}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={t("writing.form.settings.save-settings")}
                {...register("save-settings")}
              />
            </Form.Group>
          </fieldset>
          <fieldset>ff</fieldset>

          <Button type="submit">{t("writing.form.settings.submit")}</Button>
        </Form>
      </div>
    </div>
  );
};

// const Writing = () => {
//   const { t } = useTranslation();
//   const [title, setTitle] = React.useState("");
//   const [body, setBody] = React.useState("");
//
//   const submitEssay = (e) => {
//     e.preventDefault();
//     axios
//       .post(apiUrl + "/posts", {
//         title: title,
//         body: body,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//
//   return (
//     <div>
//       <p>{t("writing.title")}</p>
//       <form action="" method="post" onSubmit={submitEssay}>
//         <label htmlFor="title">{t("writing.form.title")}</label>
//         <input
//           name="title"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label htmlFor="body">{t("writing.form.text")}</label>
//         <input
//           name="body"
//           id="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         />
//         <input type="submit" value="send" />
//       </form>
//     </div>
//   );
// };

export default Writing;
