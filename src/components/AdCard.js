'use client';

import React, { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';

const AdCard = ({ ad, onAdClick, onClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    // Handle save logic here
    console.log('Save ad:', ad.id);
  };

  const handleClick = () => {
    if (onAdClick) onAdClick(ad);
    else if (onClick) onClick(ad);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
    >
      {ad.featured && (
        <div className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 absolute z-10 m-3 rounded-full">
          Featured
        </div>
      )}
      <div className="relative">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          {ad.image ? (
            <img 
              src={ad.image} 
              alt={ad.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-800">Image placeholder</span>
          )}
        </div>
        <button 
          onClick={handleSave}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
            isSaved 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-800 hover:bg-gray-50'
          }`}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {ad.title}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-blue-600">{ad.price}</span>
          <span className="text-sm text-gray-800">{ad.date}</span>
        </div>
        <div className="flex items-center text-gray-800 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {ad.location}
        </div>
      </div>
    </div>
  );
};

export default AdCard;