import React from "react";
import { getEssays } from "../../api/EssayAPI";
import Essays from "../common/Essays";

const Feed = ({ filters }) => {
  const [essays, setEssays] = React.useState([]);
  const { language, test, level } = filters;

  const getEssaysFromServer = React.useCallback(async () => {
    const essaysFromServer = await getEssays(language, test, level);
    if (essaysFromServer === undefined) setEssays([]);
    else setEssays(essaysFromServer);
  }, [language, test, level]);

  React.useEffect(() => {
    getEssaysFromServer();
  }, [getEssaysFromServer]);

  return (
    <>
      <Essays toRender={essays} />
    </>
  );
};

export default Feed;
