'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotorsNavbarTabs from '@/components/MotorsNavbarTabs';
import MotorsHero from '@/components/MotorsHero';
import MotorsBrowseSection from '@/components/MotorsBrowseSection';
import MotorsExploreSection from '@/components/MotorsExploreSection';
import MotorsFeaturedSection from '@/components/MotorsFeaturedSection';

export default function MotorsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <MotorsNavbarTabs />
        <MotorsHero />
        <MotorsBrowseSection />
        <MotorsExploreSection />
        <MotorsFeaturedSection />
      </main>
      <Footer />
    </div>
  );
} 