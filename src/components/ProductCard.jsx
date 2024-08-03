import React from "react";
import classNames from "classnames/bind";

import styles from "./ProductCard.module.scss";

const cx = classNames.bind(styles);

function ProductCard({ item }) {
  return (
    <div className={cx("product-card")}>
      <section className={cx("image")}>
        <figure>
          <img src={item.image} alt="Product" className={cx("image-first")} />
        </figure>
        <div className={cx("tags")}></div>
      </section>
      <section className={cx("details")}>
        <div className={cx("title")}>{item.title}</div>
        <div className={cx("sub-title")}>{item.subTitle}</div>
        <p className="price">{item.price}</p>
      </section>
    </div>
  );
}

export default ProductCard;
