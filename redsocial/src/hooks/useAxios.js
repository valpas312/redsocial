import axios from "axios";

const URL = "https://users-app-two.vercel.app/api/"

const useAxios = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default useAxios;