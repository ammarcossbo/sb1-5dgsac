import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationButton() {
  return (
    <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <span className="sr-only">Ver notificações</span>
      <Bell className="h-6 w-6" />
    </button>
  );
}