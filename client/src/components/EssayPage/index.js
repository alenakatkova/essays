import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Tab, Tabs } from "react-bootstrap";
import RequireAuth from "../RequireAuth";
import EssayCard from "../common/EssayCard";
import { useParams } from "react-router-dom";
import { getOneEssay } from "../../api/EssayAPI";
import CommentsTabs from "./CommentsTabs";

const EssayPage = () => {
  let { essayId } = useParams();
  const { t } = useTranslation();
  const [essay, setEssay] = React.useState({});

  const getEssayFromServer = React.useCallback(async () => {
    const essayFromServer = await getOneEssay(essayId);
    if (essayFromServer === undefined) setEssay({});
    else setEssay(essayFromServer);
  }, [essayId]);

  React.useEffect(() => {
    getEssayFromServer();
  }, [getEssayFromServer]);

  return (
    <RequireAuth>
      <Container>
        <div className="mb-3">
          <EssayCard essay={essay} />
        </div>
        <div>
          <CommentsTabs />
        </div>
      </Container>
    </RequireAuth>
  );
};

export default EssayPage;