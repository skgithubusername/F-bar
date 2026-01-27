'use client';

export default function EventSection() {
  return (
    <div className=" overflow-hidden px-2 sm:px-6 lg:px-2">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Events</h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Mobile: Stacked layout, Desktop: Side-by-side */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section - Full width on mobile */}
          <div className="w-full md:w-64 md:h-64 relative flex items-center justify-center">
            <img 
              src="/img/img1.jpg" 
              alt="Event" 
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
                {/* Event Info - Adjusted for mobile */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 md:mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">DS</span>
                  </div>
                  <span className="text-sm text-gray-600 break-words">Desi Techno Event at F-Bar</span>
                  <div className="ml-auto md:ml-0 mt-1 md:mt-0">
                    <span className="text-purple-600 text-sm">🎉</span>
                  </div>
                </div>
                
                {/* Venue Info - Responsive layout */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 md:mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">F</span>
                  </div>
                  <span className="font-semibold text-gray-900">F-Bar</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold">4.1</span>
                    <span className="text-sm text-gray-500">Review (03)</span>
                  </div>
                </div>

                {/* Location - Responsive layout */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 md:mb-4">
                  <span>📍</span>
                  <span className="break-words">DLP Phase 3, Gurugram</span>
                  <span className="text-blue-500">💎 1.2 Kms</span>
                </div>

                {/* Event Details - Wrapped on mobile */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 md:mb-4">
                  <span>🎭 Stand-up Comedy</span>
                  <span>📅 29 Dec 25</span>
                  <span>⏰ 10:00 PM</span>
                </div>

                {/* Pass Information - Mobile-friendly */}
                <div className="text-sm text-gray-700 mb-4">
                  <div className="font-bold break-words">General Pass (Imported Liquor & Food) || Single</div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-green-600 font-bold">MRP-₹10000</span>
                    <span className="text-purple-600 font-bold">Booking: ₹3000/pp</span>
                  </div>
                </div>
              </div>

              {/* Inclusion Section - Full width on mobile, right aligned on desktop */}
              <div className="text-left md:text-right w-full md:w-auto">
                <div className="text-sm text-gray-600 mb-2">Inclusion</div>
                <div className="space-y-1 mb-4">
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded break-words max-w-[200px]">
                    ✓ 3 Starters
                  </div>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded break-words max-w-[200px]">
                    ✓ 2 Main Course
                  </div>
                  <div className="text-xs text-gray-500 break-words max-w-[200px]">
                    🍷 Alcoholic Beverages (1B) <span className="text-purple-600">3+ More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA - Responsive layout */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                <div className="text-center md:text-left text-sm leading-tight">
                  <span>Get Your Tickets Now! </span>
                  <span className="text-yellow-300">Save ₹1000</span>
                  <span> with Early Booking!</span>
                </div>
                <button className="text-white px-6 pt-2 font-semibold bg-white bg-opacity-20 rounded-lg md:bg-transparent md:bg-opacity-100 py-1 md:py-0">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}