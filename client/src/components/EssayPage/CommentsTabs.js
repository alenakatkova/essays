import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "react-bootstrap";
import LeaveComment from "./LeaveComment";
import SuggestEdits from "./SuggestEdits";

const CommentsTabs = () => {
  const { t } = useTranslation();
  const [key, setKey] = React.useState("comments");

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
        anything
      </Tab>
      <Tab
        eventKey="editSuggestions"
        title={t("essay.commentsTabs.editSuggestionsList.title")}
      >
        something
      </Tab>
      <Tab eventKey="toComment" title={t("essay.commentsTabs.toComment.title")}>
        <LeaveComment />
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
