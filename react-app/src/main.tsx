import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/css/main.css";
import App from "@/App";

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <App />
  </StrictMode>
);
