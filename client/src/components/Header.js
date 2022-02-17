import React from "react";
import { useTranslation } from "react-i18next";
import { uiLanguages } from "../utils/ui";
import { Form } from "react-bootstrap";

const Header = () => {
  const [lang, setLang] = React.useState("en");
  const { i18n } = useTranslation();
  console.log(uiLanguages);
  const change = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header>
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
    </header>
  );
};

export default Header;
