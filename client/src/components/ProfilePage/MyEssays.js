import React from "react";
import Feed from "../common/Feed";

const MyEssays = ({ ids }) => {
  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    // TODO получить эссе из бд
  }, [ids]);

  return (
    <div>
      <Feed feedType="oneAuthorEssays" ids={ids} />
    </div>
  );
};

export default MyEssays;
