import React from 'react';

import GoogLoginButton from '@/app/shared/components/buttons/googLoginButton';
import LoginButton from '@/app/shared/components/buttons/loginButton';
import EmailInput from '@/app/shared/components/inputs/emailInput';
import PassowrdInput from '@/app/shared/components/inputs/passwordInput';
import RegisterLink from '@/app/shared/components/links/registerLink';
import Logo from '@/app/shared/components/logo';
import { TEXT } from '@/app/shared/constants/text';

const LoginForm = () => {
  return (
    <main className="pt-20 flex flex-col justify-start items-center min-h-screen sm:p-0 sm:justify-center sm:w-[500px] sm:mx-auto">
      <div className="flex flex-col gap-10 items-center">
        <Logo />
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-600">
          {TEXT.auth.login.pageTitle}
        </h2>
      </div>
      <form className="mt-4 px-6 flex flex-col justify-center gap-5 w-full">
        <EmailInput name="email" placeholder={TEXT.auth.login.emailLabel} />
        <PassowrdInput name="password" placeholder={TEXT.auth.login.passowrdLabel} />
        <LoginButton classes={'w-full'} />
        <div className="flex flex-col justify-center gap-5">
          <div className="text-sm text-center text-slate-600">
            {TEXT.auth.login.googleOption}
          </div>
          <GoogLoginButton classes={'w-full'} />
        </div>
        <div className="mt-6 flex justify-center items-end gap-1">
          <span className="text-slate-600">{TEXT.auth.login.registerOption}</span>
          <RegisterLink />
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
