import React from 'react';
import clsx from 'clsx';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg font-semibold transition-colors duration-200',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-secondary text-primary hover:bg-secondary/90': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;