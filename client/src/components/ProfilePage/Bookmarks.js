import React from "react";
import Feed from "../common/Feed";
import { getUserBookmarkedEssays } from "../../api/UserAPI";

const Bookmarks = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getUserBookmarkedEssays(userId);
    setEssays(essaysFromServer);
  }, [userId]);

  React.useEffect(() => {
    userId && getEssays();
  }, [userId]);

  return (
    <>
      <Feed postsToRender={essays} />
    </>
  );
};

export default Bookmarks;
