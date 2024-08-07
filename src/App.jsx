import React from "react";

import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  console.log("what is happening? I don't get it");
  return (
    <Routes>
      <Route path="/" element={<Pages />}>
        <Route path="" index element={<HomePage />} />
        <Route path="shop" index element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default App;
