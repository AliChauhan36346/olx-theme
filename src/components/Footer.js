'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QuickSell</h3>
            <p className="text-white mb-4">
              Your trusted marketplace for buying and selling everything.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center text-white">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-4 h-4 mr-2" />
                support@quicksell.com
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2024 QuickSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;