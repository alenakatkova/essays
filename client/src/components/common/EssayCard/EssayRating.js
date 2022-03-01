import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/authProvider";
import { postRating } from "../../../api/EssayAPI";

const EssayRating = ({ ratings, essayId, isMyEssay = false }) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const [rating, setRating] = React.useState(null);
  const [ratingByCurrentUser, setRatingByCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const ratingByCurrUser = ratings.find((rating) => rating.user_id === user);
    if (ratingByCurrUser) {
      setRatingByCurrentUser(ratingByCurrUser.mark);
    }
  }, [ratings]);

  const onSubmit = async (data) => {
    await postRating(Number(data.rating), user, essayId);
    setRatingByCurrentUser(data.rating);
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
                      {...register("rating", {
                        required: true,
                        min: 0,
                        max: 100,
                      })}
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
