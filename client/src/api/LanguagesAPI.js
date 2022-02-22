import { instance } from "./APIUtils";

export const getAllLanguages = async () => {
  try {
    const res = await instance.get("/languages");
    return res.data.data.languages;
  } catch (e) {
    console.error(e);
  }
};
