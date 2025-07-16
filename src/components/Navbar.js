'use client';

import React, { useState } from 'react';
import { Menu, X, User, Plus, ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const categoryIcons = [
  {
    name: 'Motors',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F3F6FC"/>
        <path d="M8 22h16M10 18l2-6h8l2 6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="22" r="2" fill="#222"/>
        <circle cx="20" cy="22" r="2" fill="#222"/>
      </svg>
    ),
  },
  {
    name: 'Property',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#F3F6FC"/>
        <path d="M8 20v-6l8-6 8 6v6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="16" width="8" height="6" rx="1" fill="#222"/>
      </svg>
    ),
  },
];

const locations = [
  'Pakistan',
  'Lahore',
  'Karachi',
  'Islamabad',
  'Faisalabad',
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-[#eef3fc] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col gap-2">
          {/* Top Row: Logo, Categories, Login, Sell */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* QuickSell Logo */}
              <div 
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => router.push('/')}
              >
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="10" y="27" fontSize="22" fontWeight="bold" fill="#3a77ff" fontFamily="Arial, Helvetica, sans-serif">QuickSell</text>
                </svg>
              </div>
              {/* Categories */}
              <div className="flex items-center gap-4">
                {/* Motors */}
                <div
                  className={`flex items-center gap-1 cursor-pointer px-2 py-1 rounded-lg transition hover:opacity-80 ${pathname === '/motors' ? 'bg-white text-blue-700 font-bold' : ''}`}
                  onClick={() => router.push('/motors')}
                >
                  {categoryIcons[0].icon}
                  <span className="font-semibold text-base text-[#222]">Motors</span>
                </div>
                {/* Property */}
                <div
                  className={`flex items-center gap-1 cursor-pointer px-2 py-1 rounded-lg transition hover:opacity-80 ${pathname === '/property' ? 'bg-white text-blue-700 font-bold' : ''}`}
                  onClick={() => router.push('/property')}
                >
                  {categoryIcons[1].icon}
                  <span className="font-semibold text-base text-[#222]">Property</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="text-[#002f34] font-semibold underline underline-offset-2 hover:text-blue-700"
                onClick={() => router.push('/auth/login')}
              >
                Login
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-yellow-400 bg-gradient-to-r from-yellow-200 to-blue-200 text-[#002f34] font-bold hover:from-yellow-300 hover:to-blue-300 transition-all"
                onClick={() => router.push('/post-ad')}
              >
                <Plus className="w-5 h-5" />
                SELL
              </button>
            </div>
          </div>
          {/* Bottom Row: Location & Search - Hidden on motors and property pages */}
          {pathname !== '/motors' && pathname !== '/property' && (
            <div className="flex items-center gap-2 mt-2 w-full bg-white rounded-xl px-4 py-3 shadow-sm">
              {/* Location Selector */}
              <div className="relative" style={{ width: '220px' }}>
                <button
                  className="flex items-center w-full h-12 px-4 border border-gray-400 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="button"
                  style={{ minWidth: '180px' }}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2"><path d="M12 21c4.97-4.97 8-8.03 8-11a8 8 0 10-16 0c0 2.97 3.03 6.03 8 11z" stroke="#3a77ff" strokeWidth="1.5"/></svg>
                  <span className="flex-1 text-left">{selectedLocation}</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </button>
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10" style={{ display: 'none' }}>
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => setSelectedLocation(loc)}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
              {/* Search Bar */}
              <div className="flex-1 flex">
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-gray-700"
                  placeholder="Find Cars, Mobile Phones and more..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ minWidth: '0' }}
                />
                <button className="h-12 px-6 bg-[#002f34] text-white rounded-r-md flex items-center gap-2 font-semibold hover:bg-[#005266] transition-all">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;