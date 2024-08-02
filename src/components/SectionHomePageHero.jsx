import React from "react";
import classNames from "classnames/bind";

import styles from "./SectionHomePageHero.module.scss";

import Button from "./Button";

const cx = classNames.bind(styles);

function SectionHomePageHero() {
  return (
    <section className={cx("hero")}>
      <div className={cx("container")}>
        <div className={cx("content")}>
          <p className={cx("title")}>New Arrival</p>
          <h2>Discover our new collection.</h2>
          <p className={cx("description")}>
            Our new memory matrices will give you the best sleep that will make
            you active the rest of the day.
          </p>

          <Button className={"primary"}>View in store</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionHomePageHero;
