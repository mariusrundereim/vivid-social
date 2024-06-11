import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import RegisterForm from "../pages/Register";
import LoginForm from "../pages/Login";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
