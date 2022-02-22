import React from "react";
import Essays from "../common/Essays";

const Drafts = ({ drafts = [] }) => {
  return <Essays toRender={drafts} />;
};

export default Drafts;
