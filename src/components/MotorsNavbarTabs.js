import React, { useState } from 'react';

const tabs = [
  'Used Cars',
  'New Cars',
  'Car Comparison',
  'Car Reviews',
  'Car Finance',
  'Car Inspection',
  'Car Insurance',
  'More',
];

export default function MotorsNavbarTabs({ activeTab: propActiveTab, onTabChange }) {
  const [activeTab, setActiveTab] = useState(propActiveTab || 'Used Cars');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };
  return (
    <nav className="w-full border-b bg-white mb-4">
      <div className="flex flex-wrap gap-2 md:gap-6 py-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-base font-semibold px-2 pb-1 border-b-2 transition-colors whitespace-nowrap ${
              (activeTab === tab)
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-700 hover:text-blue-600'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
} 