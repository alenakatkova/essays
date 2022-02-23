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

export const getBookmarkedEssays = async (userId) => {
  try {
    const res = await instance.get(`/users/${userId}/bookmarked-essays`);
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
