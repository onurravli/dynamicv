import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Helmet } from "react-helmet";
import { resume } from "./lib/resume.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet
      title={`${resume.first_name} ${resume.last_name} | ${resume.title}`}
    />
    <App />
  </StrictMode>
);
