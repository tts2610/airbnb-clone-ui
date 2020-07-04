export const axiosSignUp = {
    axios
      .post(`https://cloneairbnb2020.herokuapp.com/users/register`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ showSignUpSpinner: false, showSignUp: false });
      })
      .catch((error) => {
        if (error.response.data.message.includes("duplicate")) {
          this.setState({ errorSignUp: "This email already existed" });
          this.setState({ showSignUpSpinner: false });
        }
      });
}