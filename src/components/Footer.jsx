import React from "react";

import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer")}>
      <section className={cx("content")}>
        <div className={cx("brand")}>
          <div className={cx("logo")}>
            <p>Shristi Furniture</p>
          </div>
          <div className={cx("address")}>Jeep Park, Baglung-02, Nepal</div>
        </div>
        <div className={cx("links")}>
          <p className={cx("title")}>Links</p>
          <ul className={cx("link-list")}>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className={cx("copyright")}>
        <p>Copyright 2022. Shristi Furniture Udhyog. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
