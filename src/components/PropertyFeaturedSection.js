"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AdCard from './AdCard';

const PropertyFeaturedSection = () => {
  const router = useRouter();

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa for Sale',
      price: 'Rs 8.5 Crore',
      location: 'DHA Phase 8, Karachi',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
      date: '1 day ago',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Apartment Complex',
      price: 'Rs 2.1 Crore',
      location: 'Gulberg Greens, Lahore',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      date: '3 days ago',
      featured: true
    },
    {
      id: 3,
      title: 'Commercial Plaza for Sale',
      price: 'Rs 12 Crore',
      location: 'Blue Area, Islamabad',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      date: '1 week ago',
      featured: true
    },
    {
      id: 4,
      title: 'Farm House with Pool',
      price: 'Rs 6.8 Crore',
      location: 'Murree Hills, Islamabad',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
      date: '2 weeks ago',
      featured: true
    }
  ];

  const budgetRanges = [
    'Under 50 Lacs',
    '50 Lacs - 1 Crore',
    '1-2 Crore',
    '2-5 Crore',
    '5-10 Crore',
    '10+ Crore'
  ];

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  const handleBudgetClick = (range) => {
    // Navigate to category page with budget filter
    router.push(`/category/property?budget=${encodeURIComponent(range)}`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Properties */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#002f34]">
              Featured Properties
            </h2>
            <button 
              onClick={() => router.push('/category/property')}
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Featured →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>
        </div>

        {/* Search by Budget */}
        <div>
          <h3 className="text-2xl font-bold text-[#002f34] mb-6">
            Search by Budget
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {budgetRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleBudgetClick(range)}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeaturedSection; 