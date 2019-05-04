import React from "react";
import ReactSelect from "react-select";
import FieldLabel from "../label/label";

const appRootVariables = getComputedStyle(document.documentElement);

const defaultStyles = {
  control: styles => ({ ...styles, backgroundColor: appRootVariables.getPropertyValue('--mono-1') }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = appRootVariables.getPropertyValue('--mono-3');;
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? appRootVariables.getPropertyValue('--mono-1') : isFocused ? appRootVariables.getPropertyValue('--mono-1') : null,
      color: isDisabled
        ? appRootVariables.getPropertyValue('--mono-4')
        : appRootVariables.getPropertyValue('--mono-3'),
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: styles => ({ ...styles, fontSize: appRootVariables.getPropertyValue('--fs-s') }),
  placeholder: styles => ({ ...styles, fontSize: appRootVariables.getPropertyValue('--fs-s') }),
  singleValue: (styles, { data }) => ({ ...styles, fontSize: appRootVariables.getPropertyValue('--fs-m'), color: appRootVariables.getPropertyValue('--mono-4')  }),
}

const Select = ({ id, label, ...rest }) => {
  return (
    <React.Fragment>
      <FieldLabel id={id} label={label} />
      <ReactSelect
        id={id}
        {...rest}
        styles={defaultStyles}
      />
    </React.Fragment>
  );
};

export default Select;
