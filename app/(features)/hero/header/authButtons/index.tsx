import { LogoutIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/app/shared/constants/routes';

const AuthButtons = () => {
  const loggedIn = false; // TODO

  const text = loggedIn ? 'Logout' : 'Login';
  const icon = loggedIn ? <LogoutIcon width={18} /> : <LogoutIcon width={18} />;

  return (
    <Link
      href={ROUTES.pages.auth.login}
      className="flex gap-2 items-center hover:cursor-pointer hover:text-slate-600 border-r-2 border-slate-100 pr-3">
      <div className="">{text}</div>
      <div className="text-slate-600">{icon}</div>
    </Link>
  );
};

export default AuthButtons;
