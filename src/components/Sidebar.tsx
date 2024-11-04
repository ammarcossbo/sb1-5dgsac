import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Search, Settings, Shield, LogOut } from 'lucide-react';
import NavLink from './navigation/NavLink';
import UserProfile from './navigation/UserProfile';

const navigation = [
  { name: 'Dashboard', href: '/', icon: FileText },
  { name: 'Pesquisar', href: '/search', icon: Search },
  { name: 'Configurações', href: '/settings', icon: Settings },
  { name: 'Segurança', href: '/security', icon: Shield },
];

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <FileText className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-white text-lg font-semibold">NFe Storage</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </nav>
          </div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}