import React from "react";
import EssayCard from "./EssayCard/index";

const Essays = ({ toRender = [] }) => {
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
