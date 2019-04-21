import React from "react";
import ReactSelect from "react-select";

const Select = ({ id, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <ReactSelect
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Select;
