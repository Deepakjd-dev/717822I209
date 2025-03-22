import axios from "axios";

const API_BASE_URL = "https://20.244.56.144/test";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI1OTQ3LCJpYXQiOjE3NDI2MjU2NDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM1MTc4YTA5LWJhY2ItNDRmYS04NmUzLTgwMTBiNjM3YTNiYiIsInN1YiI6IjcxNzgyMmkyMDlAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gQ29sbGVnZSBvZiBFbmdpbmVlcmluZyIsImNsaWVudElEIjoiMzUxNzhhMDktYmFjYi00NGZhLTg2ZTMtODAxMGI2MzdhM2JiIiwiY2xpZW50U2VjcmV0IjoiSUtuVXFCV2dhWFhjUVZYaiIsIm93bmVyTmFtZSI6IkRlZXBhayIsIm93bmVyRW1haWwiOiI3MTc4MjJpMjA5QGtjZS5hYy5pbiIsInJvbGxObyI6IjcxNzgyMkkyMDkifQ.H71l5kmHU3DZ25cIZUpioA1ySwcy3DBZtM1heK9AE-E";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});
