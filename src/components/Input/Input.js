import React from "react";

const Input = (props) => {
  const { onChange, value, type, placeholder, className, style, name } = props;
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      style={{ ...style }}
    />
  );
};

export default Input;
