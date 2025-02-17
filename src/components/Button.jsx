import React from "react";
 
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button(props) {
  const { className: classes, children, ...restOfProps } = props;

   return (
    <button className={cx(classes?.split(" "))} {...restOfProps}>
      {children}
    </button>
  );
}

export default Button;

