import api from "./api";

export const getChampions = () => {
  return api.get("/champion.json");
};
