/* eslint-disable react/display-name */
import { Routes, Route, Navigate } from "react-router-dom";
import { Discover } from "../pages/Discover";
import { NotFound } from "../pages/NotFound";
import { Watch } from "../pages/Watch";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private";

export default function () {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/discover" element={<Discover />} />
        <Route path="/watch/course/" element={<Watch />}>
          <Route path=":slug_course" element={<Watch />}>
            <Route path=":slug_module" element={<Watch />}>
              <Route path=":slug_video" element={<Watch />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
