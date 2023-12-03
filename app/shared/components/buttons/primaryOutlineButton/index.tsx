import React from 'react';

import BasicButton from '@/app/shared/components/basic/button';

type PrimaryOutlineButtonProps = {
  title: string;
  name?: string;
  id?: string;
  type?: ButtonActionTypes;
  disabled?: boolean;
  classes?: string | [string];
  onClick?: () => void;
  onSubmit?: () => void;
};

const PrimaryOutlineButton = (props: PrimaryOutlineButtonProps) => {
  const { title, name, id, type, disabled, classes, onClick, onSubmit } = props;

  return (
    <BasicButton
      variant={'primaryOutline'}
      title={title}
      name={name}
      id={id}
      type={type}
      disabled={disabled}
      classes={classes}
      onClick={onClick}
      onSubmit={onSubmit}
    />
  );
};

export default PrimaryOutlineButton;
