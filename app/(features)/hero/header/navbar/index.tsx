import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden sm:block">
      <div className="flex gap-4 text-sm uppercase">
        <a
          href=""
          className="hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-slate-600">
          About
        </a>
        <a
          href=""
          className="hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-slate-600">
          FAQ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
