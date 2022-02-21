import React from "react";
import { useTranslation } from "react-i18next";
// import { Badge, Button, Form } from "react-bootstrap";
import { getAllEssays, getOneEssay } from "../../api/EssayAPI";
import EssayCard from "../EssayCard";

const Feed = ({ feedType, ids = [] }) => {
  const { t } = useTranslation();
  const [essays, setEssays] = React.useState([]);

  const getEssays = React.useCallback(async () => {
    const fetchedData = await getAllEssays();
    if (fetchedData === undefined) setEssays([]);
    else setEssays(fetchedData);
  }, []);

  const getOneAuthorsEssays = React.useCallback(async () => {
    const fetchedData = await Promise.allSettled(ids.map(getOneEssay));
    const userEssays = fetchedData.map((x) => x.value); // TODO фильтровать по status "settled" и обработать ошибки
    setEssays(userEssays);
  }, [ids]);

  React.useEffect(() => {
    switch (feedType) {
      case "oneAuthorEssays":
        getOneAuthorsEssays();
        break;
      case "allEssays":
        getEssays();
        break;
      default:
        setEssays([]);
    }
  }, []);

  return (
    <div>
      {essays.map((essay) => (
        <div key={essay._id} className="mb-5">
          <EssayCard essay={essay} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
