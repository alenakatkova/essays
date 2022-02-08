import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { languages, randomUser, tests } from "./data";
import { BsLink45Deg as LinkIcon } from "react-icons/bs";
import Timer from "./Timer";
import { getRandomArticlesFromWiki } from "./api/RandomArticlesAPI";
import WordCounter from "./WordCounter";
import { postEssay } from "./api/EssayAPI";

const Writing = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const [wikiArticles, setWikiArticles] = React.useState([]);
  const [isTopicChosen, setIsTopicChosen] = React.useState(false);
  const [isStepDisabled, setIsStepDisabled] = React.useState({
    settings: false,
    topicChoice: false,
    writing: true,
  });

  const watchWordsCount = watch("wordsCount");
  const watchEssayBody = watch("essayBody");
  const watchTimingInMinutes = watch("timingInMinutes");

  const startWriting = () => {
    setIsStepDisabled({
      ...isStepDisabled,
      settings: true,
      topicChoice: true,
      writing: false,
    });
  };

  const reset = () => {
    setIsStepDisabled({
      ...isStepDisabled,
      settings: false,
      topicChoice: false,
      writing: true,
    });
    setIsTopicChosen(false);
    setWikiArticles([]);
    setValue("essayTitle", "");
    setValue("essayBody", "");

    // TODO вернуться к сохраненным настройкам (если кнопка Сохранить текущие настройки не нажата)
  };

  const generateTopicsChoice = async () => {
    const currentLanguage = getValues("language");
    const language = languages.find((lang) => lang._id === currentLanguage);
    const randomArticles = await getRandomArticlesFromWiki(language.code);
    setWikiArticles(randomArticles);
    setIsTopicChosen(false);
    setIsStepDisabled({ ...isStepDisabled, settings: true });
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
    postEssay(data);
    console.log(data);
    reset();
  };

  React.useEffect(() => {
    const writingSettings = randomUser["writingSettings"]; // TODO запросить в БД настройки для написания эссе для этого юзера
    const language = languages.find((lang) => {
      return lang._id === writingSettings["language_id"];
    });
    const test = tests.find((test) => test._id === writingSettings["test_id"]);

    //---------------------------------------------------------------------------
    // SETTINGS
    // setLanguages(langs); // TODO запрос в бд на список языков и т.д.
    setValue("wordsCount", writingSettings["wordsCount"]);
    setValue("timingInMinutes", writingSettings["timingInMinutes"]);
    setValue("language", language._id);
    setValue("test", test._id);
  }, [setValue]);

  return (
    <div>
      <div className="container">
        <h1>{t("writing.title")}</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-between">
            <legend className="col-4">
              {t("writing.form.settings.title")}
            </legend>
            <div className="col-8 d-flex flex-row-reverse">
              <Button onClick={reset}>{t("writing.form.reset")}</Button>
            </div>
          </div>
          <fieldset
            className="row justify-content-center"
            disabled={isStepDisabled.settings}
          >
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.wordsCount")}</Form.Label>
              <Form.Control type="number" {...register("wordsCount")} />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>
                {t("writing.form.settings.timingInMinutes")}
              </Form.Label>
              <Form.Control type="number" {...register("timingInMinutes")} />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.language")}</Form.Label>
              <Form.Select {...register("language")}>
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
                    {test.name}
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
          <fieldset className="mb-3" disabled={isStepDisabled.topicChoice}>
            <div className="mb-3">
              <Button onClick={generateTopicsChoice}>
                {t("writing.form.articles.generate")}
              </Button>
            </div>
            <Form.Group
              onChange={() => {
                setIsTopicChosen(true);
              }}
            >
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
                          rel="noreferrer"
                          title={t("writing.form.articles.link")}
                        >
                          <LinkIcon />
                        </a>
                      </Badge>
                    </span>
                  }
                  value={article.title}
                  {...register("article")}
                />
              ))}
            </Form.Group>
          </fieldset>
          {isTopicChosen && (
            <div className="mb-3">
              <Timer
                minutes={watchTimingInMinutes}
                startWriting={startWriting}
              />
            </div>
          )}
          <fieldset className="mb-3" disabled={isStepDisabled.writing}>
            <Form.Group className="mb-3">
              <Form.Label>{t("writing.form.essay.title")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                {...register("essayTitle")}
              />
            </Form.Group>
            <Form.Group>
              <div className="row justify-content-between">
                <Form.Label className="col">
                  {t("writing.form.essay.body")}
                </Form.Label>
                <div className="col d-flex flex-row-reverse">
                  <WordCounter
                    text={watchEssayBody}
                    minAmount={watchWordsCount}
                  />
                </div>
              </div>
              <Form.Control
                as="textarea"
                rows={10}
                {...register("essayBody")}
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
