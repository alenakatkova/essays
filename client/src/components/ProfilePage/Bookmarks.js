import React from "react";

const Bookmarks = ({ ids }) => {
  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    // TODO получить эссе из бд
  }, [ids]);

  return <div>bookmarks</div>;
};

export default Bookmarks;
