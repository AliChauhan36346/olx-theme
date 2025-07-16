"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AdCard from './AdCard';

const PropertyExploreSection = () => {
  const router = useRouter();

  const propertyAds = [
    {
      id: 1,
      title: '3 Marla House for Sale',
      price: 'Rs 1.2 Crore',
      location: 'DHA Phase 6, Lahore',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
      date: '2 days ago',
      featured: true
    },
    {
      id: 2,
      title: '5 Marla Commercial Plot',
      price: 'Rs 2.5 Crore',
      location: 'Bahria Town, Islamabad',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      date: '1 week ago',
      featured: false
    },
    {
      id: 3,
      title: '2 Bed Apartment for Sale',
      price: 'Rs 85 Lacs',
      location: 'Gulberg III, Lahore',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
      date: '3 days ago',
      featured: true
    },
    {
      id: 4,
      title: '10 Marla Residential Plot',
      price: 'Rs 3.2 Crore',
      location: 'Defence Phase 8, Karachi',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80',
      date: '5 days ago',
      featured: false
    },
    {
      id: 5,
      title: 'Shop for Sale',
      price: 'Rs 1.8 Crore',
      location: 'Saddar, Rawalpindi',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      date: '1 day ago',
      featured: true
    },
    {
      id: 6,
      title: 'Farm House for Sale',
      price: 'Rs 5.5 Crore',
      location: 'Murree Road, Islamabad',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
      date: '2 weeks ago',
      featured: false
    }
  ];

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#002f34]">
            Explore Properties
          </h2>
          <button 
            onClick={() => router.push('/category/property')}
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            View All Properties →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyAds.map((ad) => (
            <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyExploreSection; 