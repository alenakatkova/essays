import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/authProvider";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignUpPage = () => {
  const { t } = useTranslation();
  const { loading, signUp } = useAuth();
  const { register, handleSubmit, getValues, errors } = useForm();
  const [passwordError, setPasswordError] = React.useState(null);

  const onSignUpButtonClick = async (data, e) => {
    e.preventDefault();
    if (getValues("password") !== getValues("passwordRepeat")) {
      setPasswordError(t("signUp.passwordError"));
    } else {
      setPasswordError(null);

      await signUp(data.username, data.password);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={4}>
        <Form onSubmit={handleSubmit(onSignUpButtonClick)}>
          <Form.Group className="mb-3">
            <Form.Label>{t("signUp.form.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("signUp.form.enterUsername")}
              {...register("username")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("signUp.form.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("signUp.form.enterPassword")}
              {...register("password")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("signUp.form.passwordRepeat")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("signUp.form.repeatPassword")}
              {...register("passwordRepeat")}
            />
            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {t("signUp.form.submit")}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUpPage;
