import React from "react";

const Input = ({
  label,
  register,
  name,
  type = "text",
  required = false,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  errors,
  ...rest
}) => {
  const validationRules = {
    ...(required && { required: `${label || "This field"} is required` }),
    ...(pattern && { pattern: { value: pattern.value, message: pattern.message || "Invalid format" } }),
    ...(minLength && { minLength: { value: minLength, message: `Minimum length is ${minLength}` } }),
    ...(maxLength && { maxLength: { value: maxLength, message: `Maximum length is ${maxLength}` } }),
    ...(min && { min: { value: min, message: `Minimum value is ${min}` } }),
    ...(max && { max: { value: max, message: `Maximum value is ${max}` } }),
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        {...register(name, validationRules)}
        type={type}
        className={`w-full px-4 py-2 text-third bg-gray-950 border border-gray-700 rounded focus:outline-none transition ${errors?.[name] && "border-red-500"
          }`}
        {...rest}
      />
      {errors?.[name] && <p className="text-sm text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default Input;
