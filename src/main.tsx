import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import isPropValid from "@emotion/is-prop-valid";
import App from "./App.tsx";
import "./index.css";
import { StyleSheetManager } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </StrictMode>
);
