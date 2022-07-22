import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputI extends React.HTMLProps<HTMLInputElement> {
  type: "email" | "password" | "text";
  label?: string;
}

const Input = ({ type, label, className, ...inputProps }: InputI) => {
  const [showPassword, setShowPassword] = useState(false);

  const labelProps = {} as React.HTMLProps<HTMLLabelElement>;
  let inputType = type;

  if (inputProps.id) {
    labelProps.htmlFor = inputProps.id;
  }

  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }

  const togglePasswordInput = () => setShowPassword(!showPassword);

  return (
    <div className="w-full mb-3.5">
      {label && (
        <label {...labelProps} className="ff-lato text-xs font-extrabold inline-block mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full h-12 rounded-2xl border border-gray">
        <input {...inputProps} type={inputType} className={`w-full h-full rounded-2xl px-4 ${className || ""}`} />
        {type === "password" && (
          <button onClick={togglePasswordInput} className="absolute top-3 right-4 w-6 h-6">
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
