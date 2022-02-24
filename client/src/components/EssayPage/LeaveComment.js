import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const LeaveComment = () => {
  const { t } = useTranslation();
  let { essayId } = useParams();

  return <div>leave comment to essay with id {essayId}</div>;
};

export default LeaveComment;
