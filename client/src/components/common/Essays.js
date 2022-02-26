import React from "react";
// import { useTranslation } from "react-i18next";
// import { Badge, Button, Form } from "react-bootstrap";
import EssayCard from "./EssayCard/index";

const Essays = ({ toRender = [] }) => {
  // const { t } = useTranslation();

  return (
    <div>
      {toRender.map((post) => (
        <div key={post._id} className="mb-5">
          <EssayCard essay={post} />
        </div>
      ))}
    </div>
  );
};

export default Essays;
