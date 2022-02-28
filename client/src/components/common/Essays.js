import React from "react";
import EssayCard from "./EssayCard/index";

const Essays = ({ toRender = [], isDraft = false, isMyEssay = false }) => {
  return (
    <div>
      {toRender.map((post) => (
        <div key={post._id} className="mb-5">
          <EssayCard essay={post} isDraft={isDraft} isMyEssay={isMyEssay} />
        </div>
      ))}
    </div>
  );
};

export default Essays;
