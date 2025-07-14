import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full h-80 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
      <img
        src={images[current]}
        alt={`Product image ${current + 1}`}
        className="object-contain w-full h-full"
      />
      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Previous image"
      >
        &#8592;
      </button>
      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        aria-label="Next image"
      >
        &#8594;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
} 