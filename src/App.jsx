import React from "react";

import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  console.log("by Sabudh Bahadur Thapa | tsabudh.com.np");
  return (
    <Routes>
      <Route path="/shristi-furniture" element={<Pages />}>
        <Route path="" index element={<HomePage />} />
        <Route path="shop" index element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default App;
