import React from "react";
import EssayCard from "./EssayCard/index";

const Essays = ({ toRender = [], isDraft = false }) => {
  return (
    <div>
      {toRender.map((post) => (
        <div key={post._id} className="mb-5">
          <EssayCard essay={post} isDraft={isDraft} />
        </div>
      ))}
    </div>
  );
};

export default Essays;
