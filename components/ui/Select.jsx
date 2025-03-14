import React from "react";

const Select = ({
    label,
    register,
    name,
    options,
    required = false,
    errors,
    ...rest
}) => {
    const validationRules = {
        ...(required && { required: `${label || "This field"} is required` }),
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-gray-300">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <select
                {...register(name, validationRules)}
                className={`w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors?.[name] ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                    }`}
                {...rest}
            >
                <option value="">Choose an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {errors?.[name] && <p className="text-sm text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};

export default Select;
