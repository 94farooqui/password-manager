import axios from 'axios'

const token = localStorage.getItem("token")

export const fetchPasswords = async () => {
    //console.log("Token:",token)
    const { data } = await axios.get("http://localhost:5000/api/creds", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data
};

export const addNewCreds = async (credsData) => {
    const response = await axios.post("http://localhost:5000/api/creds", credsData,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    if(response.status == 201){
        return true
    }
    else return false
};