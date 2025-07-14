import React from 'react';

export default function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-64 mb-8 md:mb-0">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters</h3>
      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input type="number" placeholder="Min" className="w-1/2 p-2 border rounded placeholder-gray-400 text-gray-800" />
          <input type="number" placeholder="Max" className="w-1/2 p-2 border rounded placeholder-gray-400 text-gray-800" />
        </div>
      </div>
      {/* Location */}
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">Location</label>
        <input type="text" placeholder="Enter location" className="w-full p-2 border rounded placeholder-gray-400 text-gray-800" />
      </div>
      {/* Condition */}
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">Condition</label>
        <select className="w-full p-2 border rounded placeholder-gray-400 text-gray-800">
          <option value="">Any</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
      {/* Apply Filters Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Apply Filters</button>
    </aside>
  );
} 