'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    image: '/img/img11.png',
    backgroundGradient: 'from-orange-600 to-amber-800',
    celebrity: {
      name: 'Rohit Sharma',
      initials: 'RS',
      activity: 'Attended a party here last mo'
    },
    venue: {
      name: 'F-Bar',
      rating: 4.1,
      reviews: 3,
      location: 'DLP Phase 3, Gurugram',
      distance: '1.2 Kms'
    },
    details: {
      type: 'IMFL Drinks +FOOD',
      duration: '3 hrs',
      people: '1.5 hrs'
    },
    inclusions: [
      { text: '3 Starters + 2 Main Course', type: 'green' },
      { text: '3 Starters + 2 Main Course', type: 'red' },
      { text: 'Alcoholic Beverages (1B)', type: 'gray', more: '3+ More' }
    ],
    offer: {
      savings: '₹590',
      cta: 'Book Now'
    }
  },
  {
    id: 2,
    image: '/img/toplogo.png',
    backgroundGradient: 'from-purple-600 to-indigo-800',
    celebrity: {
      name: 'Virat Kohli',
      initials: 'VK',
      activity: 'Celebrated birthday here recently'
    },
    venue: {
      name: 'F-Bar',
      rating: 4.3,
      reviews: 8,
      location: 'DLP Phase 3, Gurugram',
      distance: '1.2 Kms'
    },
    details: {
      type: 'Premium Drinks +FOOD',
      duration: '4 hrs',
      people: '2 hrs'
    },
    inclusions: [
      { text: '5 Starters + 3 Main Course', type: 'green' },
      { text: '2 Desserts + Beverages', type: 'red' },
      { text: 'Premium Liquor (2B)', type: 'gray', more: '5+ More' }
    ],
    offer: {
      savings: '₹890',
      cta: 'Book Now'
    }
  },
  {
    id: 3,
    image: '/img/toplogo.png',
    backgroundGradient: 'from-green-600 to-teal-800',
    celebrity: {
      name: 'MS Dhoni',
      initials: 'MS',
      activity: 'Had dinner with team last week'
    },
    venue: {
      name: 'F-Bar',
      rating: 4.5,
      reviews: 12,
      location: 'DLP Phase 3, Gurugram',
      distance: '1.2 Kms'
    },
    details: {
      type: 'VIP Experience +FOOD',
      duration: '5 hrs',
      people: '3 hrs'
    },
    inclusions: [
      { text: '7 Starters + 4 Main Course', type: 'green' },
      { text: '3 Desserts + Premium Service', type: 'red' },
      { text: 'Top Shelf Liquor (3B)', type: 'gray', more: '8+ More' }
    ],
    offer: {
      savings: '₹1290',
      cta: 'Book Now'
    }
  }
];

export default function PackageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length);
  };

  const currentPackage = packages[currentIndex];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 md:gap-0">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Package</h2>
        <div className="flex items-center gap-2 self-end md:self-auto">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {packages.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} className={currentIndex === 0 ? 'text-gray-400' : 'text-gray-600'} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={currentIndex === packages.length - 1}
            >
              <ChevronRight size={20} className={currentIndex === packages.length - 1 ? 'text-gray-400' : 'text-gray-600'} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Mobile: Stacked layout, Desktop: Side-by-side */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section - Full width on mobile */}
          <div className={`w-full md:w-64 md:h-64 relative flex items-center justify-center`}>
            <img 
              src={currentPackage.image}
              alt="Package Image" 
              className="w-full h-full object-cover p-4"
            />
            {/* Heart and Share Icons - Positioned properly on mobile */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                <span className="text-white">♡</span>
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                <span className="text-white">↗</span>
              </div>
            </div>
          </div>

          {/* Right Content Section - Full width on mobile */}
          <div className="flex-1 w-full p-4 md:p-6">
            {/* Mobile: Stacked layout, Desktop: Side-by-side */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4 md:gap-0">
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{currentPackage.celebrity.initials}</span>
                  </div>
                  <span className="text-sm text-gray-600 break-words">{currentPackage.celebrity.name} {currentPackage.celebrity.activity}</span>
                  <div className="ml-auto md:ml-0 mt-1 md:mt-0">
                    <span className="text-purple-600 text-sm">🎁</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">F</span>
                  </div>
                  <span className="font-semibold text-gray-900">{currentPackage.venue.name}</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold">{currentPackage.venue.rating}</span>
                    <span className="text-sm text-gray-500">Review ({currentPackage.venue.reviews.toString().padStart(2, '0')})</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 md:mb-4">
                  <span>📍</span>
                  <span className="break-words">{currentPackage.venue.location}</span>
                  <span className="text-blue-500">💎 {currentPackage.venue.distance}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4 md:mb-6">
                  <span>🚗 {currentPackage.details.type}</span>
                  <span>⏰ {currentPackage.details.duration}</span>
                  <span>👥 {currentPackage.details.people}</span>
                </div>
              </div>

              <div className="text-left md:text-right w-full md:w-auto">
                <div className="text-sm text-gray-600 mb-2">Inclusion</div>
                <div className="space-y-1 mb-4">
                  {currentPackage.inclusions.map((inclusion, index) => (
                    <div key={index}>
                      {inclusion.type === 'green' && (
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded break-words max-w-[200px]">
                          ✓ {inclusion.text}
                        </div>
                      )}
                      {inclusion.type === 'red' && (
                        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded break-words max-w-[200px]">
                          ✓ {inclusion.text}
                        </div>
                      )}
                      {inclusion.type === 'gray' && (
                        <div className="text-xs text-gray-500 break-words max-w-[200px]">
                          🍷 {inclusion.text} {inclusion.more && <span className="text-purple-600">{inclusion.more}</span>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                <div className="text-center md:text-left text-sm leading-tight">
                  <span>Choose This Now! </span>
                  <span className="text-yellow-300">{currentPackage.offer.savings}</span>
                  <span> Would Be Saved Instantly !</span>
                </div>
                <button className="text-white px-6 pt-2 font-semibold bg-white bg-opacity-20 rounded-lg md:bg-transparent md:bg-opacity-100 py-1 md:py-0">
                  {currentPackage.offer.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}