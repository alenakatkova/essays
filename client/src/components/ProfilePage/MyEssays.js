import React from "react";
import Feed from "../common/Feed";
import { getUserEssays } from "../../api/UserAPI";

const MyEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const callback = React.useCallback(async () => {
    const essaysFromServer = await getUserEssays(userId);
    setEssays(essaysFromServer);
  }, [userId]);

  React.useEffect(() => {
    userId && callback();
  }, [userId]);

  return (
    <>
      <Feed postsToRender={essays} />
    </>
  );
};

export default MyEssays;
