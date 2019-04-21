import React from "react";

const RadioButton = ({ label, name, id, onChange }) => {
  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        onChange={e => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
