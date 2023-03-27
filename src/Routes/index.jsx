/* eslint-disable react/display-name */
import { Routes, Route, Navigate } from "react-router-dom";
import { Discover } from "../pages/Discover";
import { NotFound } from "../pages/NotFound";
import { Watching } from "../pages/Watching";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private";

export default function () {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/discover" element={<Discover />} />
        <Route path="/watch" element={<Watching />}>
          <Route path=":course_id" element={<Watching />}>
            <Route path=":video_id" element={<Watching />} />
          </Route>
        </Route>
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
