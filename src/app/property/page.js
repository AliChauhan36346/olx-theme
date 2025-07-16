"use client";

import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyNavbarTabs from '@/components/PropertyNavbarTabs';
import PropertyHero from '@/components/PropertyHero';
import PropertyBrowseSection from '@/components/PropertyBrowseSection';
import PropertyExploreSection from '@/components/PropertyExploreSection';
import PropertyFeaturedSection from '@/components/PropertyFeaturedSection';

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PropertyNavbarTabs />
      <main className="flex-1">
        <PropertyHero />
        <PropertyBrowseSection />
        <PropertyExploreSection />
        <PropertyFeaturedSection />
      </main>
      <Footer />
    </div>
  );
} 