"use client";

import React, { useState } from 'react';
import { Search, MapPin, Car, DollarSign } from 'lucide-react';

const MotorsHero = () => {
  const [make, setMake] = useState('Select Make');
  const [model, setModel] = useState('Select Model');
  const [location, setLocation] = useState('Select Location');
  const [price, setPrice] = useState('Select Price');

  const makes = [
    'Suzuki',
    'Toyota',
    'Honda',
    'Daihatsu',
    'Nissan',
    'Mitsubishi',
    'Hyundai',
    'KIA'
  ];

  const models = [
    'Civic',
    'Corolla',
    'Mehran',
    'Cultus',
    'Swift',
    'Vitz',
    'City'
  ];

  const locations = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Faisalabad',
    'Rawalpindi',
    'Multan'
  ];

  const prices = [
    'Under 5 Lacs',
    '5-10 Lacs',
    '10-20 Lacs',
    '20-35 Lacs',
    '35-50 Lacs',
    '50 Lacs - 1 Crore',
    '1+ Crore'
  ];

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80")'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Car in Pakistan
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
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  <option value="Select Make" className="text-gray-900">Select Make</option>
                  {makes.map((makeOption) => (
                    <option key={makeOption} value={makeOption} className="text-gray-900">{makeOption}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  <option value="Select Model" className="text-gray-900">Select Model</option>
                  {models.map((modelOption) => (
                    <option key={modelOption} value={modelOption} className="text-gray-900">{modelOption}</option>
                  ))}
                </select>
              </div>

              {/* Row 2 */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  <option value="Select Location" className="text-gray-900">Select Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="text-gray-900">{loc}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 font-medium"
                >
                  <option value="Select Price" className="text-gray-900">Select Price</option>
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

export default MotorsHero; 