import React from "react";

const Select = (props) => {
  const { id, name, label, value, onChange, options } = props;
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-800 capitalize"
      >
        {label ?? name}
      </label>

      <select
        name={name}
        id={id}
        className="py-2 px-3 border border-gray-200 text-sm rounded-sm outline-blue-400"
        value={value}
        onChange={onChange}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
