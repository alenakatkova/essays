import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import RequireAuth from "../RequireAuth";
import Feed from "./Feed";
import Filters from "./Filters";

const FeedPage = () => {
  const { t } = useTranslation();

  const [filters, setFilters] = React.useState({
    level: null,
    language: null,
    test: null,
  });
  // const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const updateFilters = (chosenFilters) => {
    setFilters({ ...filters, ...chosenFilters });
    // console.log(level);
    // console.log(language);
    // console.log(test);
  };

  return (
    <RequireAuth>
      <Container>
        <Row>
          <Col xs={3}>
            <Filters updateFilters={updateFilters} />
          </Col>
          <Col xs={9}>
            <Feed />
          </Col>
        </Row>
      </Container>
    </RequireAuth>
  );
};

export default FeedPage;
