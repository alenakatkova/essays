import { instance } from "./APIUtils";

export const getAllTests = async () => {
  try {
    const res = await instance.get("/tests");
    return res.data.data.tests;
  } catch (e) {
    console.error(e);
  }
};
