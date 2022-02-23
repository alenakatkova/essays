import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, Form } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import { BsLink45Deg as LinkIcon } from "react-icons/bs";
import Timer from "./Timer";
import { getRandomArticlesFromWiki } from "../../api/RandomArticlesAPI";
import WordCounter from "../WordCounter";
import { postEssay } from "../../api/EssayAPI";
import { useAuth } from "../../contexts/authProvider";
import Settings from "./Settings";

const WritingPage = () => {
  const auth = useAuth();
  const methods = useForm();
  const { t } = useTranslation();

  const [wikiArticles, setWikiArticles] = React.useState([]);
  const [isTopicChosen, setIsTopicChosen] = React.useState(false);
  const [langCode, setLangCode] = React.useState("");
  const [isStepDisabled, setIsStepDisabled] = React.useState({
    settings: false,
    topicChoice: false,
    writing: true,
  });

  const watchEssayBody = methods.watch("essayBody");
  const watchWordsCount = methods.watch("wordsCount");
  const watchTimingInMinutes = methods.watch("timingInMinutes");

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
    methods.setValue("essayTitle", "");
    methods.setValue("essayBody", "");

    // TODO вернуться к сохраненным настройкам (если кнопка Сохранить текущие настройки не нажата)
  };

  const generateTopicsChoice = async () => {
    const randomArticles = await getRandomArticlesFromWiki(langCode);
    setWikiArticles(randomArticles);
    setIsTopicChosen(false);
    setIsStepDisabled({ ...isStepDisabled, settings: true });
  };

  const onSubmit = (data) => {
    if (data["saveSettings"]) {
      // запись настроек в документ пользователя в бд
    }
    postEssay(data);
    console.log(data);
    reset();
  };

  // React.useEffect(() => {
  //   const writingSettings = randomUser["writingSettings"]; // TODO запросить в БД настройки для написания эссе для этого юзера
  //   const language = languages.find((lang) => {
  //     return lang._id === writingSettings["language_id"];
  //   });
  //   const test = tests.find((test) => test._id === writingSettings["test_id"]);
  //
  //   //---------------------------------------------------------------------------
  //   // SETTINGS
  //   // setLanguages(langs); // TODO запрос в бд на список языков и т.д.
  //   setValue("wordsCount", writingSettings["wordsCount"]);
  //   setValue("timingInMinutes", writingSettings["timingInMinutes"]);
  //   setValue("language", language._id);
  //   setValue("test", test._id);
  // }, [setValue]);

  return (
    <div>
      <div className="container">
        <h1>{t("writing.title")}</h1>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
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
              <Settings userId={auth.user} setLangCode={setLangCode} />
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
                    {...methods.register("article")}
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
                  {...methods.register("essayTitle")}
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
                  {...methods.register("essayBody")}
                />
              </Form.Group>
            </fieldset>
            <Button type="submit">{t("writing.form.submit")}</Button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};

export default WritingPage;
