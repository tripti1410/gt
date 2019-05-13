import React from "react";
import cx from "classnames";
import "./button.css";

const Button = ({children, primary, onClick}) => {
  return (
    <button type="button" onClick={() => onClick()} className={cx('btn', {'btn-primary': primary})}>
      {children}
    </button>
  )
}

export default Button;