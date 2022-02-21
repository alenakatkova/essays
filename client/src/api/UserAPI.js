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
    //const res = await instance.get(`/users/${userId}/bookmarked-essays`);
    //return res.data.data.essays;
    return [
      {
        _id: "essay01",
        topic: "Carte géographique",
        user_id: "user01",
        title: "Types de carte",
        body:
          "Les cartes géographiques peuvent être classée en trois types :\n" +
          "\n" +
          "Les cartes topographiques qui recensent et décrivent de façon précise et détaillée les éléments naturels du terrain, tel le relief, l’hydrographie en utilisant une symbologie conventionnelles : courbes de niveau, relief ombré, traits bleus pour représenter les cours d’eau. Dans ce type de carte, une attention particulière est accordée au positionnement précis des objets représentés.",
        comments: [],
        editSuggestionsComments: [],
        writingSettings: {},
        createdAt: "2022-02-19T20:25:59.949Z",
        updatedAt: "2022-02-19T20:25:59.949Z",
      },
    ];
  } catch (e) {
    console.error(e);
  }
};
