import React from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const apiUrl = "http://localhost:8080";

const SignUp = () => {
  const { t } = useTranslation();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const postSmth = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl + "/posts", {
        title: title,
        body: body,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <p>{t("sign-up.title")}</p>
      <form action="" method="post" onSubmit={postSmth}>
        <label htmlFor="title">title</label>
        <input
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">body</label>
        <input
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default SignUp;
