import React from "react";
import Essays from "../common/Essays";
import { getLikedEssays } from "../../api/UserAPI";

const Likes = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getLikedEssays(userId);
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

export default Likes;
