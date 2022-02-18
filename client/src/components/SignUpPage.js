import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";
// TODO редирект если юзер залогинен
const SignUpPage = () => {
  const { t } = useTranslation();
  const { loading, signUp } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignUpButtonClick = (e) => {
    e.preventDefault();
    signUp(username, password);
  };

  return (
    <div>
      <p>{t("signUp.title")}</p>
      <form action="" method="post" onSubmit={onSignUpButtonClick}>
        <label htmlFor="username">{t("signUp.form.username")}</label>
        <input
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">{t("signUp.form.password")}</label>
        <input
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="send" disabled={loading} />
      </form>
    </div>
  );
};

export default SignUpPage;
