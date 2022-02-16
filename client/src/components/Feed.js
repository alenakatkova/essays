import React from "react";
import { useTranslation } from "react-i18next";
// import { Badge, Button, Form } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { getFilteredEssays } from "../api/EssayAPI";
import EssayCard from "./EssayCard";

const FeedPage = () => {
  const { t } = useTranslation();
  // const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const [essays, setEssays] = React.useState([]);

  const getAllEssays = React.useCallback(async () => {
    const fetchedData = await getFilteredEssays();
    if (fetchedData === undefined) setEssays([]);
    else setEssays(fetchedData);
  }, []);

  React.useEffect(() => {
    getAllEssays();
  }, [getAllEssays]);

  return (
    <div className="container">
      <h1>{t("feed.title")}</h1>
      <div className="row">
        <div className="col-2">{t("feed.filters.title")}</div>
        <div className="col-10">
          <div>
            {essays.map((essay) => (
              <div key={essay._id} className="mb-5">
                <EssayCard essay={essay} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
