import { instance } from "./APIUtils";

export const postEssay = async (data) => {
  try {
    return await instance.post("/essays", {
      minAmountOfWords: data.wordsCount,
      language: data.language,
      test: data.test,
      timingInMinutes: data.timingInMinutes,
      level: data.level,
      user_id: data.userId,
      title: data.essayTitle,
      body: data.essayBody,
      topic: data.topic,
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

export const getComments = async (essayId) => {
  try {
    const res = await instance.get(`essays/${essayId}/comments`);
    return res.data.data.comments;
  } catch (e) {
    console.error(e);
  }
};

export const getEditSuggestionsComments = async (essayId) => {
  try {
    const res = await instance.get(
      `essays/${essayId}/edit-suggestions-comments`
    );
    return res.data.data.comments;
  } catch (e) {
    console.error(e);
  }
};

export const postComment = async (data, essayId) => {
  try {
    return await instance.post(`essays/${essayId}/comment`, {
      user_id: data.userId,
      body: data.commentBody,
    });
  } catch (e) {
    console.error(e.response.data.errors);
  }
};

export const postEditSuggestions = async (data, essayId) => {
  try {
    return await instance.post(`essays/${essayId}/edit-suggestions-comment`, {
      user_id: data.userId,
      body: data.body,
    });
  } catch (e) {
    console.error(e.response.data.errors);
  }
};
