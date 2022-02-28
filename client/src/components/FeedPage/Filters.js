import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getAllLanguages } from "../../api/LanguagesAPI";
import { getAllLevels } from "../../api/LevelsAPI";
import { getAllTests } from "../../api/TestsAPI";

const Filters = ({ updateFilters }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const [languages, setLanguages] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [currLangTests, setCurrLangTests] = React.useState([]);
  const [levels, setLevels] = React.useState([]);

  const getFiltersFromServer = React.useCallback(async () => {
    const languagesFromServer = await getAllLanguages();
    const levelsFromServer = await getAllLevels();
    const testsFromServer = await getAllTests();

    setLanguages(languagesFromServer || []);
    setLevels(levelsFromServer || []);
    setTests(testsFromServer || []);
  }, []);

  React.useEffect(() => {
    getFiltersFromServer();
  }, [getFiltersFromServer]);

  const onSubmit = (filtersValues) => {
    updateFilters(filtersValues);
  };

  const reset = () => {
    setValue("language", null);
    setValue("test", null);
    setValue("level", null);
    updateFilters();
    setCurrLangTests([]);
  };

  const onLanguageChange = () => {
    setValue("test", null);
    const currentLanguageId = getValues("language");
    const filteredTests = tests.filter((test) =>
      test.languages.includes(currentLanguageId)
    );
    setCurrLangTests(filteredTests);
  };

  return (
    <>
      <h2 className="display-6">{t("filters.title")}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <h5>{t("filters.levels.title")}</h5>
          <Row>
            {levels.map((level) => (
              <Col xs={4} key={level._id}>
                <Form.Check
                  type="radio"
                  id={level._id}
                  label={level.name}
                  value={level._id}
                  {...register("level")}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group
          className="mb-3"
          onChange={() => {
            onLanguageChange();
          }}
        >
          <h5>{t("filters.languages.title")}</h5>
          <Row>
            {languages.map((language) => (
              <Col xs={6} key={language._id}>
                <Form.Check
                  type="radio"
                  id={language._id}
                  label={t(`languages.${language.i18n}`)}
                  value={language._id}
                  {...register("language")}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>
        {currLangTests.length > 0 && (
          <Form.Group className="mb-3">
            <h5>{t("filters.tests.title")}</h5>
            <Row>
              {currLangTests.map((test) => (
                <Col xs={12} key={test._id}>
                  <Form.Check
                    type="radio"
                    id={test._id}
                    label={
                      test.abbreviation.length > 0
                        ? `${test.abbreviation}`
                        : `${test.name}`
                    }
                    value={test._id}
                    {...register("test")}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        )}
        <Row className="justify-content-between">
          <Col>
            <Button type="submit">{t("filters.submit")}</Button>
          </Col>
          <Col>
            <Button onClick={reset}>{t("filters.reset")}</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Filters;
