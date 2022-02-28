import { instance } from "./APIUtils";

export const createUser = async (username, password) => {
  try {
    return await instance.post("/users/signup", {
      username,
      password,
    });
  } catch (e) {
    console.error(e);
  }
};

export const getUserInfo = async (userId) => {
  try {
    const res = await instance.get("/users/" + userId);
    return res.data.data.user;
  } catch (e) {
    console.error(e);
  }
};

export const getUserEssays = async (userId) => {
  try {
    const res = await instance.get(`/users/${userId}/essays`);
    return res.data.data.essays;
  } catch (e) {
    console.error(e);
  }
};

export const getFavAuthorsEssays = async (userId) => {
  try {
    const res = await instance.get(`/users/${userId}/fav-authors-essays`);
    return res.data.data.essays;
  } catch (e) {
    console.error(e);
  }
};

export const getLikedEssays = async (userId) => {
  try {
    const res = await instance.get(`/users/${userId}/liked-essays`);
    return res.data.data.essays;
  } catch (e) {
    console.error(e);
  }
};

export const updateUserWritingSettings = async (writingSettings, userId) => {
  try {
    return await instance.post(`/users/${userId}/writing-settings`, {
      writingSettings,
    });
  } catch (e) {
    console.error(e);
  }
};

export const postDraft = async (data, userId) => {
  try {
    return await instance.post(`/users/${userId}/draft`, {
      minAmountOfWords: data.wordsCount,
      language: data.language,
      test: data.test,
      timingInMinutes: data.timingInMinutes,
      user_id: data.userId,
      title: data.essayTitle,
      body: data.essayBody,
      topic: data.topic,
      level: data.level,
    });
  } catch (e) {
    console.error(e.response.data.errors);
  }
};

export const likeEssay = async (essayId, userId) => {
  try {
    //const res = await instance.get(`/users/${userId}/like`);
    //return res.data.data.user;
    console.log("liked");
    console.log(userId, essayId);
    return { likes: ["essayId"] }; // userObj
  } catch (e) {
    console.error(e);
  }
};

export const dislikeEssay = async (essayId, userId) => {
  try {
    //const res = await instance.get(`/users/${userId}/dislike`);
    //return res.data.data.user;
    console.log("disliked");
    console.log(userId, essayId);
    return { likes: ["essayId"] }; // userObj
  } catch (e) {
    console.error(e);
  }
};
