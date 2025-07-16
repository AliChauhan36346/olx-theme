'use client';

import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import AdCard from '@/components/AdCard';
import Footer from '@/components/Footer';
import { Car, Home, Laptop, Gamepad2, Shirt, Baby } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BannerSlider from '@/components/BannerSlider';

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
  // Mobiles
  {
    id: 1,
    title: 'Samsung Galaxy S21 Ultra',
    price: 'Rs 180,000',
    location: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    date: '5 hours ago',
    featured: false,
    category: 'Mobiles',
  },
  {
    id: 2,
    title: 'iPhone 13 Pro Max',
    price: 'Rs 220,000',
    location: 'Islamabad, Capital Territory',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80',
    date: '1 day ago',
    featured: true,
    category: 'Mobiles',
  },
  {
    id: 3,
    title: 'Xiaomi Redmi Note 12',
    price: 'Rs 55,000',
    location: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    date: '3 days ago',
    featured: false,
    category: 'Mobiles',
  },
  // Cars
  {
    id: 4,
    title: 'Honda Civic 2018 for Sale',
    price: 'Rs 3,200,000',
    location: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    date: '2 hours ago',
    featured: true,
    category: 'Cars',
  },
  {
    id: 5,
    title: 'Toyota Corolla 2017',
    price: 'Rs 2,500,000',
    location: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    date: '2 days ago',
    featured: false,
    category: 'Cars',
  },
  {
    id: 6,
    title: 'Suzuki Mehran 2016',
    price: 'Rs 950,000',
    location: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    date: '4 days ago',
    featured: false,
    category: 'Cars',
  },
  // Electronics
  {
    id: 7,
    title: 'MacBook Pro 2020',
    price: 'Rs 250,000',
    location: 'Islamabad, Capital Territory',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    date: '1 day ago',
    featured: true,
    category: 'Electronics',
  },
  {
    id: 8,
    title: 'Gaming PC Full Setup',
    price: 'Rs 120,000',
    location: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    date: '3 days ago',
    featured: false,
    category: 'Electronics',
  },
  {
    id: 9,
    title: 'Sony WH-1000XM4 Headphones',
    price: 'Rs 45,000',
    location: 'Multan, Punjab',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    date: '2 days ago',
    featured: false,
    category: 'Electronics',
  },
];

// Placeholder categories data for dropdown
const allCategories = [
  {
    title: 'Mobiles',
    items: ['Mobile Phones', 'Accessories', 'Smart Watches', 'Tablets', 'Landline Phones'],
  },
  {
    title: 'Vehicles',
    items: ['Cars', 'Spare Parts', 'Cars Accessories', 'Car Care', 'Buses, Vans & Trucks', 'Rickshaw & Chingchi', 'Tractors & Trailers', 'Oil & Lubricants'],
  },
  {
    title: 'Bikes',
    items: ['Motorcycles', 'Bicycles', 'Spare Parts', 'Scooters', 'Bikes Accessories', 'ATV & Quads', 'Bike Care'],
  },
  {
    title: 'Business, Industrial & Agriculture',
    items: ['Other Business & Industry', 'Food & Restaurants', 'Trade & Industrial Machinery', 'Medical & Pharma', 'Medical for Sale'],
  },
  {
    title: 'Jobs',
    items: ['Other Jobs', 'Online', 'Part Time', 'Sales', 'Restaurants & Hospitality', 'Marketing', 'Customer Service', 'Domestic Staff', 'Education', 'Medical', 'Graphic Design', 'Delivery Riders', 'Accounting & Finance', 'IT & Networking', 'Clerical & Administration'],
  },
  {
    title: 'Furniture & Home Decor',
    items: ['Sofa & Chairs', 'Beds & Wardrobes', 'Other Household Items', 'Tables & Dining', 'Office Furniture', 'Home Decoration', 'Garden & Outdoor', 'Painting & Mirrors', 'Rugs & Carpets', 'Curtains & Blinds', 'Bathroom Accessories', 'Lighting', 'Home DIY & Renovations'],
  },
  {
    title: 'Fashion & Beauty',
    items: ['Clothes', 'Footwear', 'Watches', 'Jewellery', 'Bags', 'Makeup', 'Skin & Hair', 'Accessories'],
  },
  {
    title: 'Electronics & Home Appliances',
    items: ['Computers & Accessories', 'TV - Video - Audio', 'Cameras & Accessories', 'Games & Entertainment', 'Kitchen Appliances', 'AC & Coolers', 'Fridges & Freezers', 'Washing Machines & Dryers', 'Generators & UPS', 'Other Home Appliances'],
  },
  {
    title: 'Animals',
    items: ['Livestock', 'Hens & Aseel', 'Cats', 'Dogs', 'Birds', 'Fish & Aquariums', 'Pet Food & Accessories', 'Other Animals'],
  },
  {
    title: 'Books, Sports & Hobbies',
    items: ['Books & Magazines', 'Musical Instruments', 'Sports Equipment', 'Gym & Fitness', 'Other Hobbies'],
  },
  {
    title: 'Kids',
    items: ['Kids Furniture', 'Toys', 'Prams & Walkers', 'Swings & Slides', 'Kids Bikes', 'Kids Accessories'],
  },
];

