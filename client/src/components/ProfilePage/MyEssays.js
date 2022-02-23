import React from "react";
import Essays from "../common/Essays";
import { getUserEssays } from "../../api/UserAPI";

const MyEssays = ({ userId }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const essaysFromServer = await getUserEssays(userId);
    setEssays(essaysFromServer);
    console.log(essaysFromServer);
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
