/* eslint-disable react/display-name */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Courses } from "../pages/Courses";
import { Course } from "../pages/Course";
import { Learning } from "../pages/Learning";
import { NotFound } from "../pages/NotFound";
import { Watch } from "../pages/Watch";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { Profile } from "../pages/Profile";
=======
>>>>>>> b339e531c3990110a28cae555d0af037789c37c5
import { Layout } from "../Components/Layout";
import PrivateRoute from "./private"
import Watch from "../pages/Watch";
import SkholeLogo from "@/assets/Logo";

const Courses = lazy(() => import("../pages/Courses"));
const Learning = lazy(() => import("../pages/Learning"));
const NotFound = lazy(() => import("../pages/NotFound"));
// const Watch = lazy(() => import("../pages/Watch"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));
const ForgotPassword  = lazy(() => import( "../pages/ForgotPassword"))
const ResetPassword = lazy(() => import("../pages/ResetPassword"))
const ConfirmAccount = lazy(() => import("../pages/confirmAccount"))

function PageLoader(){
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center gap-2 flex-col justify-center text-[#929292]">
      <SkholeLogo className="animate-pulse" height={70} width={70} />
      <h2>Skhole Profissional</h2>
    </div>
  )
}

export default function () {
  return (
<<<<<<< HEAD
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/me/:tab" element={<Profile />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug_course" element={<Course />} />
          <Route path="/courses/watch/" element={<Watch />}>
            <Route path=":slug_course" element={<Watch />}>
              <Route path=":slug_module" element={<Watch />}>
                <Route path=":slug_video" element={<Watch />} />
=======
    <>
      <Suspense fallback={<PageLoader/>}>
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
>>>>>>> b339e531c3990110a28cae555d0af037789c37c5
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
    </>
  );
}
