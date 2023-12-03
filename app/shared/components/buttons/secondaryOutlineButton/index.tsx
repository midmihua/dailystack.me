import React from 'react';

import BasicButton from '@/app/shared/components/basic/button';

type SecondaryOutlineButtonProps = {
  title: string;
  name?: string;
  id?: string;
  type?: ButtonActionTypes;
  disabled?: boolean;
  classes?: string | [string];
  onClick?: () => void;
  onSubmit?: () => void;
};

const SecondaryOutlineButton = (props: SecondaryOutlineButtonProps) => {
  const { title, name, id, type, disabled, classes, onClick, onSubmit } = props;

  return (
    <BasicButton
      variant={'secondaryOutline'}
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

export default SecondaryOutlineButton;
