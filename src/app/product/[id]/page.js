"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import SellerInfoBox from '@/components/SellerInfoBox';
import AdCard from '@/components/AdCard';

// Mock product data
const product = {
  id: 1,
  title: "Honda Civic 2018 for Sale",
  price: "Rs 3,200,000",
  description: "Well-maintained Honda Civic 2018, single owner, Lahore number, original documents.",
  images: [
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80"
  ],
  location: "Lahore, Punjab",
  date: "2 hours ago",
  featured: true
};

const seller = {
  name: "Ali Raza",
  phone: "+92 300 1234567",
  email: "ali.raza@example.com"
};

const relatedAds = [
  {
    id: 2,
    title: 'Suzuki Mehran 2016',
    price: 'Rs 950,000',
    location: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    date: '5 hours ago',
    featured: false
  },
  {
    id: 3,
    title: 'iPhone 13 Pro Max',
    price: 'Rs 220,000',
    location: 'Islamabad, Capital Territory',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
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
  }
];

export default function ProductDetailPage() {
  const router = useRouter();

  // Mock details for demonstration
  const details = [
    { label: 'Brand', value: 'Samsung Mobile' },
    { label: 'Model', value: 'S8 Plus' },
    { label: 'Condition', value: 'Used' },
  ];

  const handleShowPhone = () => {
    router.push('/auth/login');
  };

  const handleChat = () => {
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Images and Details */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* Image Carousel */}
            <div className="bg-black rounded-2xl flex items-center justify-center h-[420px] w-full max-w-2xl mx-auto">
              <Carousel images={product.images} />
            </div>
            {/* Price, Title, Location, Icons */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{product.price}</div>
                  <div className="text-lg font-semibold text-[#002f34] mt-1">Samsung Mobile S8 Plus</div>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <button className="text-2xl text-gray-500 hover:text-blue-600"><span role="img" aria-label="favorite">♡</span></button>
                  <button className="text-2xl text-gray-500 hover:text-blue-600"><span role="img" aria-label="share">🔗</span></button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#002f34] text-base mb-2">
                <span className="font-medium">Gulistan-e-Jauhar, Karachi</span>
                <span className="text-xs text-gray-500 ml-2">5 days ago</span>
              </div>
            </div>
            {/* Details Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-xl font-bold text-gray-900 mb-4">Details</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-1 font-medium text-gray-700">Brand</div>
                <div className="col-span-1 text-[#002f34] font-semibold">Samsung Mobile</div>
                <div className="col-span-1 font-medium text-gray-700">Model</div>
                <div className="col-span-1 text-[#002f34] font-semibold">S8 Plus</div>
                <div className="col-span-1 font-medium text-gray-700">Condition</div>
                <div className="col-span-1 text-[#002f34] font-semibold">Used</div>
              </div>
            </div>
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-xl font-bold text-gray-900 mb-2">Description</div>
              <div className="text-gray-800 whitespace-pre-line">Glass broken only\nAll good other</div>
            </div>
            {/* Related Ads */}
            <div className="mt-8">
              <div className="text-xl font-bold text-gray-900 mb-4">Related ads</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {relatedAds.map((ad) => (
                  <AdCard key={ad.id} ad={ad} />
                ))}
              </div>
            </div>
          </div>
          {/* Right: Seller Info & Ad Banner */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-24 self-start">
            {/* Seller Info Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">K</div>
                <div>
                  <div className="font-semibold text-[#002f34]">Khizar Farzan</div>
                  <div className="text-xs text-gray-500">Posted by</div>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-gray-700 mt-2">
                <div>
                  <div className="font-bold">2025</div>
                  <div>Member Since</div>
                </div>
                <div>
                  <div className="font-bold">1</div>
                  <div>Active Ads</div>
                </div>
              </div>
              <button 
                onClick={handleShowPhone}
                className="w-full bg-[#002f34] text-white py-3 rounded-lg font-semibold text-lg mt-2 hover:bg-[#005266] transition-colors"
              >
                Show phone number
              </button>
              <button 
                onClick={handleChat}
                className="w-full border border-gray-300 py-3 rounded-lg font-bold text-base text-[#002f34] mt-2 hover:bg-gray-50 transition-colors"
              >
                Chat
              </button>
            </div>
            {/* Ad Banner */}
            <div className="bg-white rounded-2xl shadow-md p-2 flex items-center justify-center min-h-[160px]">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Ad Banner" className="rounded-lg object-cover w-full h-36" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 