'use client';

import React, { useState } from 'react';
import { Menu, X, User, Heart, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">OLX</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-5 h-5" />
              Saved
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => router.push('/auth/login')}
            >
              <User className="w-5 h-5" />
              Login
            </button>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
              onClick={() => router.push('/post-ad')}
            >
              <Plus className="w-4 h-4" />
              Post Free Ad
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Heart className="w-5 h-5" />
                Saved
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => router.push('/auth/login')}
              >
                <User className="w-5 h-5" />
                Login
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 w-fit"
                onClick={() => router.push('/post-ad')}
              >
                <Plus className="w-4 h-4" />
                Post Free Ad
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;