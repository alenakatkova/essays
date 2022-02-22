import { instance } from "./APIUtils";

export const postEssay = async (data) => {
  try {
    return await instance.post("/essays", {
      minAmountOfWords: data.wordsCount,
      language: data.language,
      test: data.test,
      timingInMinutes: data.timingInMinutes,
      user_id: "6202c18f37cf3ae3173dc916", // TODO добавить сюда аутентицированного пользователя
      title: data.essayTitle,
      body: data.essayBody,
      topic: data.article,
    });
  } catch (e) {
    console.error(e.response.data.errors);
  }
};

export const getEssays = async (language, test, level) => {
  const langFilter = language ? `language=${language}&` : "";
  const testFilter = test ? `test=${test}&` : "";
  const levelFilter = level ? `level=${level}` : "";
  const search = langFilter + testFilter + levelFilter;
  const endpoint =
    search.length > 0
      ? "/essays?" + langFilter + testFilter + levelFilter
      : "/essays";
  try {
    const res = await instance.get(endpoint);
    return res.data.data.essays;
  } catch (e) {
    console.error(e);
  }
};

export const getOneEssay = async (essayId) => {
  try {
    const res = await instance.get("/essays/" + essayId);
    return res.data.data.essay;
  } catch (e) {
    console.error(e);
  }
};
