import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { StringDiff } from "react-string-diff";

const compareStrings = (str1, str2) => {
  return <StringDiff oldValue={str1} newValue={str2} />;
};

const CommentCard = ({
  comment,
  essayText,
  isTextComparisonRequired = false,
}) => {
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
          <Card.Body style={{ whiteSpace: "pre-line" }}>
            {isTextComparisonRequired
              ? compareStrings(essayText, comment.body)
              : comment.body}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CommentCard;
