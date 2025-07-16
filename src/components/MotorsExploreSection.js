"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const exploreCards = [
  {
    title: 'New Cars',
    desc: 'Find your dream new car',
    icon: '🚗',
    route: '/category/new-cars'
  },
  {
    title: 'Car Comparison',
    desc: 'Confused? Easy way to compare cars!',
    icon: '⚖️',
    route: '/compare'
  },
  {
    title: 'Car Reviews',
    desc: 'Browse the latest car reviews',
    icon: '📝',
    route: '/reviews'
  },
  {
    title: 'Car Inspection',
    desc: 'Book your Inspection today',
    icon: '🔍',
    route: '/inspection'
  },
  {
    title: 'Auction Sheet',
    desc: 'Request the Auction Sheet now',
    icon: '📄',
    route: '/auction-sheet'
  },
];

export default function MotorsExploreSection() {
  const router = useRouter();

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002f34] mb-4">Explore OLX Motors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {exploreCards.map(card => (
          <div 
            key={card.title} 
            className="bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => handleCardClick(card.route)}
          >
            <div className="text-4xl mb-2">{card.icon}</div>
            <div className="font-bold text-[#002f34] mb-1 text-center">{card.title}</div>
            <div className="text-gray-700 text-sm text-center">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 