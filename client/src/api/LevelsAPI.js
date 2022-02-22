import { instance } from "./APIUtils";

export const getAllLevels = async () => {
  try {
    const res = await instance.get("/levels");
    return res.data.data.levels;
  } catch (e) {
    console.error(e);
  }
};
