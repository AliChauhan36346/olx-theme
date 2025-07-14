"use client";

import React from "react";
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
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Carousel */}
          <div className="lg:w-1/2 w-full">
            <Carousel images={product.images} />
          </div>
          {/* Product Info & Seller */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                <span className="text-sm text-gray-800">{product.location}</span>
                <span className="text-sm text-gray-800">{product.date}</span>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">{product.description}</p>
            </div>
            <SellerInfoBox seller={seller} />
          </div>
        </div>
        {/* Related Ads Carousel */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Ads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 