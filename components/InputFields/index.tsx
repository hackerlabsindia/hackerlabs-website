import React from "react";
interface InputProps {
  children?: React.ReactNode;
  Input?: () => React.ReactNode;
  type?: string;
  inputClass?: string;
  id?: string;
  placeHolder?: string;
}

function Input({
  children,
  Input,
  type,
  inputClass,
  id,
  placeHolder,
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
        />
      )}
    </>
  );
}

export default Input;
