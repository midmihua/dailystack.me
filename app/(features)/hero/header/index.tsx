import React from 'react';

import AuthButtons from '@/app/(features)/hero/header/authButtons';
import Avatar from '@/app/(features)/hero/header/avatar';
import Navbar from '@/app/(features)/hero/header/navbar';
import ThemeModeIcon from '@/app/(features)/hero/header/themeMode';
import Logo from '@/app/shared/components/logo';

const Header = () => {
  return (
    <>
      <header className="max-w-6xl mx-auto flex justify-between items-center px-3 py-5">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-4">
          <AuthButtons />
          <ThemeModeIcon />
          <Avatar />
        </div>
      </header>
      <div className="border-b-[1px] border-gray-100" />
    </>
  );
};

export default Header;
