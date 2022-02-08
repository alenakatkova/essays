import axios from "axios";

const apiUrl = "http://localhost:8080";

export const postEssay = async (data) => {
  try {
    return await axios.post(apiUrl + "/essays", {
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
