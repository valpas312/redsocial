import axios from "axios";

const URL_USERS = "https://users-app-two.vercel.app/api/"
const URL_POSTS = "http://localhost:3000/"

const useAxiosUsers = axios.create({
  baseURL: URL_USERS,
  headers: {
    "Content-Type": "application/json",
  }
});

export const useAxiosPosts = axios.create({
  baseURL: URL_POSTS,
  headers: {
    "Content-Type": "application/json",
  },
});

export default useAxiosUsers;