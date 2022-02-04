import axios from "axios";

export const getRandomArticlesFromWiki = async (languageCode) => {
  let wikiUrl = `https://${languageCode}.wikipedia.org/w/api.php?origin=*`;

  const params = {
    action: "query",
    rnnamespace: 0,
    format: "json",
    list: "random",
    rnlimit: "5",
  };

  Object.keys(params).forEach(function (key) {
    wikiUrl += "&" + key + "=" + params[key];
  });

  try {
    const response = await axios.get(wikiUrl);
    return response.data.query.random.reduce((articles, currentArticle) => {
      return [
        ...articles,
        {
          id: currentArticle.id,
          title: currentArticle.title,
          url: `https://${languageCode}.wikipedia.org/wiki/${currentArticle.title}`,
        },
      ];
    }, []);
  } catch (e) {
    console.error(e);
  }
};
