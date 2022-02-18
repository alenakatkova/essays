import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";

const LogOut = () => {
  const { t } = useTranslation();
  const { logOut } = useAuth();

  const onLogOutButtonClick = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <button onClick={onLogOutButtonClick}>{t("auth.logoutButton")}</button>
  );
};

export default LogOut;
