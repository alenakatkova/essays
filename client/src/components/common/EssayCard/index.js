import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
  Col,
  Row,
} from "react-bootstrap";
import { BsBookmark, BsStar, BsBookmarkFill, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import EssayRating from "./EssayRating";

const EssayCard = ({ essay, isOpen = false, isDraft = false }) => {
  const { t } = useTranslation();

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
              <Row className="d-flex align-items-end">
                {!isDraft && <Col xs="auto">{essay.author[0].username}</Col>}
                <Col xs="auto" className="p-0">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{t("favAuthor.btn.tooltip")}</Tooltip>}
                  >
                    <Button
                      style={{
                        border: "none",
                        margin: "0",
                        marginTop: "-7px",
                        padding: "0",
                        color: "#212529",
                      }}
                      variant="link"
                    >
                      <BsStar />
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <div className="text-muted">{creationDate}</div>
            </div>
          </Col>
          {!isDraft && (
            <Col xs="auto">
              <EssayRating />
            </Col>
          )}
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{essay.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
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
        </Card.Subtitle>
        <Card.Text style={{ whiteSpace: "pre-line" }}>{essay.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className="justify-content-between">
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{t("essayLikes.btn.tooltip")}</Tooltip>}
            >
              <Button
                style={{ marginRight: 5, border: "none" }}
                variant="outline-secondary"
              >
                <BsHeart />
              </Button>
            </OverlayTrigger>
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
    </Card>
  );
};

export default EssayCard;
