import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const instance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

// эссе для тестов
// const essay = {
//   _id: "essay01",
//   topic: "Carte géographique",
//   user_id: "user01",
//   title: "Types de carte",
//   body:
//     "Les cartes géographiques peuvent être classée en trois types :\n" +
//     "\n" +
//     "Les cartes topographiques qui recensent et décrivent de façon précise et détaillée les éléments naturels du terrain, tel le relief, l’hydrographie en utilisant une symbologie conventionnelles : courbes de niveau, relief ombré, traits bleus pour représenter les cours d’eau. Dans ce type de carte, une attention particulière est accordée au positionnement précis des objets représentés.",
//   comments: [],
//   editSuggestionsComments: [],
//   writingSettings: {},
//   createdAt: "2022-02-19T20:25:59.949Z",
//   updatedAt: "2022-02-19T20:25:59.949Z",
// };
