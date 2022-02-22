import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import RequireAuth from "../RequireAuth";
import Feed from "./Feed";
import Filters from "./Filters";

const FeedPage = () => {
  const { t } = useTranslation();

  // const { register, handleSubmit, setValue, getValues, watch } = useForm();

  return (
    <RequireAuth>
      <Container>
        <Row>
          <Col xs={3}>
            <Filters />
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
