"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdCard from '@/components/AdCard';
import FilterSidebar from '@/components/FilterSidebar';

// Mock data for different categories
const categoryData = {
  // Motors categories
  suzuki: {
    title: 'Suzuki Cars',
    description: 'Browse Suzuki cars for sale',
    ads: [
      {
        id: 1,
        title: 'Suzuki Mehran 2016',
        price: 'Rs 950,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        date: '5 hours ago',
        featured: false
      },
      {
        id: 2,
        title: 'Suzuki Cultus 2018',
        price: 'Rs 1,200,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      },
      {
        id: 3,
        title: 'Suzuki Swift 2019',
        price: 'Rs 1,800,000',
        location: 'Islamabad, Capital Territory',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: '2 days ago',
        featured: false
      }
    ]
  },
  toyota: {
    title: 'Toyota Cars',
    description: 'Browse Toyota cars for sale',
    ads: [
      {
        id: 4,
        title: 'Toyota Corolla 2017',
        price: 'Rs 2,500,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '3 hours ago',
        featured: true
      },
      {
        id: 5,
        title: 'Toyota Vitz 2016',
        price: 'Rs 1,500,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: false
      }
    ]
  },
  honda: {
    title: 'Honda Cars',
    description: 'Browse Honda cars for sale',
    ads: [
      {
        id: 6,
        title: 'Honda Civic 2018',
        price: 'Rs 3,200,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: '2 hours ago',
        featured: true
      },
      {
        id: 7,
        title: 'Honda City 2017',
        price: 'Rs 2,800,000',
        location: 'Islamabad, Capital Territory',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '4 days ago',
        featured: false
      }
    ]
  },
  motors: {
    title: 'All Motors',
    description: 'Browse all motor vehicles for sale',
    ads: [
      {
        id: 1,
        title: 'Honda Civic 2018',
        price: 'Rs 3,200,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: '2 hours ago',
        featured: true
      },
      {
        id: 2,
        title: 'Toyota Corolla 2017',
        price: 'Rs 2,500,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '5 hours ago',
        featured: false
      },
      {
        id: 3,
        title: 'Suzuki Mehran 2016',
        price: 'Rs 950,000',
        location: 'Islamabad, Capital Territory',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      }
    ]
  },
  // Property categories
  houses: {
    title: 'Houses for Sale',
    description: 'Browse houses for sale',
    ads: [
      {
        id: 101,
        title: '3 Marla House for Sale',
        price: 'Rs 1.2 Crore',
        location: 'DHA Phase 6, Lahore',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
        date: '2 days ago',
        featured: true
      },
      {
        id: 102,
        title: '5 Marla House for Sale',
        price: 'Rs 2.1 Crore',
        location: 'Bahria Town, Islamabad',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        date: '1 week ago',
        featured: false
      }
    ]
  },
  apartments: {
    title: 'Apartments & Flats for Sale',
    description: 'Browse apartments and flats for sale',
    ads: [
      {
        id: 201,
        title: '2 Bed Apartment for Sale',
        price: 'Rs 85 Lacs',
        location: 'Gulberg III, Lahore',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        date: '3 days ago',
        featured: true
      },
      {
        id: 202,
        title: '3 Bed Apartment for Sale',
        price: 'Rs 1.5 Crore',
        location: 'Defence Phase 8, Karachi',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80',
        date: '5 days ago',
        featured: false
      }
    ]
  },
  shops: {
    title: 'Shops for Sale',
    description: 'Browse shops for sale',
    ads: [
      {
        id: 301,
        title: 'Shop for Sale',
        price: 'Rs 1.8 Crore',
        location: 'Saddar, Rawalpindi',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      },
      {
        id: 302,
        title: 'Commercial Shop for Sale',
        price: 'Rs 2.5 Crore',
        location: 'Blue Area, Islamabad',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
        date: '2 weeks ago',
        featured: false
      }
    ]
  },
  property: {
    title: 'All Properties',
    description: 'Browse all properties for sale',
    ads: [
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
        title: '2 Bed Apartment for Sale',
        price: 'Rs 85 Lacs',
        location: 'Gulberg III, Lahore',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        date: '3 days ago',
        featured: true
      },
      {
        id: 3,
        title: 'Shop for Sale',
        price: 'Rs 1.8 Crore',
        location: 'Saddar, Rawalpindi',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      }
    ]
  },
  // Main page categories
  mobiles: {
    title: 'Mobile Phones',
    description: 'Browse mobile phones for sale',
    ads: [
      {
        id: 1,
        title: 'Samsung Galaxy S21 Ultra',
        price: 'Rs 180,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
        date: '5 hours ago',
        featured: false
      },
      {
        id: 2,
        title: 'iPhone 13 Pro Max',
        price: 'Rs 220,000',
        location: 'Islamabad, Capital Territory',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      },
      {
        id: 3,
        title: 'Xiaomi Redmi Note 12',
        price: 'Rs 55,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
        date: '3 days ago',
        featured: false
      }
    ]
  },
  cars: {
    title: 'Cars for Sale',
    description: 'Browse cars for sale',
    ads: [
      {
        id: 4,
        title: 'Honda Civic 2018 for Sale',
        price: 'Rs 3,200,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        date: '2 hours ago',
        featured: true
      },
      {
        id: 5,
        title: 'Toyota Corolla 2017',
        price: 'Rs 2,500,000',
        location: 'Faisalabad, Punjab',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '2 days ago',
        featured: false
      },
      {
        id: 6,
        title: 'Suzuki Mehran 2016',
        price: 'Rs 950,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        date: '4 days ago',
        featured: false
      }
    ]
  },
  motorcycles: {
    title: 'Motorcycles for Sale',
    description: 'Browse motorcycles for sale',
    ads: [
      {
        id: 7,
        title: 'Honda CG 125',
        price: 'Rs 85,000',
        location: 'Lahore, Punjab',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: false
      },
      {
        id: 8,
        title: 'Yamaha YBR 125',
        price: 'Rs 95,000',
        location: 'Karachi, Sindh',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
        date: '3 days ago',
        featured: true
      }
    ]
  },
  electronics: {
    title: 'Electronics & Home Appliances',
    description: 'Browse electronics and home appliances',
    ads: [
      {
        id: 9,
        title: 'MacBook Pro 2020',
        price: 'Rs 250,000',
        location: 'Islamabad, Capital Territory',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
        date: '1 day ago',
        featured: true
      },
      {
        id: 10,
        title: 'Gaming PC Full Setup',
        price: 'Rs 120,000',
        location: 'Rawalpindi, Punjab',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        date: '3 days ago',
        featured: false
      },
      {
        id: 11,
        title: 'Sony WH-1000XM4 Headphones',
        price: 'Rs 45,000',
        location: 'Multan, Punjab',
        image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
        date: '2 days ago',
        featured: false
      }
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const [showFilters, setShowFilters] = useState(false);
  
  // Get category data or default to motors
  const category = categoryData[slug] || categoryData.motors;

  const handleAdClick = (ad) => {
    // Navigate to product detail page
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#002f34] mb-2">{category.title}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {/* Filter Toggle Button for Mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left flex items-center justify-between"
          >
            <span className="font-medium text-gray-700">Filters</span>
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar />
          </div>

          {/* Ads Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.ads.map((ad) => (
                <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 