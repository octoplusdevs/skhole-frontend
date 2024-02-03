/* eslint-disable react/display-name */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Components/Layout";
import PrivateRoute from "./private"

const Courses = lazy(() => import("../pages/Courses"));
const Learning = lazy(() => import("../pages/Learning"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Watch = lazy(() => import("../pages/Watch"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));
const ForgotPassword  = lazy(() => import( "../pages/ForgotPassword"))
const ResetPassword = lazy(() => import("../pages/ResetPassword"))
const ConfirmAccount = lazy(() => import("../pages/confirmAccount"))

export default function () {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
          <Route element={<PrivateRoute />}>
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
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/password/reset/" element={<ForgotPassword />} />
          <Route path="/account/confirm/:token" element={<ConfirmAccount />} />
          <Route path="/login" element={<Login />} />
    </Routes>
    </Suspense>
  );
}
