import React from "react";
import Feed from "../common/Feed";
import { getBookmarkedEssays } from "../../api/UserAPI";

const Bookmarks = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getBookmarkedEssays(userId);
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

export default Bookmarks;
