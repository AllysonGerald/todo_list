import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

// Aplication
import App from "./App";

// Root
const elementRoot = document.getElementById("root");
const root = createRoot(elementRoot);

// Render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);