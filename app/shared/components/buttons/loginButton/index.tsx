import React from 'react';

import BasicButton from '@/app/shared/components/basic/button';
import { TEXT } from '@/app/shared/constants/text';

type LoginButtonProps = {
  onClick?: () => void;
  classes?: string | [string];
};

const LoginButton = (props: LoginButtonProps) => {
  const { onClick, classes } = props;

  return (
    <BasicButton
      title={TEXT.buttons.login}
      variant="primary"
      classes={classes}
      onClick={onClick}
    />
  );
};

export default LoginButton;
