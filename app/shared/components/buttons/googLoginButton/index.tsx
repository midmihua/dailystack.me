import Image from 'next/image';
import React from 'react';

import BasicButton from '@/app/shared/components/basic/button';
import { TEXT } from '@/app/shared/constants/text';
import googleIcon from '@/public/icons/ic_google.svg';

type GoogLoginButtonProps = {
  onClick?: () => void;
  classes?: string | [string];
};

const GoogLoginButton = (props: GoogLoginButtonProps) => {
  const { onClick, classes } = props;

  const icon = <Image src={googleIcon} width={22} alt="Google Icon" />;

  return (
    <BasicButton
      title={TEXT.buttons.google}
      variant="primaryOutline"
      classes={classes}
      icon={icon}
      onClick={onClick}
    />
  );
};

export default GoogLoginButton;
