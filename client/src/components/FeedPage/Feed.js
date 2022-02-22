import React from "react";
import { getAllEssays } from "../../api/EssayAPI";
import Essays from "../common/Essays";

const Feed = ({ languages, tests, levels }) => {
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const data = await getAllEssays();

    if (data === undefined) setEssays([]);
    else setEssays(data);
  }, []);

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
