import React from "react";
import { useTranslation } from "react-i18next";

const Essay = () => {
  const { t } = useTranslation();

  return <div>{t("essay.title")}</div>;
};

export default Essay;
