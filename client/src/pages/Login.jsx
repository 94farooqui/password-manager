import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, user, loading, setLoading, authError } = useContext(AuthContext);
  const [error,setError] = useState("")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if(authError){
      console.log("Auth Error", authError)
      setLoading(false)
      setError(authError)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark_background">
      <div className="w-[450px] bg-light_background p-8 rounded-lg shadow-md">
        <h2 className="text-primary_purple text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-dark_background rounded-lg p-2  text-zinc-400 placeholder-zinc-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-dark_background rounded-lg p-2  text-zinc-400 placeholder-zinc-600"
          />
          <button
            type="submit"
            className="bg-primary_purple py-2 rounded-lg text-purple-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        {authError && <p className="text-red-500 mt-4">{authError}</p>}
        <p className="text-sm text-zinc-400 mt-4">
          Don't have an account?{" "}
          <span className="text-purple-700 hover:text-purple-400">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
