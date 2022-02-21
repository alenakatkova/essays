import React from "react";
import Feed from "../common/Feed";

const Drafts = ({ drafts = [] }) => {
  return <Feed postsToRender={drafts} />;
};

export default Drafts;
