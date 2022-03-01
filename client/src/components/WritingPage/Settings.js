import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { getAllLanguages } from "../../api/LanguagesAPI";
import { getAllLevels } from "../../api/LevelsAPI";
import { getAllTests } from "../../api/TestsAPI";
import { getUserInfo } from "../../api/UserAPI";

const getTestsSpecificToLanguage = (languageId, tests) => {
  const currentLanguageId = languageId;
  return tests.filter((test) => test.languages.includes(currentLanguageId));
};

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
  const [currLangTests, setCurrLangTests] = React.useState([]);
  const [levels, setLevels] = React.useState([]);
  const [userDefaultSettings, setUserDefaultSettings] = React.useState({});

  const getSettingsFromServer = React.useCallback(async () => {
    const languagesFromServer = await getAllLanguages();
    const levelsFromServer = await getAllLevels();
    const testsFromServer = await getAllTests();
    const userInfo = await getUserInfo(userId);

    const testsSpecificToLanguage = getTestsSpecificToLanguage(
      userInfo.writingSettings
        ? userInfo.writingSettings.language_id
        : languagesFromServer[0]._id,
      testsFromServer
    );

    setLanguages(languagesFromServer || []);
    setLevels(levelsFromServer || []);
    setTests(testsFromServer || []);
    setUserDefaultSettings(userInfo.writingSettings);
    setCurrLangTests(testsSpecificToLanguage);
  }, [userId]);

  React.useEffect(() => {
    getSettingsFromServer();
  }, [getSettingsFromServer]);

  const setInitialValues = () => {
    if (userDefaultSettings === undefined) {
      setValue("wordsCount", 200);
      setValue("timingInMinutes", 15);
      setValue("language", languages[0]._id);
      // setValue("test", userDefaultSettings.test_id);
      setValue("level", levels[0]._id);
    } else {
      setValue("wordsCount", userDefaultSettings.minAmountOfWords);
      setValue("timingInMinutes", userDefaultSettings.timingInMinutes);
      setValue("language", userDefaultSettings.language_id);
      // setValue("test", userDefaultSettings.test_id);
      setValue("level", userDefaultSettings.level_id);
    }

    const currentLanguageId = userDefaultSettings
      ? userDefaultSettings.language_id
      : languages[0]._id;
    const currentLanguage = languages.find(
      (language) => language._id === currentLanguageId
    );
    currentLanguage && setLangCode(currentLanguage.code);
  };

  React.useEffect(() => {
    setInitialValues();
  }, [userDefaultSettings]);

  React.useEffect(() => {
    if (userDefaultSettings) {
      const currLang = getValues("language");
      if (currLang === userDefaultSettings.language_id) {
        setValue("test", userDefaultSettings.test_id);
      }
    }
  }, [currLangTests]);

  React.useEffect(() => {
    if (requiresReset && !watchSaveSettings) {
      setInitialValues();
    }
    onResetCompletion();
  }, [requiresReset]);

  const onLanguageChange = () => {
    const currentLanguage = languages.find(
      (language) => language._id === getValues("language")
    );
    const testsSpecificToLanguage = getTestsSpecificToLanguage(
      currentLanguage._id,
      tests
    );
    setCurrLangTests(testsSpecificToLanguage);
    setValue("test", testsSpecificToLanguage[0]._id);
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
          {currLangTests.map((test) => (
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
