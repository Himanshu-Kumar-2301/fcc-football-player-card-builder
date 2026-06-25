import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FootballPlayerCard from "./components/FootballPlayerCard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FootballPlayerCard />
  </StrictMode>,
);
