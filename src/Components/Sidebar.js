import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  DollarSign,
  User,
  BarChart2,
  CreditCard,
  Briefcase,
  Settings,
  Shield,
  Wrench
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home />, path: '/' },
  { name: 'Transactions', icon: <DollarSign /> },
  { name: 'Accounts', icon: <User /> },
  { name: 'Investments', icon: <BarChart2 /> },
  { name: 'Credit Cards', icon: <CreditCard /> },
  { name: 'Loans', icon: <Briefcase /> },
  { name: 'Services', icon: <Wrench /> },
  { name: 'My Privileges', icon: <Shield /> },
  { name: 'Setting', icon: <Settings />, path: '/settings' }
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden sm:flex w-1/5 ml- 16 bg-white h-screen shadow-md flex justify-center border-r border-blue-200">
      <nav className="flex flex-col space-y-6 mt-12">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          const content = (
            <div
              className={`flex items-center space-x-6 cursor-pointer ${
                isActive ? 'text-black font-semibold' : 'text-gray-400 hover:text-black'
              }`}
            >
              <div className="w-5 h-5 flex-shrink-0">{item.icon}</div>
              <span className="text-sm">{item.name}</span>
            </div>
          );

          return item.path ? (
            <Link to={item.path} key={item.name}>
              {content}
            </Link>
          ) : (
            <div key={item.name}>{content}</div>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
