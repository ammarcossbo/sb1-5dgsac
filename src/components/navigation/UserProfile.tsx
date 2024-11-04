import React from 'react';
import { LogOut } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex-shrink-0 flex bg-gray-700 p-4">
      <button className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin</p>
            <div className="flex items-center text-sm text-gray-300 hover:text-white cursor-pointer">
              <LogOut className="mr-1 h-4 w-4" />
              Sair
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}