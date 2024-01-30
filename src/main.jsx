import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/global";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-widgets/styles.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux";
// import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "react-modal";
import './index.css'
import { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="bottom-right"

        />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          transition={Slide}
          draggable
          pauseOnHover
          theme="light"
        />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* </PersistGate> */}
    </Provider>
  </>,
);
