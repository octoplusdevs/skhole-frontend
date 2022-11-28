/* eslint-disable react/display-name */
import { Routes, Route, Navigate } from "react-router-dom";
import { Discover } from "../pages/Discover";
import { NotFound } from "../pages/NotFound";
import { Watching } from "../pages/Watching";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
// import { PrivateRoute } from "./private";
import { useAuthContext } from "../hooks/useAuthContext";

export default function () {
  // const isLoggedIn = localStorage.getItem("user");
  const { user } = useAuthContext();
  console.log("sxs", user);

  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Navigate to="/discover" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/discover" />} />
      <Route path="/discover" element={user ? <Discover /> : <Navigate to="/" />} />
      <Route path="/watch" element={user ? <Watching /> : <Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
