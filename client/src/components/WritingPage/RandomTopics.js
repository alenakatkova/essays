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
  const { register, setValue, getValues } = useFormContext();
  const [wikiArticles, setWikiArticles] = React.useState([]);

  const generateTopicsChoice = async () => {
    const randomArticles = await getRandomArticlesFromWiki(langCode);
    setWikiArticles(randomArticles);
    onTopicListGeneration();
    setIsTopicChosen(false);
  };

  return (
    <>
      <div className="mb-3">
        <Button onClick={generateTopicsChoice}>
          {t("writing.form.articles.generate")}
        </Button>
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
