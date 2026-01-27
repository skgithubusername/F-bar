'use client';

import MenuItem from './MenuItem';
import PackageSlider from './PackageSlider';

const menuItems = [
  {
    image: '🥗',
    name: 'Warm Quinoa Salad',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '₹349',
    isVeg: true,
  },
  {
    image: '🍔',
    name: 'Miso Healthy Sauté',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '₹594',
    isVeg: false,
  },
  {
    image: '🍟',
    name: 'Braised Kidney Beans & Sweet Potato',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '₹569',
    isVeg: true,
  },
  {
    image: '🥗',
    name: 'Healthy Caesar Salad for Smart Menu',
    description: 'Refreshing blend of white rum, mint leaves, lime, sugar, and soda water.',
    tags: ['Bestseller', 'Fresh Ingredients', 'Light & Refreshing'],
    price: '₹499',
    isVeg: true,
  },
];

export default function OverviewSection() {
  return (
    <div className="space-y-12">
      {/* Menu Section with full UI/UX */}
      <div>
        <div className="flex gap-3 mb-8">
          <button className="px-4 md:px-6 py-2.5 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition shadow-md text-sm">
            Veg
          </button>
          <button className="px-4 md:px-6 py-2.5 bg-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-400 transition text-sm">
            Non-Veg
          </button>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Staters</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>

        {/* Menu Categories */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <span className="font-semibold text-gray-900">Main Course</span>
            <span className="text-gray-400">›</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <span className="font-semibold text-gray-900">Rice</span>
            <span className="text-gray-400">›</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <span className="font-semibold text-gray-900">Breads</span>
            <span className="text-gray-400">›</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <span className="font-semibold text-gray-900">Sides</span>
            <span className="text-gray-400">›</span>
          </div>
        </div>
      </div>

      {/* Package Section */}
      <div>
        <PackageSlider />
      </div>

      {/* Event Section with full UI/UX */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Events</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* Left Image Section */}
            <div className="w-64 h-64 relative">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">FLOAT</div>
                  <div className="text-sm opacity-90">NIGHTLIFE</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-6xl font-bold">DESI</div>
                    <div className="text-2xl font-bold">TECHNO</div>
                    <div className="text-xs opacity-75">Tuesdays</div>
                  </div>
                </div>
                
                {/* Icons */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-white">♡</span>
                  </div>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-white">↗</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white text-xs">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Compare</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-green-600 font-semibold">MRP-₹10000</div>
                    <div>
                      <div className="text-sm text-gray-600">Booking Amount</div>
                      <div className="text-2xl font-bold text-purple-600">₹3000</div>
                    </div>
                    <div className="text-sm text-gray-600">General Pass</div>
                    <div className="ml-auto text-right text-sm text-gray-600">
                      <div>29 Dec 25</div>
                      <div>10:00 PM Onwards</div>
                    </div>
                  </div>

                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block mb-3">
                    New Years 2026 Pass
                  </div>

                  <div className="mb-3">
                    <div className="font-semibold text-gray-900 mb-1">
                      Sitar Magic by Rishabh Rikhiram Sharma - Gurugram Party
                    </div>
                    <div className="text-sm text-gray-600">🎭 Stand-up Comedy</div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <span className="text-sm font-semibold">Malvika Khanna</span>
                    <span className="text-sm text-gray-600">Artist</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">F</span>
                    </div>
                    <span className="font-semibold text-gray-900">F-Bar</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-semibold">4.1</span>
                      <span className="text-sm text-gray-500">Review (03)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span>📍</span>
                    <span>DLP Phase 3, Gurugram</span>
                    <span className="text-blue-500">💎 1.2 Kms</span>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    General Pass (Imported Liquor & Food) || Single<br/>
                    <span className="text-purple-600">+3 More Variants →</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Inclusion</div>
                  <div className="space-y-1 mb-4">
                    <div className="text-xs text-gray-600">• 3 Starters</div>
                    <div className="text-xs text-gray-600">• 2 Main Course</div>
                    <div className="text-xs text-purple-600">3+ More</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    Flat 25% Off On Food - Pay Bill Through Partywifty Pay
                  </div>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Buy Ticket →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section with full UI/UX */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ambiance */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 h-64 flex flex-col justify-end text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Ambiance</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">31+</span>
                  <span className="text-sm opacity-90">Pictures</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
            </div>
          </div>

          {/* Food */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 h-64 flex flex-col justify-end text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Food</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">21+</span>
                  <span className="text-sm opacity-90">Pictures</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
            </div>
          </div>

          {/* Beverages */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 h-64 flex flex-col justify-end text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Beverages</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">56+</span>
                  <span className="text-sm opacity-90">Pictures</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍹</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaser Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Teaser</h2>
        <p className="text-gray-600 leading-relaxed">Coming soon content.</p>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed">Learn more about F-bar.</p>
      </div>

      {/* Review Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
        <p className="text-gray-600 leading-relaxed">Customer reviews and ratings.</p>
      </div>

      {/* Posts Section */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Posts</h2>
        <p className="text-gray-600 leading-relaxed">Latest posts and updates.</p>
      </div>
    </div>
  );
}