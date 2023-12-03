import React from 'react';

import BasicInput from '@/app/shared/components/basic/input';

type EmailInputProps = {
  name: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  classes?: string | [string];
  onClick?: () => void;
};

const EmailInput = (props: EmailInputProps) => {
  const { name, id, placeholder, required, disabled, classes, onClick } = props;

  return (
    <BasicInput
      name={name}
      type={'email'}
      id={id}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      classes={classes}
      onClick={onClick}
    />
  );
};

export default EmailInput;
