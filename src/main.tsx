import "./styles/index.css";

import { createRoot } from "react-dom/client";

import { HomePage } from "./page/Home";
import { ProviderThemeContext } from "./providers/theme";

createRoot(document.getElementById("root")!).render(
  <ProviderThemeContext>
    <HomePage />
  </ProviderThemeContext>
);
