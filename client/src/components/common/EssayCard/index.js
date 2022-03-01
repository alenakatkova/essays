import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EssayRating from "./EssayRating";
import Like from "./Like";
import AddAuthorToFavourites from "./AddAuthorToFavourites";

const isEssayLiked = (essayId, likes) => {
  return likes.includes(essayId);
};

const isAuthorAddedToFavourites = (authorId, favourites) => {
  return favourites.includes(authorId);
};

const isUsersEssay = (essayId, myEssays) => {
  return myEssays.includes(essayId);
};

const EssayCard = ({
  essay,
  isOpen = false,
  isDraft = false,
  likes,
  userEssays,
  favouritesAuthors,
}) => {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = React.useState(false);
  const [isMyEssay, setIsMyEssay] = React.useState(false);
  const [isAuthorSaved, setIsAuthorSaved] = React.useState(false);

  React.useEffect(() => {
    likes && setIsLiked(isEssayLiked(essay._id, likes));
    userEssays && setIsMyEssay(isUsersEssay(essay._id, userEssays));
    favouritesAuthors &&
      setIsAuthorSaved(
        isAuthorAddedToFavourites(essay.user_id, favouritesAuthors)
      );
  }, [likes, userEssays, favouritesAuthors]);

  const creationDate = new Date(essay.createdAt).toLocaleDateString();
  const navigate = useNavigate();

  const openEssay = () => {
    navigate(`/essays/${essay._id}`);
  };

  return (
    <Card>
      <Card.Header>
        <Row className="justify-content-between align-items-center">
          <Col>
            <div className="d-flex flex-column">
              {!isDraft && (
                <Row className="d-flex align-items-end">
                  <Col xs="auto">{essay.author[0].username}</Col>
                  {!isMyEssay && (
                    <Col xs="auto" className="p-0">
                      <AddAuthorToFavourites
                        isAddedByCurrentUser={isAuthorSaved}
                        authorId={essay.user_id}
                      />
                    </Col>
                  )}
                </Row>
              )}
              <div className="text-muted">{creationDate}</div>
            </div>
          </Col>
          {!isDraft && (
            <Col xs="auto">
              <EssayRating
                isMyEssay={isMyEssay}
                ratings={essay.ratings}
                essayId={essay._id}
              />
            </Col>
          )}
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{essay.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {!isDraft && (
            <Row className="justify-content-between py-3">
              <Col>
                <div className="d-flex flex-column">
                  <div>{t("essayCard.language")}:</div>
                  <div>{t(`languages.${essay.language[0].i18n}`)}</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column">
                  <div>{t("essayCard.test")}:</div>
                  <div>{essay.test[0].abbreviation}</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column">
                  <div>{t("essayCard.level")}:</div>
                  <div>{essay.level[0].name}</div>
                </div>
              </Col>
            </Row>
          )}
        </Card.Subtitle>
        <Card.Text style={{ whiteSpace: "pre-line" }}>{essay.body}</Card.Text>
      </Card.Body>
      {!isDraft && (
        <Card.Footer>
          <Row className="justify-content-between">
            <Col>
              {!isMyEssay && (
                <Like essayId={essay._id} isLikedByCurrentUser={isLiked} />
              )}
            </Col>

            {!isOpen && (
              <Col xs="auto">
                <Button onClick={openEssay}>
                  {t("essayCard.comments.btnInFeed")} ({essay.comments.length})
                </Button>
              </Col>
            )}
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default EssayCard;
