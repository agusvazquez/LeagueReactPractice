import { create } from "apisauce";

export const HOST = "https://ddragon.leagueoflegends.com/";

const api = create({
  baseURL: `${HOST}cdn/11.9.1/data/en_US/`,
});

export default api;
