import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Form } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import Timer from "./Timer";
import WordCounter from "./WordCounter";
import { postEssay } from "../../api/EssayAPI";
import { useAuth } from "../../contexts/authProvider";
import Settings from "./Settings";
import RandomTopics from "./RandomTopics";
import { updateUserWritingSettings } from "../../api/UserAPI";
import { countWords } from "../../utils/countWords";
import { postDraft } from "../../api/UserAPI";
import RequireAuth from "../RequireAuth";

const WritingPage = () => {
  const auth = useAuth();
  const methods = useForm();
  const { t } = useTranslation();

  const [shouldSettingsReset, setShouldSettingsReset] = React.useState(false);
  const [shouldRandomTopicsReset, setShouldRandomTopicsReset] =
    React.useState(false);
  const [shouldWordsCountReset, setShouldWordsCountReset] =
    React.useState(false);
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
    setShouldSettingsReset(true);
    setShouldRandomTopicsReset(true);
    setShouldWordsCountReset(true);
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
    setShouldSettingsReset(false);
  };

  const onResetRandomTopicsCompletion = () => {
    setShouldRandomTopicsReset(false);
  };

  const onResetWordCounterCompletion = () => {
    setShouldWordsCountReset(false);
  };

  const onTopicsGeneration = () => {
    setIsStepDisabled({
      ...isStepDisabled,
      settings: true,
    });
  };

  const onSubmit = (data) => {
    if (data["saveSettings"]) {
      const newWritingSettings = {
        timingInMinutes: data.timingInMinutes,
        language_id: data.language,
        test_id: data.test,
        level_id: data.level,
        minAmountOfWords: data.wordsCount,
      };
      updateUserWritingSettings(newWritingSettings, auth.user).then((res) =>
        console.log(res)
      );
    }

    const totalWords = countWords(data.essayBody);

    if (totalWords >= watchWordsCount) {
      postEssay({ ...data, userId: auth.user });
    } else {
      postDraft(data, auth.user);
    }

    reset();
  };

  const onTimeEnd = () => {
    methods.handleSubmit(onSubmit)();
  };

  return (
    <RequireAuth>
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
                requiresReset={shouldSettingsReset}
                onResetCompletion={onResetSettingsCompletion}
              />
            </fieldset>
            <fieldset className="mb-3" disabled={isStepDisabled.randomTopics}>
              <RandomTopics
                langCode={langCode}
                setIsTopicChosen={setIsTopicChosen}
                onTopicListGeneration={onTopicsGeneration}
                requiresReset={shouldRandomTopicsReset}
                onResetCompletion={onResetRandomTopicsCompletion}
              />
            </fieldset>
            {isTopicChosen && (
              <div className="mb-3">
                <Timer
                  minutes={watchTimingInMinutes}
                  startWriting={startWriting}
                  onTimeEnd={onTimeEnd}
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
                      requiresReset={shouldWordsCountReset}
                      onResetCompletion={onResetWordCounterCompletion}
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
    </RequireAuth>
  );
};

export default WritingPage;
