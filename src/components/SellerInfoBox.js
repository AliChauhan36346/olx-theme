import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function SellerInfoBox({ seller }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
      <div className="mb-2 flex items-center">
        <span className="font-medium text-gray-800 mr-2">{seller.name}</span>
      </div>
      <div className="mb-2 flex items-center text-gray-800">
        <Phone className="w-4 h-4 mr-2" />
        <span>{seller.phone}</span>
      </div>
      <div className="mb-4 flex items-center text-gray-800">
        <Mail className="w-4 h-4 mr-2" />
        <span>{seller.email}</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
        <MessageCircle className="w-4 h-4" />
        Chat with Seller
      </button>
    </div>
  );
} 