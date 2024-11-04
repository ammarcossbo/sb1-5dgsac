import React from 'react';
import { Bell } from 'lucide-react';
import SearchBar from './search/SearchBar';
import NotificationButton from './notifications/NotificationButton';
import UserAvatar from './user/UserAvatar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex items-center">
            <NotificationButton />
            <UserAvatar />
          </div>
        </div>
      </div>
    </header>
  );
}