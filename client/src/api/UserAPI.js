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
