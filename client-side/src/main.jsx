import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home";
import { TodoProvider } from "./TodoContext/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <Home />
    </TodoProvider>
  </React.StrictMode>
);
