import React, { useRef } from 'react';

export default function ImageUploader({ images, setImages }) {
  const fileInputRef = useRef();

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (idx) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <label className="block text-gray-800 font-medium mb-2">Images</label>
      <div className="flex flex-wrap gap-4 mb-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={typeof img === 'string' ? img : URL.createObjectURL(img)}
              alt="Preview"
              className="object-cover w-full h-full"
            />
            <button
              type="button"
              onClick={() => removeImage(idx)}
              className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 text-gray-800 hover:bg-opacity-100"
              aria-label="Remove image"
            >
              &times;
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-600 transition"
        >
          +
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleFiles}
      />
    </div>
  );
} 