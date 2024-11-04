import React from 'react';

export default function UserAvatar() {
  return (
    <div className="ml-3 relative">
      <div className="flex items-center">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
        />
        <span className="ml-3 text-sm font-medium text-gray-700">Admin</span>
      </div>
    </div>
  );
}