import React from 'react';

export default function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-64 mb-8 md:mb-0">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Filters</h3>
      
      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input 
            type="number" 
            placeholder="Min" 
            className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-gray-900" 
          />
          <input 
            type="number" 
            placeholder="Max" 
            className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-gray-900" 
          />
        </div>
      </div>
      
      {/* Location */}
      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Location</label>
        <input 
          type="text" 
          placeholder="Enter location" 
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-gray-900" 
        />
      </div>
      
      {/* Condition */}
      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Condition</label>
        <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900">
          <option value="">Any</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
      
      {/* Year Range */}
      <div className="mb-6">
        <label className="block text-gray-900 font-medium mb-2">Year Range</label>
        <div className="flex gap-2">
          <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900">
            <option value="">From</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900">
            <option value="">To</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      
      {/* Apply Filters Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </aside>
  );
} 