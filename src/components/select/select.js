import React from "react";
import ReactSelect from "react-select";

const Select = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <ReactSelect
        options={options}
        value={value}
        onChange={value => onChange(value)}
      />
    </div>
  );
};

export default Select;
