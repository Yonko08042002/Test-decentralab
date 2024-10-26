import "./index.css";
import { Routes } from "@generouted/react-router";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

root.render(<Routes />);
