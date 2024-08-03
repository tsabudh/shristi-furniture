import React from "react";
import classNames from "classnames/bind";

import styles from "./SectionHomePageOurProducts.module.scss";
import { products } from "../assets/products/homepageFeaturedProduct.json";

import ProductCard from "./ProductCard";
import Button from "./Button";

const cx = classNames.bind(styles);

function SectionHomePageOurProducts() {
  return (
    <section className={cx("section-products")}>
      <div className={cx("header")}>
        <h2>Products </h2>
      </div>

      <div className={cx("products-container")}>
        {products.map((item, index) => (
          <ProductCard item={item} key={item.name + index} />
        ))}
      </div>

      <Button className={"primary"}>Show more</Button>
    </section>
  );
}

export default SectionHomePageOurProducts;
