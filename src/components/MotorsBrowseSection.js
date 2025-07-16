'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const makes = [
  'Suzuki', 'Toyota', 'Honda', 'Daihatsu', 'Nissan', 'Mitsubishi', 'Hyundai',
  'KIA', 'Changan', 'Mercedes', 'Chevrolet', 'FAW', 'Prince', 'Mazda'
];
const tabs = ['Make', 'Model', 'City', 'Price Range'];

export default function MotorsBrowseSection() {
  const [activeTab, setActiveTab] = useState('Make');
  const router = useRouter();

  const handleMakeClick = (make) => {
    // Navigate to category page with the make as a parameter
    router.push(`/category/${make.toLowerCase()}`);
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002f34] mb-4">Browse Used Cars</h2>
      <div className="flex gap-6 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 px-2 text-base font-semibold border-b-2 transition-colors ${activeTab === tab ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Car Makes */}
      {activeTab === 'Make' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-4">
          {makes.map(make => (
            <button
              key={make}
              className="flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm font-semibold text-gray-700 hover:bg-blue-50 transition cursor-pointer"
              onClick={() => handleMakeClick(make)}
            >
              {/* You can add SVG logos here if available */}
              {make}
            </button>
          ))}
        </div>
      )}
    </section>
  );
} 