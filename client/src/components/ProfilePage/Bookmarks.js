import React from "react";
import Essays from "../common/Essays";
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
      <Essays toRender={essays} />
    </>
  );
};

export default Bookmarks;
