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

export const getAllEssays = async () => {
  try {
    const res = await instance.get("/essays");
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
