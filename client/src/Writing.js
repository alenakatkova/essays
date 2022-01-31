import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { centered } from "./grid";
import styled from "styled-components";

const apiUrl = "http://localhost:8080";

const Writing = () => {
  const { t } = useTranslation();

  const [isSettingsDisabled] = React.useState(false);
  const [isTopicChoiceDisabled] = React.useState(false);
  const [isWritingDisabled] = React.useState(true);

  const [wordsCount, setWordsCount] = React.useState(200);
  const [timingInMinutes, setTimingInMinutes] = React.useState(20);
  const [language, setLanguage] = React.useState(t("languages.english"));

  React.useEffect(() => {
    // TODO запросить у бд настройки: количество слов, минуты, дефолтный язык, дефолтный экзамен
  }, []);

  return (
    <div>
      <div className="container">
        <h1>{t("writing.title")}</h1>
        <Form>
          {/*TODO 1. сделать кнопку сохранения настроек*/}
          {/*TODO 2. сделать запрос к апи вики*/}
          {/*TODO 3. сделать кнопку начать*/}
          {/*TODO 4. сделать таймер*/}
          {/*TODO 5. сделать форму написания эссе*/}
          {/*TODO 6. сделать логику сохранения в бд*/}
          <fieldset
            className="row justify-content-center"
            disabled={isSettingsDisabled}
          >
            <legend>{t("writing.form.settings.title")}</legend>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.words-count")}</Form.Label>
              <Form.Control
                type="number"
                name="words-count"
                placeholder={200}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>
                {t("writing.form.settings.timing-in-minutes")}
              </Form.Label>
              <Form.Control
                type="number"
                name="timing-in-minutes"
                placeholder={20}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.language")}</Form.Label>
              <Form.Select name="language">
                <option>{language}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>{t("writing.form.settings.test")}</Form.Label>
              <Form.Select name="test">
                <option>toefl</option>
              </Form.Select>
            </Form.Group>
          </fieldset>
        </Form>
      </div>
    </div>
  );
};

// const Writing = () => {
//   const { t } = useTranslation();
//   const [title, setTitle] = React.useState("");
//   const [body, setBody] = React.useState("");
//
//   const submitEssay = (e) => {
//     e.preventDefault();
//     axios
//       .post(apiUrl + "/posts", {
//         title: title,
//         body: body,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//
//   return (
//     <div>
//       <p>{t("writing.title")}</p>
//       <form action="" method="post" onSubmit={submitEssay}>
//         <label htmlFor="title">{t("writing.form.title")}</label>
//         <input
//           name="title"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label htmlFor="body">{t("writing.form.text")}</label>
//         <input
//           name="body"
//           id="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         />
//         <input type="submit" value="send" />
//       </form>
//     </div>
//   );
// };

export default Writing;
