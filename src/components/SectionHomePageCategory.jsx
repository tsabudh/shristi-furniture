import React from "react";
import classNames from "classnames/bind";

import styles from "./SectionHomePageCategory.module.scss";

import { category } from "../assets/category.json";

const cx = classNames.bind(styles);

function SectionHomePageCategory() {
  return (
    <section className={cx("section-category")}>
      <div className={cx("header")}>
        <h2>Browse the range </h2>
        <p>We have the best collection on ranges of furniture.</p>
      </div>

      <div className={cx("category-container")}>
        {category.map((item, index) => (
          <div className={cx("category-item")} key={index + item.title}>
            <div className={cx("image")}>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
            </div>
            <div className={cx("title")}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionHomePageCategory;
