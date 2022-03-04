import React from "react";
import Essays from "../common/Essays";

const Drafts = ({ drafts }) => {
  const sortedByDate = drafts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return <Essays toRender={sortedByDate} isDraft={true} />;
};

export default Drafts;
