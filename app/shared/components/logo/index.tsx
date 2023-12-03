import { DatabaseIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/app/shared/constants/routes';

const Logo = () => {
  const logoContent = (
    <>
      <div className="text-teal-400 drop-shadow-md">
        <DatabaseIcon width={60} />
      </div>
      <div className="flex flex-col text-2xl font-extrabold">
        <span className="text-indigo-500 drop-shadow-md">Daily</span>
        <span className="text-pink-500 drop-shadow-md">Stack</span>
      </div>
    </>
  );

  return (
    <Link href={ROUTES.pages.hero} className="flex gap-2 items-end">
      {logoContent}
    </Link>
  );
};

export default Logo;
