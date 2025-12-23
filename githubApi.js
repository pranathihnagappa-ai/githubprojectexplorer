import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchRepos = (query) => {
  return API.get(`/search/repositories?q=${query}&sort=stars&order=desc`);
};