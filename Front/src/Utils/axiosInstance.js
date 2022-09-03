import axios from "axios";

const instance = axios.create({
  baseURL: 'https://c6-42-m-mern-back.vercel.app/',
  timeout: 20000,
});

export default instance;