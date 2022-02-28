import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "react-bootstrap";
import LeaveComment from "./LeaveComment";
import SuggestEdits from "./SuggestEdits";
import { getComments, getEditSuggestionsComments } from "../../api/EssayAPI";
import Comments from "./Comments";

const CommentsTabs = ({ essayId, essayText }) => {
  const { t } = useTranslation();
  const [key, setKey] = React.useState("comments");
  const [comments, setComments] = React.useState([]);
  const [editSuggestionsComments, setEditSuggestionsComment] = React.useState(
    []
  );

  const getEssayComments = React.useCallback(async () => {
    const commentsFromServer = await getComments(essayId);
    commentsFromServer && setComments(commentsFromServer);
  }, [essayId]);

  const getEssayEditSuggestionsComments = React.useCallback(async () => {
    const commentsFromServer = await getEditSuggestionsComments(essayId);
    commentsFromServer && setEditSuggestionsComment(commentsFromServer);
  }, [essayId]);

  React.useEffect(() => {
    getEssayComments();
    getEssayEditSuggestionsComments();
  }, [getEssayComments, getEssayEditSuggestionsComments]);

  const onCommentAdd = () => {
    getEssayComments();
  };

  const onEditSuggestionsAdd = () => {
    getEssayEditSuggestionsComments();
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
        {editSuggestionsComments.length === 0 ? (
          t("essay.commentsTabs.commentsList.noComments")
        ) : (
          <Comments
            toRender={editSuggestionsComments}
            isTextComparisonRequired={true}
            essayText={essayText}
          />
        )}
      </Tab>
      <Tab eventKey="toComment" title={t("essay.commentsTabs.toComment.title")}>
        <LeaveComment refreshCommentsFeed={onCommentAdd} />
      </Tab>
      <Tab
        eventKey="toSuggestEdits"
        title={t("essay.commentsTabs.toSuggestEdits.title")}
      >
        <SuggestEdits
          essayText={essayText}
          refreshEditSuggestionsFeed={onEditSuggestionsAdd}
        />
      </Tab>
    </Tabs>
  );
};

export default CommentsTabs;
