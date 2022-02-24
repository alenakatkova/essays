import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Container,
} from "react-bootstrap";
import RequireAuth from "../RequireAuth";
import EssayCard from "../EssayCard";
import { Routes, Route, useParams } from "react-router-dom";
import { getEssays, getOneEssay } from "../../api/EssayAPI";

const EssayPage = () => {
  let { essayId } = useParams();
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
        <EssayCard essay={essay} />
      </Container>
    </RequireAuth>
  );
};

export default EssayPage;
