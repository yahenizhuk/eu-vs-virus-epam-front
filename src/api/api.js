import axios from "axios";

export const api = axios.create({
  baseURL: 'https://eu-vs-virus-health.azurewebsites.net/api',
});
