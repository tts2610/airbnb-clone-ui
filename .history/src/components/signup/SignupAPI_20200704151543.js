import axios from "axios";
export const signupUser = (user) => {
  axios
    .post(process.env.REACT_APP_SIGNUP_USER_URL, user)
    .then((res) => {
      //   console.log(res);
      //   console.log(res.data);
      return res.status;
    })
    .catch((error) => {
      return error.response.status;
    });
};
