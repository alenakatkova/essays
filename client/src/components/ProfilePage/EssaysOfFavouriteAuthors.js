import React from "react";

const EssaysOfFavouriteAuthors = ({ ids }) => {
  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    // TODO получить эссе из бд
  }, [ids]);

  return <div>{ids}</div>;
};

export default EssaysOfFavouriteAuthors;
