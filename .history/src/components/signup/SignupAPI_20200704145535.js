import axios from "axios";
export const signupUser = (user) => {
  axios
    .post(process.env.REACT_APP_SIGNUP_USER_URL, user)
    .then((res) => {
      //   console.log(res);
      //   console.log(res.data);
      return res;
    })
    .catch((error) => {
      //   if (error.response.data.message.includes("duplicate")) {
      //     this.setState({ errorSignUp: "This email already existed" });
      //     this.setState({ showSignUpSpinner: false });
      //   }
      console.log(error);
      return error;
    });
};
