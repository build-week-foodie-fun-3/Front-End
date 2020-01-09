import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://foodiefun3.herokuapp.com",
    headers: {
      Authorization: token,
      // Remove when live
      AccessControlAllowOrigin: "http://localhost:3000",
    },
  });
};
