import React from "react";

const Input = ({ label, name, placeholder, type }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        className="input-text"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
