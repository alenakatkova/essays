import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { getAllLanguages } from "../../api/LanguagesAPI";
import { getAllLevels } from "../../api/LevelsAPI";
import { getAllTests } from "../../api/TestsAPI";
import { getUserInfo } from "../../api/UserAPI";

const Settings = ({ userId }) => {
  const { t } = useTranslation();
  const { register, setValue } = useForm();

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

  React.useEffect(() => {
    setValue("wordsCount", userDefaultSettings.minAmountOfWords);
    setValue("timingInMinutes", userDefaultSettings.timingInMinutes);
    setValue("language", userDefaultSettings.language_id);
    setValue("test", userDefaultSettings.test_id);
  }, [userDefaultSettings]);

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
    </>
  );
};

export default Settings;
