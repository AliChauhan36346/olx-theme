"use client";

import React, { useState } from "react";
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardTabs from '@/components/DashboardTabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data
const myAds = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: '$899',
    location: 'New York, NY',
    image: '/api/placeholder/300/200',
    date: '2 hours ago',
    featured: true,
    status: 'active',
  },
  {
    id: 2,
    title: '2020 Honda Civic',
    price: '$18,500',
    location: 'Los Angeles, CA',
    image: '/api/placeholder/300/200',
    date: '5 hours ago',
    featured: false,
    status: 'sold',
  },
];
const savedAds = [
  {
    id: 3,
    title: 'MacBook Pro 13" M2',
    price: '$1,200',
    location: 'Chicago, IL',
    image: '/api/placeholder/300/200',
    date: '1 day ago',
    featured: true,
  }
];
const stats = {
  active: myAds.filter(ad => ad.status === 'active').length,
  sold: myAds.filter(ad => ad.status === 'sold').length,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleEditAd = (ad) => {
    alert(`Edit ad: ${ad.title}`);
  };
  const handleDeleteAd = (ad) => {
    alert(`Delete ad: ${ad.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        <DashboardSidebar active={activeTab} onSelect={setActiveTab} />
        <div className="flex-1">
          <DashboardTabs
            activeTab={activeTab}
            myAds={myAds}
            savedAds={savedAds}
            stats={stats}
            onEditAd={handleEditAd}
            onDeleteAd={handleDeleteAd}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
} 