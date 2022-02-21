import React from "react";
import { useTranslation } from "react-i18next";
// import { Badge, Button, Form } from "react-bootstrap";
import EssayCard from "../EssayCard";

const Feed = ({ postsToRender = [] }) => {
  const { t } = useTranslation();

  return (
    <div>
      {postsToRender.map((post) => (
        <div key={post._id} className="mb-5">
          <EssayCard essay={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