function AllCategoriesDropdown({ open, onClose }) {
  const ref = useRef();
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div ref={ref} className="absolute left-0 right-0 z-30 mt-2 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-wrap gap-8 max-h-[420px] overflow-y-auto">
        {allCategories.map((cat, idx) => (
          <div key={cat.title} className="min-w-[180px]">
            <div className="font-bold text-[#002f34] mb-2">{cat.title}</div>
            <ul className="space-y-1">
              {cat.items.map((item) => (
                <li key={item} className="text-[#002f34] hover:underline cursor-pointer text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Category strip data
const categoryStrip = [
  { name: 'Mobile Phones', slug: 'mobiles' },
  { name: 'Cars', slug: 'cars' },
  { name: 'Motorcycles', slug: 'motorcycles' },
  { name: 'Houses', slug: 'houses' },
  { name: 'Video-Audios', slug: 'video-audios' },
  { name: 'Tablets', slug: 'tablets' },
  { name: 'Land & Plots', slug: 'land-plots' },
];

export default function HomePage() {
  const router = useRouter();
  const [allCatOpen, setAllCatOpen] = useState(false);
  const handleCategoryClick = (category) => {
    router.push(`/category/${category.slug}`);
  };

  const handleAdClick = (ad) => {
    router.push(`/product/${ad.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Categories Horizontal Bar */}
      <div className="w-full border-b bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 py-3 relative">
            {/* All Categories Dropdown Trigger */}
            <div
              className="flex items-center font-bold text-[#002f34] whitespace-nowrap cursor-pointer relative"
              onClick={() => setAllCatOpen((v) => !v)}
            >
              All Categories
              <svg className="ml-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#002f34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <AllCategoriesDropdown open={allCatOpen} onClose={() => setAllCatOpen(false)} />
            </div>
            {/* Category Names */}
            <div className="flex items-center gap-6">
              {categoryStrip.map((cat) => (
                <span
                  key={cat.slug}
                  className="text-[#002f34] font-normal cursor-pointer whitespace-nowrap hover:underline"
                  onClick={() => handleCategoryClick({ slug: cat.slug })}
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Banner Slider */}
      <BannerSlider />

      {/* Categories Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
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

      {/* Category-wise Ads Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobiles Row */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {recentAds.filter(ad => ad.category === 'Mobiles').map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>
          {/* Cars Row */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {recentAds.filter(ad => ad.category === 'Cars').map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
            ))}
          </div>
          {/* Electronics Row */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Electronics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAds.filter(ad => ad.category === 'Electronics').map((ad) => (
              <AdCard key={ad.id} ad={ad} onAdClick={handleAdClick} />
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