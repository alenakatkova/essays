import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col, Badge, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Filters = ({ updateFilters }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const [languages, setLanguages] = React.useState([
    {
      _id: "languagesIds.english",
      i18n: "english",
      code: "en",
      tests: ["testsIds.ielts", "testsIds.telc"],
    },
    {
      _id: "languagesIds.french",
      i18n: "french",
      code: "fr",
      tests: ["testsIds.delf", "testsIds.dalf"],
    },
  ]);
  const [tests, setTests] = React.useState([
    {
      _id: "testsIds.ielts",
      abbreviation: "IELTS",
      name: "International English Language Testing System",
      languages: ["languagesIds.english"],
      url: "https://www.ielts.org/",
    },
    {
      _id: "testsIds.toefl",
      abbreviation: "TOEFL",
      name: "Test of English as a Foreign Language",
      languages: ["languagesIds.english"],
      url: "https://www.ets.org/toefl/",
    },
    {
      _id: "testsIds.delf",
      abbreviation: "DELF",
      name: "Diplôme d'études en langue française",
      languages: ["languagesIds.french"],
      url: "http://www.delfdalf.fr/index-en.html",
    },
    {
      _id: "testsIds.dalf",
      abbreviation: "DALF",
      name: "Diplôme approfondi de langue française",
      languages: ["languagesIds.french"],
      url: "http://www.delfdalf.fr/index-en.html",
    },
  ]);
  const [levels, setLevels] = React.useState([
    { _id: "levelsIds.a1", name: "A1" },
    { _id: "levelsIds.a2", name: "A2" },
    { _id: "levelsIds.b1", name: "B1" },
    { _id: "levelsIds.b2", name: "B2" },
    { _id: "levelsIds.c1", name: "C1" },
    { _id: "levelsIds.c2", name: "C2" },
  ]);

  const onSubmit = (data) => {
    console.log(data);
    updateFilters(data);
  };

  const reset = () => {
    setValue("language", null);
    setValue("test", null);
    setValue("level", null);
  };

  return (
    <>
      <h2 className="display-6">{t("filters.title")}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3"
          // onChange={() => {
          //   setIsTopicChosen(true);
          // }}
        >
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
          // onChange={() => {
          //   setIsTopicChosen(true);
          // }}
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
        <Form.Group
          className="mb-3"
          // onChange={() => {
          //   setIsTopicChosen(true);
          // }}
        >
          <h5>{t("filters.tests.title")}</h5>
          <Row>
            {tests.map((test) => (
              <Col xs={6} key={test._id}>
                <Form.Check
                  type="radio"
                  id={test._id}
                  label={t(`tests.${test.abbreviation}`)}
                  value={test._id}
                  {...register("test")}
                />
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Button type="submit">{t("filters.submit")}</Button>
        <Button onClick={reset}>{t("filters.reset")}</Button>
      </Form>
    </>
  );
};

export default Filters;
