import React from "react";
import classNames from "classnames/bind";

import styles from "./HomePage.module.scss";
import SectionHomePageHero from "../components/SectionHomePageHero";
import SectionHomePageCategory from "../components/SectionHomePageCategory";
import SectionHomePageOurProducts from "../components/SectionHomePageOurProducts";

const cx = classNames.bind(styles);
  
function HomePage() {
  return (
    <React.Fragment>
      <SectionHomePageHero />
      <SectionHomePageCategory />
      <SectionHomePageOurProducts />
    </React.Fragment>
  );
}

export default HomePage;
