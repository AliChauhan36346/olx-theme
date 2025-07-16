"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const featuredCars = [
  {
    id: 1,
    title: 'Honda Civic 2018',
    price: 'Rs 3,200,000',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Toyota Corolla 2017',
    price: 'Rs 2,500,000',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Suzuki Mehran 2016',
    price: 'Rs 950,000',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function MotorsFeaturedSection() {
  const router = useRouter();

  const handleCarClick = (car) => {
    // Navigate to product detail page with the car id
    router.push(`/product/${car.id}`);
  };

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002f34]">Featured Used Cars</h2>
        <button 
          onClick={() => router.push('/category/motors')}
          className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
        >
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuredCars.map(car => (
          <div 
            key={car.id} 
            className="bg-white rounded-xl shadow p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleCarClick(car)}
          >
            <div className="relative mb-2">
              <img src={car.image} alt={car.title} className="w-full h-40 object-cover rounded-lg" />
              <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">FEATURED</span>
            </div>
            <div className="font-bold text-lg text-[#002f34] mb-1">{car.price}</div>
            <div className="text-gray-700 text-sm">{car.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 