import React from 'react';

const links = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'My Ads', value: 'my-ads' },
  { label: 'Saved Ads', value: 'saved-ads' },
  { label: 'Settings', value: 'settings' },
];

export default function DashboardSidebar({ active, onSelect }) {
  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-56 mb-8 md:mb-0 flex md:flex-col gap-2 md:gap-4">
      {links.map((link) => (
        <button
          key={link.value}
          onClick={() => onSelect(link.value)}
          className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors text-gray-800 hover:bg-blue-50 hover:text-blue-700 ${active === link.value ? 'bg-blue-100 text-blue-700' : ''}`}
        >
          {link.label}
        </button>
      ))}
    </aside>
  );
} 