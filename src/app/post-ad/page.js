"use client";

import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';

const categories = [
  { value: '', label: 'Select category' },
  { value: 'vehicles', label: 'Vehicles' },
  { value: 'property', label: 'Property' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'games', label: 'Games' },
  { value: 'kids', label: 'Kids' },
];

export default function PostAdPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    location: '',
    price: '',
  });
  const [images, setImages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
    // Here you would send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Post Free Ad</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
              placeholder="Enter ad title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
              placeholder="Describe your item"
              rows={4}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">Condition</label>
              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
                placeholder="Enter location"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-800 font-medium mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-800"
                placeholder="Enter price"
                required
              />
            </div>
          </div>
          <ImageUploader images={images} setImages={setImages} />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Preview Ad
          </button>
        </form>
        {/* Preview Section */}
        {showPreview && (
          <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ad Preview</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-wrap gap-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{form.title}</h3>
                <p className="text-gray-800 mb-2">{form.description}</p>
                <div className="mb-2"><span className="font-semibold">Category:</span> {form.category}</div>
                <div className="mb-2"><span className="font-semibold">Condition:</span> {form.condition}</div>
                <div className="mb-2"><span className="font-semibold">Location:</span> {form.location}</div>
                <div className="mb-2"><span className="font-semibold">Price:</span> {form.price}</div>
              </div>
            </div>
            <button
              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              onClick={() => setShowPreview(false)}
            >
              Edit
            </button>
            <button
              className="mt-6 ml-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              // onClick={handleFinalSubmit}
            >
              Submit Ad
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 