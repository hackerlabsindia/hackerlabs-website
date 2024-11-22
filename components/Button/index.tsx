import React from "react";
import clsx from "clsx";
import "./Button.css";

export enum IconPosition {
  START = "START",
  END = "END",
}

interface ButtonProps {
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
}: ButtonProps) => {
  return (
    <div className={clsx(containerClass)}>
      {children ? (
        children
      ) : (
        <>
          {icon && iconPosition === IconPosition.START && icon}
          <p>{text}</p>
          {icon && iconPosition === IconPosition.END && icon}
        </>
      )}
    </div>
  );
};

export default Button;
