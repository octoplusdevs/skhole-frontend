import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/global";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import { AuthContextProvider } from "./contexts/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
    <ToastContainer />
  </AuthContextProvider>,
);
