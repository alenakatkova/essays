import React from "react";

const Drafts = ({ ids }) => {
  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    // TODO получить эссе из бд
  }, [ids]);

  return <div>drafts</div>;
};

export default Drafts;
