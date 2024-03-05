import React from "react";

const Input = (props) => {
  const { label, id, type, name, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-800 capitalize"
      >
        {label ?? name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="py-2 px-3 border border-gray-200 text-sm rounded-sm outline-blue-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
