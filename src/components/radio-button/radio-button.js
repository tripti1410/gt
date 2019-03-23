import React from "react";

const RadioButton = ({ label, name }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="radio" name={name} />
    </div>
  );
};

export default RadioButton;
