import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "react-bootstrap";
import LeaveComment from "./LeaveComment";
import SuggestEdits from "./SuggestEdits";
import { getComments } from "../../api/EssayAPI";
import Comments from "../common/Comments";

const CommentsTabs = ({ essayId }) => {
  const { t } = useTranslation();
  const [key, setKey] = React.useState("comments");
  const [comments, setComments] = React.useState([]);

  const getEssayComments = React.useCallback(async () => {
    const commentsFromServer = await getComments(essayId);
    commentsFromServer && setComments(commentsFromServer);
  }, [essayId]);

  React.useEffect(() => {
    getEssayComments();
  }, [getEssayComments]);

  const onCommentAdd = () => {
    getEssayComments();
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab
        eventKey="comments"
        title={t("essay.commentsTabs.commentsList.title")}
      >
        {comments.length === 0 ? (
          t("essay.commentsTabs.commentsList.noComments")
        ) : (
          <Comments toRender={comments} />
        )}
      </Tab>
      <Tab
        eventKey="editSuggestions"
        title={t("essay.commentsTabs.editSuggestionsList.title")}
      >
        something
      </Tab>
      <Tab eventKey="toComment" title={t("essay.commentsTabs.toComment.title")}>
        <LeaveComment refreshCommentsFeed={onCommentAdd} />
      </Tab>
      <Tab
        eventKey="toSuggestEdits"
        title={t("essay.commentsTabs.toSuggestEdits.title")}
      >
        <SuggestEdits />
      </Tab>
    </Tabs>
  );
};

export default CommentsTabs;
