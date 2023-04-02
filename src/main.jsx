import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/global";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>,
);
