import axios from "axios";

export const registerUser = async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      userData
    );
    if (response.status === 201) {
      return true
    }
  } catch (err) {
    console.error(err);
    return false
  }
};

  const loginUser = async () => {
    //console.log(email, password)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (err.status === 404 || err.status === 401 || err.status === 500) {
        return {error}
      }

      if (res.data.token) {
        login(res.data.token);
      }
    } catch (err) {

      console.error("Error", err.status);
    }
  };

  export const getUserDetails = async (userId) => {
    try{
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`)
        if(response.status == 201){
            return response.data
        }
        else return false
    }
catch(error){
    console.log(error)
    return false
}
  }

