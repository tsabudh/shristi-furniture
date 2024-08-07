import React from "react";

import classNames from "classnames/bind";

import styles from "./ShopPage.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopPageFilterBar from "../components/ShopPageFilterBar";

const cx = classNames.bind(styles);

function ShopPage() {
  return (
    <React.Fragment>
      <ShopPageFilterBar />
    </React.Fragment>
  );
}

export default ShopPage;
