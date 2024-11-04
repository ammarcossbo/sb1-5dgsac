import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  item: {
    name: string;
    href: string;
    icon: LucideIcon;
  };
}

export default function NavLink({ item }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === item.href;
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <Icon
        className={`mr-3 flex-shrink-0 h-6 w-6 ${
          isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-300'
        }`}
      />
      {item.name}
    </Link>
  );
}