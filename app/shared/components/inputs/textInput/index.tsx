import React from 'react';

import BasicInput from '@/app/shared/components/basic/input';

type TextInputProps = {
  name: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  classes?: string | [string];
  onClick?: () => void;
};

const TextInput = (props: TextInputProps) => {
  const { name, id, placeholder, required, disabled, classes, onClick } = props;

  return (
    <BasicInput
      name={name}
      type={'text'}
      id={id}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      classes={classes}
      onClick={onClick}
    />
  );
};

export default TextInput;
