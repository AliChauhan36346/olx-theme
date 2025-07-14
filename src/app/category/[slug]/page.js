'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import AdCard from '@/components/AdCard';
import Pagination from '@/components/Pagination';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Mock data for ads (in real app, fetch by category slug)
const mockAds = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: '$899',
    location: 'New York, NY',
    image: '/api/placeholder/300/200',
    date: '2 hours ago',
    featured: true
  },
  {
    id: 2,
    title: '2020 Honda Civic',
    price: '$18,500',
    location: 'Los Angeles, CA',
    image: '/api/placeholder/300/200',
    date: '5 hours ago',
    featured: false
  },
  {
    id: 3,
    title: 'MacBook Pro 13" M2',
    price: '$1,200',
    location: 'Chicago, IL',
    image: '/api/placeholder/300/200',
    date: '1 day ago',
    featured: true
  },
  {
    id: 4,
    title: 'Vintage Leather Sofa',
    price: '$450',
    location: 'Miami, FL',
    image: '/api/placeholder/300/200',
    date: '2 days ago',
    featured: false
  },
  {
    id: 5,
    title: 'Gaming Setup Complete',
    price: '$2,100',
    location: 'Seattle, WA',
    image: '/api/placeholder/300/200',
    date: '3 days ago',
    featured: false
  },
  {
    id: 6,
    title: 'Baby Stroller - Like New',
    price: '$120',
    location: 'Boston, MA',
    image: '/api/placeholder/300/200',
    date: '4 days ago',
    featured: false
  }
];

export default function CategoryPage() {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 6;
  const totalPages = 2; // mock for now
  const router = useRouter();

  // In a real app, filter ads by slug/category and pagination
  const paginatedAds = mockAds.slice((currentPage - 1) * adsPerPage, currentPage * adsPerPage);

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-800 mb-4" aria-label="Breadcrumb">
          <ol className="list-reset flex">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="capitalize font-semibold text-gray-800">{slug}</li>
          </ol>
        </nav>
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{slug} Ads</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <FilterSidebar />
          </div>
          {/* Ads Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedAds.map((ad) => (
                <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 