import React from "react";
import classNames from "classnames/bind";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import styles from "./Navbar.module.scss";

import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
function Navbar() {
  return (
    <section className={cx("navbar")}>
      <div className={cx("brand")}>Shristi Furniture</div>
      <nav>
        <ul className={cx("nav-menu")}>
          <li className={cx("nav-item")}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={cx("nav-item")}>
            <NavLink to="/shop">shop</NavLink>
          </li>
          <li className={cx("nav-item")}>
            <NavLink to="/about">about</NavLink>
          </li>
          <li className={cx("nav-item")}>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={cx("icon-menu")}>
          <li className={cx("icon-menu-item")}>
            <NavLink to="/login">
              <FaRegUser />
            </NavLink>
          </li>
          <li className={cx("icon-menu-item")}>
            <NavLink to="/search">
              <IoSearch />
            </NavLink>
          </li>
          <li className={cx("icon-menu-item")}>
            <NavLink to="/favorites">
              <FaRegHeart />
            </NavLink>
          </li>
          <li className={cx("icon-menu-item")}>
            <NavLink to="/cart">
              <BsCart3 />
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
