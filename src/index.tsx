import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context";
import { SnackbarProvider } from "notistack";
import { styled } from "@mui/system";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const styles = {
  error: { backgroundColor: "blue", color: "orange" },
};
root.render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }}>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>{" "}
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
