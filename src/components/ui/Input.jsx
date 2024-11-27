import React from 'react';
import clsx from 'clsx';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        'w-full rounded-lg border-secondary bg-white px-4 py-2',
        'focus:border-accent focus:ring-accent',
        'placeholder:text-gray-400',
        className
      )}
      {...props}
    />
  );
};

export default Input;