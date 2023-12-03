import { UserIcon } from '@heroicons/react/outline';
import React from 'react';

const Avatar = () => {
  return (
    <div className="border-2 rounded-full p-1 border-indigo-500 hover:cursor-pointer">
      <UserIcon width={16} />
    </div>
  );
};

export default Avatar;
