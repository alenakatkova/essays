import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EssayRating = ({ ratings, currentUserId, isMyEssay = false }) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = React.useState(null);
  const [ratingByCurrentUser, setRatingByCurrentUser] = React.useState(10);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex flex-column">
      <div className="mb-1" style={{ textAlign: "end" }}>
        {rating ? rating : t("essayCard.rating.noRating")}
      </div>
      {!isMyEssay && (
        <div>
          {ratingByCurrentUser ? (
            <div className="text-muted" style={{ textAlign: "end" }}>
              {t("essayCard.rating.youRated")}: {ratingByCurrentUser}
            </div>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Row className="align-items-center justify-content-end">
                  <Col xs="auto">
                    <Form.Label style={{ margin: "0" }}>
                      {t("essayCard.rating.form.label")}:
                    </Form.Label>
                  </Col>
                  <Col xs={5}>
                    <Form.Control
                      type="number"
                      placeholder={t("essayCard.rating.form.placeholder")}
                      {...register("rating")}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">
                      {t("essayCard.rating.form.submit")}
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          )}
        </div>
      )}
    </div>
  );
};

export default EssayRating;
