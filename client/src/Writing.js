import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import axios from "axios";
// import styled from "styled-components";
import { languages, randomUser, tests } from "./data";
import { BsLink45Deg } from "react-icons/bs";
import Timer from "./Timer";
import { getRandomArticlesFromWiki } from "./api/RandomArticlesAPI";

// const apiUrl = "http://localhost:8080";

const Writing = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const [wikiArticles, setWikiArticles] = React.useState([]);
  const [isFieldsetDisabled, setIsFieldsetDisabled] = React.useState(false);

  const toggleChoiceDisabled = (isDisabled) => {
    setIsFieldsetDisabled(isDisabled);
  };

  const generateTopicsChoice = async () => {
    const currentLanguage = getValues("language");
    const language = languages.find((lang) => lang._id === currentLanguage);
    const randomArticles = await getRandomArticlesFromWiki(language.code);
    setWikiArticles(randomArticles);
  };

  //будет использоваться для записи данных, запрошенных в бд
  //const [languages, setLanguages] = React.useState([]);
  //const [tests, setTests] = React.useState([]);
  //const [levels, setLevels] = React.useState([]);
  //const [tags, setTags] = React.useState([]); // на этапе выбора языка

  const onSubmit = (data) => {
    if (data["saveSettings"]) {
      // запись настроек в документ пользователя в бд
    }
    // логика сохранения или несохранения эссе
    console.log(data);
  };

  React.useEffect(() => {
    const writingSettings = randomUser["writingSettings"]; // TODO запросить в БД настройки для написания эссе для этого юзера
    const language = languages.find(
      (lang) => lang._id === writingSettings["language_id"]
    );
    const test = tests.find((test) => test._id === writingSettings["test_id"]);

    //---------------------------------------------------------------------------
    // SETTINGS
    // setLanguages(langs); // TODO запрос в бд на список языков и т.д.
    setValue("wordsCount", writingSettings["wordsCount"]);
    setValue("timingInMinutes", writingSettings["timingInMinutes"]);
    setValue("language", language._id);
    setValue("test", test._id);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>{t("writing.title")}</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset
            className="row justify-content-center"
            disabled={isFieldsetDisabled}
          >
            <legend>{t("writing.form.settings.title")}</legend>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.wordsCount")}</Form.Label>
              <Form.Control
                type="number"
                {...register("wordsCount", {
                  required: t("writing.form.settings.wordsCountRequired"),
                  valueAsNumber: true,
                  min: 1,
                  max: 500,
                })}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>
                {t("writing.form.settings.timingInMinutes")}
              </Form.Label>
              <Form.Control
                type="number"
                {...register("timingInMinutes", {
                  required: t("writing.form.settings.timingInMinutes"),
                  valueAsNumber: true,
                  min: 1,
                  max: 60,
                })}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.language")}</Form.Label>
              <Form.Select
                {...register("language")}
                onChange={() => {
                  setWikiArticles([]);
                }}
              >
                {languages.map((language) => (
                  <option key={language._id} value={language._id}>
                    {t(`languages.${language._id}`)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.test")}</Form.Label>
              <Form.Select {...register("test")}>
                {tests.map((test) => (
                  <option key={test._id} value={test._id}>
                    {test._id}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={t("writing.form.settings.saveSettings")}
                {...register("saveSettings")}
              />
            </Form.Group>
          </fieldset>
          <fieldset className="mb-3" disabled={isFieldsetDisabled}>
            <div className="mb-3">
              <Button onClick={generateTopicsChoice}>
                {t("writing.form.articles.generate")}
              </Button>
            </div>
            {wikiArticles.map((article) => (
              <Form.Check
                key={article.id}
                type="radio"
                id={article.id}
                label={
                  <span>
                    {article.title}{" "}
                    <Badge bg="light" text="dark">
                      <a
                        href={article.url}
                        target="_blank"
                        title={t("writing.form.articles.link")}
                      >
                        <BsLink45Deg />
                      </a>
                    </Badge>
                  </span>
                }
                value={article.title}
                {...register("article", { required: true })}
              />
            ))}
          </fieldset>
          <div className="mb-3">
            <Timer
              timeInMinutes={getValues("timing-in-minutes")}
              disableForm={toggleChoiceDisabled}
            />
          </div>
          <fieldset className="mb-3" disabled={!isFieldsetDisabled}>
            <Form.Group>
              <Form.Label>{t("writing.form.essay.title")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                {...register("essay-title")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t("writing.form.essay.text")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                {...register("essay-text")}
              />
            </Form.Group>
          </fieldset>
          <Button type="submit">{t("writing.form.submit")}</Button>
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
