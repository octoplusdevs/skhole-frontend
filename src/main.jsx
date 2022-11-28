import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/global";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Router/index";
import { AuthContextProvider } from "./context/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
    <ToastContainer />
  </AuthContextProvider>,
);
