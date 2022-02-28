import React from "react";
import Essays from "../common/Essays";
import { getUserEssays } from "../../api/UserAPI";

const MyEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getUserEssays(userId);
    if (essaysFromServer === undefined) setEssays([]);
    else setEssays(essaysFromServer);
  }, [userId]);

  React.useEffect(() => {
    userId && getEssays();
  }, [userId, getEssays]);

  return (
    <>
      <Essays toRender={essays} isMyEssay={true} />
    </>
  );
};

export default MyEssays;
