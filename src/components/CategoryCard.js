'use client';

import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  const IconComponent = category.icon;
  
  return (
    <div 
      onClick={() => onClick && onClick(category)}
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
          <IconComponent className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
        <p className="text-sm text-gray-800">{category.count} ads</p>
      </div>
    </div>
  );
};

export default CategoryCard;