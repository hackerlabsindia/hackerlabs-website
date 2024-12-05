import React from "react";
import { boolean } from "zod";

interface InputProps {
  children?: React.ReactNode;
  Input?: () => React.ReactNode;
  type?: string;
  inputClass?: string;
  id?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Input({
  children,
  Input,
  type = "text",
  inputClass = "",
  id,
  placeHolder,
  onChange,
  required,
  value,
}: InputProps) {
  return (
    <>
      {children ? (
        children
      ) : Input ? (
        <Input />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required
        />
      )}
    </>
  );
}

export default Input;
