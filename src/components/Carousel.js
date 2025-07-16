import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full h-[420px] bg-black rounded-2xl overflow-hidden flex items-center justify-center">
      <img
        src={images[current]}
        alt={`Product image ${current + 1}`}
        className="object-contain w-full h-full"
      />
      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#002f34] rounded-full p-3 shadow-lg hover:bg-gray-200 transition z-10 text-2xl font-bold border border-gray-300"
        aria-label="Previous image"
        style={{ opacity: 1 }}
      >
        &#8592;
      </button>
      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#002f34] rounded-full p-3 shadow-lg hover:bg-gray-200 transition z-10 text-2xl font-bold border border-gray-300"
        aria-label="Next image"
        style={{ opacity: 1 }}
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