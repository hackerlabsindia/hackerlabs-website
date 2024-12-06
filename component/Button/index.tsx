import React from "react";
import clsx from "clsx";


export enum IconPosition {
  START = "START",
  END = "END",
}

export interface ButtonProps {
  children?: React.ReactNode;
  icon?: JSX.Element;
  text?: string;
  iconPosition?: IconPosition;
  containerClass?: string;
  tabIndex?: number;
  label?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  iconPosition,
  icon,
  text,
  containerClass,
  tabIndex,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(containerClass)}
      tabIndex={tabIndex}
      aria-label={label}
      onClick={onClick} // Attach the click handler here
    >
      {children ? (
        children
      ) : (
        <>
          {icon && iconPosition === IconPosition.START && icon}
          <p>{text}</p>
          {icon && iconPosition === IconPosition.END && icon}
        </>
      )}
  </button>
  );
};

export default Button;
