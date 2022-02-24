import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SuggestEdits = () => {
  const { t } = useTranslation();
  let { essayId } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} {...register("body")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            {t("essay.commentsTabs.suggestEdits.submit")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SuggestEdits;
