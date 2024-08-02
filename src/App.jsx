import React from "react";

import "./App.scss";

import {  Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Pages />}>
        <Route path="" index element={<HomePage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
