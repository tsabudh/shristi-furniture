import React, { useEffect } from "react";

import classNames from "classnames/bind";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

import styles from "./ShopPageFilterBar.module.scss";

const cx = classNames.bind(styles);

function ShopPageFilterBar() {
  const [showValue, setShowValue] = React.useState(16);

  let tempShowValue = showValue;

  const handleShowValueOnChange = (e) => {
    const value = e.target.value;
    console.log("onchange", value);
    tempShowValue = showValue;
    setShowValue(value);
  };

  useEffect(() => {
    console.log(tempShowValue);
    if (!isInteger(showValue)) setShowValue(tempShowValue);
    if (!(0 < showValue < 50)) setShowValue(tempShowValue);
  }, [showValue]);

  return (
    <section className={cx("filter-bar")}>
      <div className={cx("filter")}>
        <div className={cx("icon")}>
          <HiOutlineAdjustmentsVertical />
        </div>
        <p>Filter</p>
        <div className={cx("icon")}></div>
        <div className={cx("icon")}></div>
      </div>
      <div className={cx("info")}>
        <p>Showing 1-9 of 12 results</p>
      </div>
      <div className={cx("show")}>
        <p>Show</p>
        <input
          className={cx("input-show")}
          type="text"
          name="filterShow"
          id="filterShow"
          value={showValue}
          onChange={handleShowValueOnChange}
        />
      </div>

      <div className={cx("sort-by")}>
        <select name="" id="">
          <option value="">Relevance</option>
          <option value="">Price: Low-High</option>
          <option value="">Price: High-Low</option>
        </select>
      </div>
    </section>
  );
}

export default ShopPageFilterBar;

function isInteger(value) {
  const pattern = /^\d+$/;
  return pattern.test(value);
}
