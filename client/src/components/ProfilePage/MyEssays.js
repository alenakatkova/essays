import React from "react";
import Essays from "../common/Essays";
import { getUserEssays } from "../../api/UserAPI";

const MyEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    console.log("bla");
    const essaysFromServer = await getUserEssays(userId);
    console.log(essaysFromServer);
    if (essaysFromServer === undefined) setEssays([]);
    else setEssays(essaysFromServer);
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

export default MyEssays;
