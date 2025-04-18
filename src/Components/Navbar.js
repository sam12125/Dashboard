import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Group3 from '../assets/Group 3.png';
import Group4 from '../assets/Group 4.png';
import MaskGroup from '../assets/Mask Group.png';
import SearchIcon from '../assets/magnifying-glass 1.png';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative z-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-50 h-[80px] px-6 w-full">
        {/* Mobile Hamburger + Center Text + Profile */}
        <div className="w-full flex items-center justify-between md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={28} className="text-[#343C6A]" />
          </button>
          <h1 className="text-[#343C6A] text-xl font-bold">Overview</h1>
          <img className="h-10 w-10" src={MaskGroup} alt="Profile" />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Left: Logo + Overview */}
          <div className="flex items-center gap-44 ml-[5%]">
            <img src={Logo} alt="Logo" className="h-[30px] w-auto object-contain" />
            <h1 className="text-[#343C6A] text-2xl font-bold">Overview</h1>
          </div>

          {/* Right: Search + Icons */}
          <div className="flex items-center space-x-8">
            <div className="relative">
              <input
                className="p-2 pl-10 rounded-xl bg-[#F5F7FA] outline-none"
                placeholder="Search for something"
              />
              <img
                src={SearchIcon}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
            </div>
            <img
              className="h-10 w-10 cursor-pointer"
              src={Group4}
              alt="Settings"
              onClick={() => navigate('/settings')}
            />
            <img className="h-10 w-10" src={Group3} alt="Notifications" />
            <img className="h-10 w-10" src={MaskGroup} alt="Profile" />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50 md:hidden transition duration-300">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-[#343C6A]">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          <ul className="space-y-4">
            <li
              onClick={() => {
                navigate('/');
                setMenuOpen(false);
              }}
              className="cursor-pointer text-[#343C6A] hover:underline"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate('/settings');
                setMenuOpen(false);
              }}
              className="cursor-pointer text-[#343C6A] hover:underline"
            >
              Settings
            </li>
            <li className="cursor-pointer text-[#343C6A] hover:underline">
              Notifications
            </li>
            <li className="cursor-pointer text-[#343C6A] hover:underline">
              Profile
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
