import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./assets/App";
import "./index.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Router>
          <App />
        </Router>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
