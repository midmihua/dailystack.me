import classNames from 'classnames';
import React from 'react';

type BasicInputProps = {
  name: string;
  type?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  classes?: string | [string];
  onClick?: () => void;
};

const BasicInput = (props: BasicInputProps) => {
  const { name, type, id, placeholder, required, disabled, classes, onClick } = props;

  const basicClasses =
    'px-3 py-2 ring-1 ring-slate-300 rounded-md text-slate-600 focus:outline-none focus:ring-slate-400 focus:shadow-sm placeholder:text-sm bg-transparent';

  const finalClasses = Array.isArray(classes)
    ? classNames(basicClasses, ...classes)
    : classNames(basicClasses, classes);

  return (
    <input
      name={name}
      id={id}
      type={type || 'text'}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={finalClasses}
      onClick={onClick}
    />
  );
};

export default BasicInput;
