import React from "react";

const Input = ({ className, type, name, onChange, value }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
