import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authProvider";
import { postEditSuggestions } from "../../api/EssayAPI";

const SuggestEdits = ({ essayText, refreshEditSuggestionsFeed }) => {
  const { t } = useTranslation();
  let { essayId } = useParams();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      body: "",
    },
  });
  const { user } = useAuth();

  React.useEffect(() => {
    reset({
      body: essayText,
    });
  }, [reset, essayText]);

  const onSubmit = async (data) => {
    await postEditSuggestions({ ...data, userId: user }, essayId);
    refreshEditSuggestionsFeed();
    reset({
      body: essayText,
    });
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={15} {...register("body")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            {t("essay.commentsTabs.toSuggestEdits.submit")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SuggestEdits;
