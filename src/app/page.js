'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import AdCard from '@/components/AdCard';
import Footer from '@/components/Footer';
import { Car, Home, Laptop, Gamepad2, Shirt, Baby } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Mock data - you can move this to a separate file later
const categories = [
  { icon: Car, name: 'Vehicles', slug: 'vehicles', count: '12,345' },
  { icon: Home, name: 'Property', slug: 'property', count: '8,567' },
  { icon: Laptop, name: 'Electronics', slug: 'electronics', count: '15,432' },
  { icon: Shirt, name: 'Fashion', slug: 'fashion', count: '9,876' },
  { icon: Gamepad2, name: 'Games', slug: 'games', count: '4,321' },
  { icon: Baby, name: 'Kids', slug: 'kids', count: '6,789' },
];

const recentAds = [
  {
    id: 1,
    title: 'Honda Civic 2018 for Sale',
    price: 'Rs 3,200,000',
    location: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    date: '2 hours ago',
    featured: true
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21 Ultra',
    price: 'Rs 180,000',
    location: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    date: '5 hours ago',
    featured: false
  },
  {
    id: 3,
    title: 'MacBook Pro 2020',
    price: 'Rs 250,000',
    location: 'Islamabad, Capital Territory',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    date: '1 day ago',
    featured: true
  },
  {
    id: 4,
    title: 'Sofa Set - 5 Seater',
    price: 'Rs 55,000',
    location: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
    date: '2 days ago',
    featured: false
  },
  {
    id: 5,
    title: 'Gaming PC Full Setup',
    price: 'Rs 120,000',
    location: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    date: '3 days ago',
    featured: false
  },
  {
    id: 6,
    title: 'Baby Stroller (Imported)',
    price: 'Rs 18,000',
    location: 'Multan, Punjab',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    date: '4 days ago',
    featured: false
  }
];

export default function HomePage() {
  const router = useRouter();
  const handleCategoryClick = (category) => {
    router.push(`/category/${category.slug}`);
  };

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Everything You Need
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Buy and sell with confidence in your local community
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.slug} 
                category={category} 
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Posted Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Recently Posted</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAds.map((ad) => (
              <AdCard 
                key={ad.id} 
                ad={ad} 
                onAdClick={handleAdClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to sell something?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Post your ad for free and reach millions of buyers
          </p>
          <button 
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            onClick={() => router.push('/post-ad')}
          >
            Post Free Ad
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}