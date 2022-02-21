import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { getAllEssays } from "../api/EssayAPI";
import RequireAuth from "./RequireAuth";
import Feed from "./common/Feed";

const FeedPage = () => {
  const { t } = useTranslation();
  const [essays, setEssays] = React.useState([]);
  // const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const getEssays = React.useCallback(async () => {
    const data = await getAllEssays();
    if (data === undefined) setEssays([]);
    else setEssays(data);
  }, []);

  React.useEffect(() => {
    getEssays();
  }, [getEssays]);

  return (
    <RequireAuth>
      <Container>
        <Row>
          <Col xs={2}>{t("feed.filters.title")}</Col>
          <Col xs={10}>
            <Feed postsToRender={essays} />
          </Col>
        </Row>
      </Container>
    </RequireAuth>
  );
};

export default FeedPage;
