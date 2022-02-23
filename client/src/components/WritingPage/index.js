import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Form } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import Timer from "./Timer";
import WordCounter from "../WordCounter";
import { postEssay } from "../../api/EssayAPI";
import { useAuth } from "../../contexts/authProvider";
import Settings from "./Settings";
import RandomTopics from "./RandomTopics";

const WritingPage = () => {
  const auth = useAuth();
  const methods = useForm();
  const { t } = useTranslation();

  const [isResetRequiredFor, setIsResetRequiredFor] = React.useState({
    settings: false,
    randomTopics: false,
  });
  const [isTopicChosen, setIsTopicChosen] = React.useState(false);
  const [langCode, setLangCode] = React.useState("");
  const [isStepDisabled, setIsStepDisabled] = React.useState({
    settings: false,
    randomTopics: false,
    writing: true,
    submit: true,
  });

  const watchEssayBody = methods.watch("essayBody");
  const watchWordsCount = methods.watch("wordsCount");
  const watchTimingInMinutes = methods.watch("timingInMinutes");

  const startWriting = () => {
    setIsStepDisabled({
      ...isStepDisabled,
      settings: true,
      randomTopics: true,
      writing: false,
      submit: false,
    });
  };

  const reset = () => {
    setIsResetRequiredFor({
      ...isResetRequiredFor,
      settings: true,
      randomTopics: true,
    });
    setIsStepDisabled({
      ...isStepDisabled,
      settings: false,
      randomTopics: false,
      writing: true,
      submit: true,
    });
    setIsTopicChosen(false);
    methods.setValue("essayTitle", "");
    methods.setValue("essayBody", "");
  };

  const onResetSettingsCompletion = () => {
    setIsResetRequiredFor({ ...isResetRequiredFor, settings: false });
  };

  const onResetRandomTopicsCompletion = () => {
    setIsResetRequiredFor({ ...isResetRequiredFor, randomTopics: false });
  };

  const onTopicsGeneration = () => {
    setIsStepDisabled({
      ...isStepDisabled,
      settings: true,
    });
  };

  const onSubmit = (data) => {
    if (data["saveSettings"]) {
      // запись настроек в документ пользователя в бд
    }
    postEssay({ ...data, userId: auth.user }); // TODO сохранить у юзера айди эссе
    // TODO запись в эссе либо в драфты
    console.log(data);
    reset();
  };

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
              <Settings
                userId={auth.user}
                setLangCode={setLangCode}
                requiresReset={isResetRequiredFor.settings}
                onResetCompletion={onResetSettingsCompletion}
              />
            </fieldset>
            <fieldset className="mb-3" disabled={isStepDisabled.randomTopics}>
              <RandomTopics
                langCode={langCode}
                setIsTopicChosen={setIsTopicChosen}
                onTopicListGeneration={onTopicsGeneration}
                requiresReset={isResetRequiredFor.randomTopics}
                onResetCompletion={onResetRandomTopicsCompletion}
              />
            </fieldset>
            {isTopicChosen && (
              <div className="mb-3">
                <Timer
                  minutes={watchTimingInMinutes}
                  startWriting={startWriting}
                />
              </div>
            )}
            <fieldset
              className="mb-3 border-top py-3"
              disabled={isStepDisabled.writing}
            >
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
            <Button type="submit" disabled={isStepDisabled.submit}>
              {t("writing.form.submit")}
            </Button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};

export default WritingPage;
