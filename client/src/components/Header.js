import React from "react";
import { useTranslation } from "react-i18next";
import { uiLanguages } from "../utils/ui";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authProvider";
import LogOut from "./LogOut";

const Header = () => {
  const { t, i18n } = useTranslation();

  let { isAuthenticated } = useAuth();
  const change = (e) => {
    i18n.changeLanguage(e.target.value).then((t) => {
      t("key");
    });
  };

  return (
    <div className="container-fluid border-bottom py-2 bg-white">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="nav-link">{t("home.link")}</span>
          </Link>
        </div>
        <div className="col-auto">
          {!isAuthenticated ? (
            <div className="row align-items-center">
              <div className="col-auto">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="nav-link">{t("signUp.link")}</span>
                </Link>
              </div>
              <div className="col-auto">
                <span className="nav-link">{t("logIn.link")}</span>
              </div>
            </div>
          ) : (
            <div className="row align-items-center">
              <div className="col-auto">
                <Link to="/feed">
                  <span className="nav-link">{t("feed.link")}</span>
                </Link>
              </div>
              <div className="col-auto">
                <Link to="/writing">
                  <span className="nav-link">{t("writing.link")}</span>
                </Link>
              </div>
              <div className="col-auto">
                <Link to="/profile">
                  <span className="nav-link">{t("profile.link")}</span>
                </Link>
              </div>
              <div className="col-auto">
                <LogOut />
              </div>
            </div>
          )}
        </div>
        <div className="col-auto">
          <Form>
            <Form.Group controlId="form-language">
              <Form.Control
                as="select"
                onChange={change}
                value={i18n.resolvedLanguage}
              >
                {Object.keys(uiLanguages).map((language) => (
                  <option key={language} value={language}>
                    {uiLanguages[language]}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Header;
