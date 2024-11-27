import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  className,
  variant = "primary",
  type = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-md font-semibold transition-colors duration-200",
        {
          "bg-primary text-white hover:bg-primary/90": variant === "primary",
          "bg-secondary text-primary hover:bg-secondary/90":
            variant === "secondary",
        },
        type,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
