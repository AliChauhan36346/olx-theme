import React, { useEffect, useState } from 'react';

const banners = [
  {
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kakuchopurei.com%2F2025%2F03%2Frealme-unleashes-gaming-phone-goodness-with-14-series-5g-line%2F&psig=AOvVaw3fsMWeLy9syawh4RXY30cb&ust=1752782083231000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC19Z2Uwo4DFQAAAAAdAAAAABAE',
    alt: 'realme 14 Series 5G',
    link: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    alt: 'Car Banner',
    link: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Laptop Banner',
    link: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Baby Stroller Banner',
    link: '#',
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <a href={banners[current].link} target="_blank" rel="noopener noreferrer">
        <img
          src={banners[current].image}
          alt={banners[current].alt}
          className="w-full h-48 md:h-52 object-cover rounded-2xl shadow"
        />
      </a>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to banner ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 