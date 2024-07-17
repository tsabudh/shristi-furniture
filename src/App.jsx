import React, { useState } from "react";

import "./App.css";

import { carpets } from "./assets/products/carpetList.json";
console.log(carpets);

function App() {
  return (
    <div>
      {carpets.featured.map((item, index) => {
        return (
          <div key={item.name + index}>
            <p>{item.name}</p>
            <img src={item.image} alt="item.title" />
            <p>{item.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
