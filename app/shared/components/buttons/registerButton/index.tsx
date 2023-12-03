import React from 'react';

import BasicButton from '@/app/shared/components/basic/button';
import { TEXT } from '@/app/shared/constants/text';

type RegisterButtonProps = {
  onClick?: () => void;
  classes?: string | [string];
};

const RegisterButton = (props: RegisterButtonProps) => {
  const { onClick, classes } = props;

  return (
    <BasicButton
      title={TEXT.buttons.register}
      variant="primary"
      classes={classes}
      onClick={onClick}
    />
  );
};

export default RegisterButton;
