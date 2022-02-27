import React from "react";
import CommentCard from "./CommentCard";

const Comments = ({ toRender = [] }) => {
  return (
    <div>
      {toRender.map((comment) => {
        return (
          <div key={comment[0]._id} className="mb-2">
            <CommentCard comment={comment[0]} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
