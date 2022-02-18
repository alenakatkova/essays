import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";
import { Button } from "react-bootstrap";

const LogOut = () => {
  const { t } = useTranslation();
  const { logOut } = useAuth();

  const onLogOutButtonClick = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <Button variant="outline-secondary" onClick={onLogOutButtonClick}>
      {t("auth.logOutBtn")}
    </Button>
  );
};

export default LogOut;
