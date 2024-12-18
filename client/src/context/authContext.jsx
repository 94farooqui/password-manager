import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false)

  const login = async (email, password) => {
    try{
      setLoading(true)
    const { data } = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    if(data){
      setLoading(false)
      console.log("Token", data.token);
      localStorage.setItem("token", data.token);
    }
    

    // Decode token to get user data
    const decodedUser = jwtDecode(data.token);
    setUser(decodedUser);
    }catch(error){
      console.log(error)
    }

  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Decode token to get user data
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error);
        logout(); // Logout if token is invalid
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout,loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
