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

export const logUserOut = async () => {
  try {
    return await instance.delete("/users/logout");
  } catch (e) {
    console.error(e);
  }
};
