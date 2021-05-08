import { create } from "apisauce";

const api = create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/",
});

export default api;
