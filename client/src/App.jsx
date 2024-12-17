import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";
import NewCreds from "./pages/NewCreds";
import Categories from "./pages/Categories";
import NewCategory from "./pages/NewCategory";

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-creds" element={<NewCreds />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/new-category" element={<NewCategory />} />


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
