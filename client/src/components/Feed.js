import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const apiUrl = "http://localhost:8080";

const getFilteredEssays = async (language, level, test) => {
  try {
  } catch (e) {
    console.error(e);
  }
  const res = await axios.get(apiUrl + "/essays");
  console.log(res.data.data.essays);
};

const FeedPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, getValues, watch } = useForm();

  const [essays, setEssays] = React.useState([]);

  React.useEffect(() => {
    getFilteredEssays();
  }, []);

  return (
    <div className="container">
      <h1>{t("feed.title")}</h1>
      <div className="row">
        <div className="col-2">{t("feed.filters.title")}</div>
        <div className="col-10">лента</div>
      </div>
    </div>
  );
};

export default FeedPage;
