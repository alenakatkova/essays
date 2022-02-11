import React from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const apiUrl = "http://localhost:8080";

const SignUp = () => {
  const { t } = useTranslation();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUp = (e) => {
    e.preventDefault();
    axios
      .post(
        apiUrl + "/users/signup",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response.headers);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <p>{t("sign-up.title")}</p>
      <form action="" method="post" onSubmit={signUp}>
        <label htmlFor="username">{t("sign-up.form.username")}</label>
        <input
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">{t("sign-up.form.password")}</label>
        <input
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default SignUp;
