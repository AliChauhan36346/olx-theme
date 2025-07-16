"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const PropertyBrowseSection = () => {
  const router = useRouter();

  const propertyTypes = [
    {
      name: 'Houses',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <path d="M12 32v-8l12-8 12 8v8" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="18" y="24" width="12" height="8" rx="1" fill="#222"/>
        </svg>
      ),
      route: 'houses'
    },
    {
      name: 'Apartments & Flats',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="12" width="32" height="24" rx="2" fill="#222"/>
          <rect x="12" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="22" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="32" y="16" width="4" height="4" rx="1" fill="white"/>
          <rect x="12" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="22" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="32" y="24" width="4" height="8" rx="1" fill="white"/>
        </svg>
      ),
      route: 'apartments'
    },
    {
      name: 'Portions & Floors',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <path d="M8 28v-6l16-12 16 12v6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="20" width="12" height="8" rx="1" fill="#222"/>
          <rect x="22" y="20" width="12" height="8" rx="1" fill="#222"/>
        </svg>
      ),
      route: 'portions'
    },
    {
      name: 'Shops',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="20" width="32" height="16" rx="2" fill="#222"/>
          <rect x="12" y="24" width="8" height="8" rx="1" fill="white"/>
          <rect x="24" y="24" width="8" height="8" rx="1" fill="white"/>
          <rect x="36" y="24" width="4" height="8" rx="1" fill="white"/>
        </svg>
      ),
      route: 'shops'
    },
    {
      name: 'Commercial Plots',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="16" width="32" height="16" rx="2" fill="#222"/>
          <rect x="12" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="24" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="36" y="20" width="4" height="8" rx="1" fill="white"/>
        </svg>
      ),
      route: 'commercial-plots'
    },
    {
      name: 'Residential Plots',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <path d="M12 32v-8l12-8 12 8v8" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="18" y="24" width="12" height="8" rx="1" fill="#222"/>
          <circle cx="24" cy="28" r="2" fill="white"/>
        </svg>
      ),
      route: 'residential-plots'
    },
    {
      name: 'Industrial Plots',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="16" width="32" height="16" rx="2" fill="#222"/>
          <rect x="12" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="24" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="36" y="20" width="4" height="8" rx="1" fill="white"/>
          <path d="M16 12h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'industrial-plots'
    },
    {
      name: 'Agricultural Land',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <path d="M8 32v-8l16-12 16 12v8" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="18" y="24" width="12" height="8" rx="1" fill="#222"/>
          <circle cx="24" cy="28" r="2" fill="white"/>
          <path d="M12 20h24" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'agricultural-land'
    },
    {
      name: 'Files',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="12" y="8" width="24" height="32" rx="2" fill="#222"/>
          <rect x="16" y="12" width="16" height="2" rx="1" fill="white"/>
          <rect x="16" y="16" width="12" height="2" rx="1" fill="white"/>
          <rect x="16" y="20" width="16" height="2" rx="1" fill="white"/>
          <rect x="16" y="24" width="12" height="2" rx="1" fill="white"/>
          <rect x="16" y="28" width="16" height="2" rx="1" fill="white"/>
        </svg>
      ),
      route: 'files'
    },
    {
      name: 'Plot Form',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="12" y="8" width="24" height="32" rx="2" fill="#222"/>
          <rect x="16" y="12" width="16" height="2" rx="1" fill="white"/>
          <rect x="16" y="16" width="12" height="2" rx="1" fill="white"/>
          <rect x="16" y="20" width="16" height="2" rx="1" fill="white"/>
          <rect x="16" y="24" width="12" height="2" rx="1" fill="white"/>
          <rect x="16" y="28" width="16" height="2" rx="1" fill="white"/>
          <circle cx="32" cy="16" r="2" fill="white"/>
        </svg>
      ),
      route: 'plot-form'
    },
    {
      name: 'Building',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="12" width="32" height="24" rx="2" fill="#222"/>
          <rect x="12" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="22" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="32" y="16" width="4" height="4" rx="1" fill="white"/>
          <rect x="12" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="22" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="32" y="24" width="4" height="8" rx="1" fill="white"/>
          <path d="M8 12h32" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'building'
    },
    {
      name: 'Office',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="12" width="32" height="24" rx="2" fill="#222"/>
          <rect x="12" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="22" y="16" width="6" height="4" rx="1" fill="white"/>
          <rect x="32" y="16" width="4" height="4" rx="1" fill="white"/>
          <rect x="12" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="22" y="24" width="6" height="8" rx="1" fill="white"/>
          <rect x="32" y="24" width="4" height="8" rx="1" fill="white"/>
          <path d="M8 12h32" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 8v4" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'office'
    },
    {
      name: 'Factory',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="16" width="32" height="16" rx="2" fill="#222"/>
          <rect x="12" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="24" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="36" y="20" width="4" height="8" rx="1" fill="white"/>
          <path d="M16 12h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 8h8" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'factory'
    },
    {
      name: 'Warehouse',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F3F6FC"/>
          <rect x="8" y="16" width="32" height="16" rx="2" fill="#222"/>
          <rect x="12" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="24" y="20" width="8" height="8" rx="1" fill="white"/>
          <rect x="36" y="20" width="4" height="8" rx="1" fill="white"/>
          <path d="M16 12h16" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 8h8" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 4h0" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      route: 'warehouse'
    },
  ];

  const handlePropertyTypeClick = (route) => {
    router.push(`/category/${route}`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002f34] mb-4">
            Search by Property Type
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => handlePropertyTypeClick(type.route)}
            >
              <div className="mb-3">
                {type.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyBrowseSection; 