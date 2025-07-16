"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PropertyNavbarTabs = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  const tabs = [
    { id: 'Buy', label: 'Buy', hasDropdown: true },
    { id: 'Rent', label: 'Rent', hasDropdown: false },
    { id: 'Blogs', label: 'Blogs', hasDropdown: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative">
              <button
                className={`flex items-center gap-1 py-3 px-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {tab.hasDropdown && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyNavbarTabs; 