/* eslint-disable react/display-name */
import { Routes, Route } from "react-router-dom";
import { Courses } from "../pages/Courses";
import { Learning } from "../pages/Learning";
import { NotFound } from "../pages/NotFound";
import { Watch } from "../pages/Watch";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { Profile } from "../pages/Profile";
import { Layout } from "../Components/Layout";
import { ConfirmAccount } from "../pages/confirmAccount";

export default function () {
  return (
    <Routes>
      {/* <Route element={<PrivateRoute />}> */}
      <Route>
        <Route element={<Layout />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/me/:tab" element={<Profile />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/watch/" element={<Watch />}>
            <Route path=":slug_course" element={<Watch />}>
              <Route path=":slug_module" element={<Watch />}>
                <Route path=":slug_video" element={<Watch />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />
      <Route path="/password/reset/" element={<ForgotPassword />} />
      <Route path="/account/confirm/:token" element={<ConfirmAccount />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
