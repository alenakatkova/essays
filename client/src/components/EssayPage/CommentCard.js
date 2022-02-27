import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Row, Col } from "react-bootstrap";

const CommentCard = ({ comment, isTextComparisonRequired = false }) => {
  const { t } = useTranslation();

  const creationDate = new Date(comment.createdAt).toLocaleDateString();

  return (
    <Card>
      <Row>
        <Col xs={2}>
          <div
            className="d-flex flex-column align-items-stretch p-4 bg-light border-end"
            style={{ height: "100%" }}
          >
            <div className="align-self-center">
              {comment.author[0].username}
            </div>
            <div className="align-self-center text-muted">{creationDate}</div>
          </div>
        </Col>
        <Col>
          <Card.Body>{comment.body}</Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CommentCard;
