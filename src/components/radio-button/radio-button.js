import React from "react";
import FieldLabel from "../label/label";
import "./radio-button.css";

const RadioButton = ({ label, name, id, onChange, disabled }) => {
  return (
    <div className="radio-button-container">
      <input
        id={id}
        type="radio"
        name={name}
        disabled={disabled}
        onChange={e => onChange(e.target.checked)}
      />
      <FieldLabel id={id} label={label}></FieldLabel>
    </div>
  );
};

export default RadioButton;
