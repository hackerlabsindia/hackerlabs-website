import React from "react";

interface InputProps {
  children?: React.ReactNode;
  Input?: () => React.ReactNode;
  type?: string;
  inputClass?: string;
  id?: string;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  children,
  Input,
  type = "text",
  inputClass = "",
  id,
  placeHolder,
  onChange,
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
          onChange={onChange}
        />
      )}
    </>
  );
}

export default Input;
