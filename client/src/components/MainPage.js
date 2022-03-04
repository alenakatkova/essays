import React from "react";
import { useTranslation } from "react-i18next";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="d-flex flex-column">
        <h1 className="display-1">{t("main.title")}</h1>
        <Row>
          <Col xs={7}>
            <ListGroup variant="flush">
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage01")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage02")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage03")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage04")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage05")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                {t("main.passage06")}
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3 text-muted">
                {t("main.contactSupport")}: support@lf-essays.ru
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MainPage;
