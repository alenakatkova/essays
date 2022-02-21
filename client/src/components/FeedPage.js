import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Badge, Button, Form } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { getAllEssays } from "../api/EssayAPI";
import EssayCard from "./EssayCard";
import RequireAuth from "./RequireAuth";
import Feed from "./common/Feed";

const FeedPage = () => {
  const { t } = useTranslation();
  // const { register, handleSubmit, setValue, getValues, watch } = useForm();

  return (
    <RequireAuth>
      <Container>
        <Row>
          <Col xs={2}>{t("feed.filters.title")}</Col>
          <Col xs={10}>
            <Feed feedType="allEssays" />
          </Col>
        </Row>
      </Container>
    </RequireAuth>
  );
};

export default FeedPage;
