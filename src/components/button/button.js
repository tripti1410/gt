import React from "react";
import cx from "classnames";
import "./button.css";

const Button = ({children, primary}) => {
  return (
    <button type="button" className={cx('btn', {'btn-primary': primary})}>
      {children}
    </button>
  )
}

export default Button;