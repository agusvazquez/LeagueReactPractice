import api, { HOST } from "./api";

export const getChampionFullImage = (championId) => {
  return `${HOST}cdn/img/champion/loading/${championId}_0.jpg`;
};

export const getChampions = () => {
  return api.get("/champion.json");
};
