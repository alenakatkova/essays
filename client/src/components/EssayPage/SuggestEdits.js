import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SuggestEdits = () => {
  const { t } = useTranslation();
  let { essayId } = useParams();

  return <div>suggest edits to essay with id {essayId}</div>;
};

export default SuggestEdits;
