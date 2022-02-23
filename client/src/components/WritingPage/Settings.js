import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { getAllLanguages } from "../../api/LanguagesAPI";
import { getAllLevels } from "../../api/LevelsAPI";
import { getAllTests } from "../../api/TestsAPI";
import { getUserInfo } from "../../api/UserAPI";

const Settings = ({
  userId,
  setLangCode,
  requiresReset,
  onResetCompletion,
}) => {
  const { t } = useTranslation();
  const { register, setValue, getValues, watch } = useFormContext();
  const watchSaveSettings = watch("saveSettings");

  const [languages, setLanguages] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [levels, setLevels] = React.useState([]);
  const [userDefaultSettings, setUserDefaultSettings] = React.useState({});

  const getSettingsFromServer = React.useCallback(async () => {
    const languagesFromServer = await getAllLanguages();
    const levelsFromServer = await getAllLevels();
    const testsFromServer = await getAllTests();
    const userInfo = await getUserInfo(userId);

    setLanguages(languagesFromServer || []);
    setLevels(levelsFromServer || []);
    setTests(testsFromServer || []);
    setUserDefaultSettings(userInfo.writingSettings);
  }, [userId]);

  React.useEffect(() => {
    getSettingsFromServer();
  }, [getSettingsFromServer]);

  const setInitialValues = () => {
    setValue("wordsCount", userDefaultSettings.minAmountOfWords);
    setValue("timingInMinutes", userDefaultSettings.timingInMinutes);
    setValue("language", userDefaultSettings.language_id);
    setValue("test", userDefaultSettings.test_id);
    setValue("level", userDefaultSettings.level_id);

    const currentLanguage = languages.find(
      (language) => language._id === userDefaultSettings.language_id
    );
    currentLanguage && setLangCode(currentLanguage.code);
  };

  React.useEffect(() => {
    setInitialValues();
  }, [userDefaultSettings]);

  React.useEffect(() => {
    if (requiresReset && !watchSaveSettings) setInitialValues();
    onResetCompletion();
  }, [requiresReset]);

  const onLanguageChange = () => {
    const currentLanguage = languages.find(
      (language) => language._id === getValues("language")
    );
    setLangCode(currentLanguage.code);
  };

  return (
    <>
      <Form.Group className="col-6 mb-3">
        <Form.Label>{t("writing.form.settings.wordsCount")}</Form.Label>
        <Form.Control type="number" {...register("wordsCount")} />
      </Form.Group>
      <Form.Group className="col-6 mb-3">
        <Form.Label>{t("writing.form.settings.timingInMinutes")}</Form.Label>
        <Form.Control type="number" {...register("timingInMinutes")} />
      </Form.Group>
      <Form.Group className="col-4 mb-3" onChange={onLanguageChange}>
        <Form.Label>{t("writing.form.settings.language")}</Form.Label>
        <Form.Select {...register("language")}>
          {languages.map((language) => (
            <option key={language._id} value={language._id}>
              {t(`languages.${language.i18n}`)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="col-4 mb-3">
        <Form.Label>{t("writing.form.settings.test")}</Form.Label>
        <Form.Select {...register("test")}>
          {tests.map((test) => (
            <option key={test._id} value={test._id}>
              {test.abbreviation ? test.abbreviation : test.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="col-4 mb-3">
        <Form.Label>{t("writing.form.settings.level")}</Form.Label>
        <Form.Select {...register("level")}>
          {levels.map((level) => (
            <option key={level._id} value={level._id}>
              {level.name}
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
    </>
  );
};

export default Settings;