import React from "react";
import { Container } from "react-bootstrap";
import RequireAuth from "../RequireAuth";
import EssayCard from "../common/EssayCard/index";
import { useParams } from "react-router-dom";
import { getOneEssay } from "../../api/EssayAPI";
import CommentsTabs from "./CommentsTabs";
import { useAuth } from "../../contexts/authProvider";
import { useTranslation } from "react-i18next";
import { getUserInfo } from "../../api/UserAPI";

const EssayPage = () => {
  let { essayId } = useParams();
  const [essay, setEssay] = React.useState(null);
  const [user, setUser] = React.useState({});
  let auth = useAuth();

  const getUserData = React.useCallback(async () => {
    const data = await getUserInfo(auth.user);
    setUser(data);
  }, [auth.user]);

  React.useEffect(() => {
    getUserData();
  }, [getUserData]);

  const getEssayFromServer = React.useCallback(async () => {
    const essayFromServer = await getOneEssay(essayId);
    if (essayFromServer === undefined) setEssay(null);
    else setEssay(essayFromServer[0]);
  }, [essayId]);

  React.useEffect(() => {
    getEssayFromServer();
  }, [getEssayFromServer]);

  return (
    <RequireAuth>
      <Container>
        <div className="mb-3">
          {essay && (
            <EssayCard
              essay={essay}
              isOpen={true}
              userEssays={user.essays || []}
            />
          )}
        </div>
        <div>
          <CommentsTabs essayId={essayId} essayText={essay && essay.body} />
        </div>
      </Container>
    </RequireAuth>
  );
};

export default EssayPage;
