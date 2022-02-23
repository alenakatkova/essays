import React from "react";
import { Badge, Button, Form } from "react-bootstrap";
import { BsLink45Deg as LinkIcon } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getRandomArticlesFromWiki } from "../../api/RandomArticlesAPI";
import { useFormContext } from "react-hook-form";

const RandomTopics = ({
  langCode,
  setIsTopicChosen,
  onTopicListGeneration,
}) => {
  const { t } = useTranslation();
  const { register, setValue, watch } = useFormContext();
  const [wikiArticles, setWikiArticles] = React.useState([]);

  const watchHowManyArticles = watch("howManyArticles");

  const generateTopicsChoice = async () => {
    const randomArticles = await getRandomArticlesFromWiki(
      langCode,
      watchHowManyArticles
    );
    setWikiArticles(randomArticles);
    onTopicListGeneration();
    setIsTopicChosen(false);
  };

  React.useEffect(() => {
    setValue("howManyArticles", 5);
  }, []);

  return (
    <>
      <div className="mb-3">
        <Form.Group className="mb-3 row align-items-center">
          <Form.Label className="col-auto">
            {t("writing.form.articles.howMany")}
          </Form.Label>
          <Form.Control
            style={{ width: "15%" }}
            type="number"
            {...register("howManyArticles")}
          />
          <Button
            className="mx-2"
            style={{ width: "25%" }}
            onClick={generateTopicsChoice}
          >
            {t("writing.form.articles.generate")}
          </Button>
        </Form.Group>
      </div>
      <Form.Group
        onChange={() => {
          setIsTopicChosen(true);
        }}
      >
        {wikiArticles.map((article) => (
          <Form.Check
            key={article.id}
            type="radio"
            id={article.id}
            label={
              <span>
                {article.title}{" "}
                <Badge bg="light" text="dark">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    title={t("writing.form.articles.link")}
                  >
                    <LinkIcon />
                  </a>
                </Badge>
              </span>
            }
            value={article.title}
            {...register("topic")}
          />
        ))}
      </Form.Group>
    </>
  );
};

export default RandomTopics;
