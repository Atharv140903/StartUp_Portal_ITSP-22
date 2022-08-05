import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTI5MWExNzMzZWViOTZmNDM5NzkwZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTkwMzU3MTgsImV4cCI6MTY1OTI5NDkxOH0.LxWO6nPWgSrePs3FB4J0bXTtx94EgEE2rU6y3dTMOFk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
