import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";

const SignUp = () => {
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
      <p>{t("sign-up.title")}</p>
      <form action="" method="post" onSubmit={onSignUpButtonClick}>
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
        <input type="submit" value="send" disabled={loading} />
      </form>
    </div>
  );
};

export default SignUp;
