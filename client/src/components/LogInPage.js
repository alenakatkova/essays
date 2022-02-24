import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

// TODO редирект если юзер залогинен
const LogInPage = () => {
  const { t } = useTranslation();
  const { loading, logIn } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    logIn(data.username, data.password);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={4}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>{t("logIn.form.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("logIn.form.enterUsername")}
              {...register("username")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("logIn.form.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("logIn.form.enterPassword")}
              {...register("password")}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {t("logIn.form.submit")}
          </Button>
        </Form>
      </Col>
    </Row>

    // <div>
    //   <p>{t("logIn.title")}</p>
    //   <form action="" method="post" onSubmit={onLogInBtnClick}>
    //     <label htmlFor="username">{t("logIn.form.username")}</label>
    //     <input
    //       name="username"
    //       id="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label htmlFor="password">{t("logIn.form.password")}</label>
    //     <input
    //       name="password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <input type="submit" value="send" disabled={loading} />
    //   </form>
    // </div>
  );
};

export default LogInPage;
