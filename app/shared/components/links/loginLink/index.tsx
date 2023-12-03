import React from 'react';

import BasicLink from '@/app/shared/components/basic/link';
import { ROUTES } from '@/app/shared/constants/routes';
import { TEXT } from '@/app/shared/constants/text';

const LoginLink = () => {
  return (
    <BasicLink
      title={TEXT.buttons.login}
      href={ROUTES.pages.auth.login}
      variant="primary"
      classes={'hover:underline hover:underline-offset-2'}
    />
  );
};

export default LoginLink;
