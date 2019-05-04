import React from "react";
import "./label.css";

const FieldLabel = ({id, label}) => {
  return (
    <label htmlFor={id} className="field-label">{label}</label>
  )
}

export default FieldLabel;