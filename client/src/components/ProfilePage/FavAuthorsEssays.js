import React from "react";
import Feed from "../common/Feed";
import { getFavAuthorsEssays } from "../../api/UserAPI";

const FavAuthorsEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getFavAuthorsEssays(userId);
    setEssays(essaysFromServer);
  }, [userId]);

  React.useEffect(() => {
    userId && getEssays();
  }, [userId, getEssays]);

  return (
    <>
      <Feed postsToRender={essays} />
    </>
  );
};

export default FavAuthorsEssays;
