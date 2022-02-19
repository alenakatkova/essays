import React from "react";

const MyEssays = ({ ids }) => {
  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    // TODO получить эссе из бд
  }, [ids]);

  return <div>{ids}</div>;
};

export default MyEssays;
