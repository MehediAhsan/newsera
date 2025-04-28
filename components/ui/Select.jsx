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
                className={`w-full px-4 py-2 text-third bg-transparent border border-gray-700 rounded focus:outline-none transition ${errors?.[name] && "border-red-500"}`}
                {...rest}
            >
                <option value="" className="bg-gray-800">Choose an option</option>
                {options.map((option) => (
                    <option key={option} value={option} className="bg-black">
                        {option}
                    </option>
                ))}
            </select>
            {errors?.[name] && <p className="text-sm text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};

export default Select;
