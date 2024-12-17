import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";
import NewCreds from "./pages/NewCreds";

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-creds" element={<NewCreds />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App
