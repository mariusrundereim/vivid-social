import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default Router;
