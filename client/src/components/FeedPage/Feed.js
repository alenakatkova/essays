import React from "react";
import { getAllEssays } from "../../api/EssayAPI";
import Essays from "../common/Essays";

const Feed = ({ filters }) => {
  const [essays, setEssays] = React.useState([]);
  const { language, test, level } = filters;

  const getEssays = React.useCallback(async () => {
    const data = await getAllEssays(language, test, level);
    if (data === undefined) setEssays([]);
    else setEssays(data);
  }, [language, test, level]);

  React.useEffect(() => {
    getEssays();
  }, [getEssays]);

  return (
    <>
      <Essays toRender={essays} />
    </>
  );
};

export default Feed;
