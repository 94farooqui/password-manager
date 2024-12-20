import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";
import NewCreds from "./pages/NewCreds";
import Categories from "./pages/Categories";
import NewCategory from "./pages/NewCategory";
import EditCreds from "./pages/EditCreds";
import SetupMaster from "./pages/SetupMaster";

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/add-creds" element={<NewCreds />} />
          <Route path="/edit-creds/:credId" element={<EditCreds />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/new-category" element={<NewCategory />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setup-master" element={<SetupMaster />} />
      </Routes>
    </>
  );
}

export default App
