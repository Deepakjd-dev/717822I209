import axios from "axios";

const API_BASE_URL = "https://20.244.56.144/test";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI3NDUzLCJpYXQiOjE3NDI2MjcxNTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM1MTc4YTA5LWJhY2ItNDRmYS04NmUzLTgwMTBiNjM3YTNiYiIsInN1YiI6IjcxNzgyMmkyMDlAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gQ29sbGVnZSBvZiBFbmdpbmVlcmluZyIsImNsaWVudElEIjoiMzUxNzhhMDktYmFjYi00NGZhLTg2ZTMtODAxMGI2MzdhM2JiIiwiY2xpZW50U2VjcmV0IjoiSUtuVXFCV2dhWFhjUVZYaiIsIm93bmVyTmFtZSI6IkRlZXBhayIsIm93bmVyRW1haWwiOiI3MTc4MjJpMjA5QGtjZS5hYy5pbiIsInJvbGxObyI6IjcxNzgyMkkyMDkifQ.0V11gqZi4ry-x4qz3I_suczVwrO6Ptl3f6SZJXZ243A";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});
