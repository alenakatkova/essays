import React from "react";
import { Container } from "react-bootstrap";
import RequireAuth from "../RequireAuth";
import EssayCard from "../common/EssayCard/index";
import { useParams } from "react-router-dom";
import { getOneEssay } from "../../api/EssayAPI";
import CommentsTabs from "./CommentsTabs";

const EssayPage = () => {
  let { essayId } = useParams();
  const [essay, setEssay] = React.useState(null);

  const getEssayFromServer = React.useCallback(async () => {
    const essayFromServer = await getOneEssay(essayId);
    if (essayFromServer === undefined) setEssay(null);
    else setEssay(essayFromServer[0]);
  }, [essayId]);

  React.useEffect(() => {
    getEssayFromServer();
  }, [getEssayFromServer]);

  // likes,
  //     userEssays,
  //     favouritesAuthors,

  return (
    <RequireAuth>
      <Container>
        <div className="mb-3">
          {essay && <EssayCard essay={essay} isOpen={true} />}
        </div>
        <div>
          <CommentsTabs essayId={essayId} essayText={essay && essay.body} />
        </div>
      </Container>
    </RequireAuth>
  );
};

export default EssayPage;
