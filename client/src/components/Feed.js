import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getFilteredEssays } from "../api/EssayAPI";
import EssayCard from "./EssayCard";

const FeedPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const [essays, setEssays] = React.useState([]);

  const getAllEssays = React.useCallback(async () => {
    const fetchedData = await getFilteredEssays();
    setEssays(fetchedData);
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
          <h2>лента </h2>
          <div>
            <EssayCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
