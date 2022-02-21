import React from "react";
import Feed from "../common/Feed";
import { getUserEssays } from "../../api/UserAPI";

const MyEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getUserEssays(userId);
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

export default MyEssays;
