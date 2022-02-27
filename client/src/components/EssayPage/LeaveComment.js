import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { postComment } from "../../api/EssayAPI";
import { useAuth } from "../../contexts/authProvider";

const LeaveComment = ({ refreshCommentsFeed }) => {
  const { t } = useTranslation();
  let { essayId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    await postComment({ ...data, userId: user }, essayId);
    refreshCommentsFeed();
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={t("essay.commentsTabs.toComment.placeholder")}
            {...register("body")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t("essay.commentsTabs.toComment.submit")}
        </Button>
      </Form>
    </div>
  );
};

export default LeaveComment;
