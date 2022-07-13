import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCSS from "./styles/global.css";
import "./styles/reset.css";
import Board from "./components/Board";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalCSS />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/:id" element={<Board />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
