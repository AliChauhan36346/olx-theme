"use client";

import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const PropertyHero = () => {
  const [propertyType, setPropertyType] = useState('Land & Plots');
  const [location, setLocation] = useState('Search Location');
  const [areaSize, setAreaSize] = useState('Select Area Size');
  const [areaUnit, setAreaUnit] = useState('Marla');
  const [price, setPrice] = useState('Price');

  const propertyTypes = [
    'Land & Plots',
    'Houses',
    'Apartments & Flats',
    'Shops',
    'Commercial Plots',
    'Industrial Plots'
  ];

  const locations = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Faisalabad',
    'Rawalpindi',
    'Multan'
  ];

  const areaSizes = [
    '1-5 Marla',
    '5-10 Marla',
    '10-20 Marla',
    '20+ Marla'
  ];

  const areaUnits = [
    'Marla',
    'Kanal',
    'Sq. Ft',
    'Sq. Yards'
  ];

  const prices = [
    'Under 50 Lacs',
    '50 Lacs - 1 Crore',
    '1-2 Crore',
    '2-5 Crore',
    '5+ Crore'
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80")'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Properties for Sale in Pakistan
          </h1>
          
          {/* Buy/Rent Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 flex">
              <button className="px-6 py-2 rounded-md bg-blue-100 text-blue-700 font-semibold">
                Buy
              </button>
              <button className="px-6 py-2 rounded-md text-gray-600 hover:text-gray-800 font-semibold">
                Rent
              </button>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Row 1 */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type} className="text-gray-900">{type}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="text-gray-900">{loc}</option>
                  ))}
                </select>
              </div>

              {/* Row 2 */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <select
                  value={areaSize}
                  onChange={(e) => setAreaSize(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  {areaSizes.map((size) => (
                    <option key={size} value={size} className="text-gray-900">{size}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  {areaUnits.map((unit) => (
                    <option key={unit} value={unit} className="text-gray-900">{unit}</option>
                  ))}
                </select>
              </div>

              {/* Row 3 */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  {prices.map((priceRange) => (
                    <option key={priceRange} value={priceRange} className="text-gray-900">{priceRange}</option>
                  ))}
                </select>
              </div>

              <button className="bg-[#002f34] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#005266] transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero; 