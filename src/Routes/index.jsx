/* eslint-disable react/display-name */
import { Routes, Route } from "react-router-dom";
import { Discover } from "../pages/Discover";
import { NotFound } from "../pages/NotFound";
import { Watching } from "../pages/Watching";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRoute } from "./private";

export default function () {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Discover />
          </PrivateRoute>
        }
      />
      <Route
        path="/watching"
        element={
          <PrivateRoute>
            <Watching />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
