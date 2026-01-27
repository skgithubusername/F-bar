'use client';

export default function PostsSection() {
  const posts = [
    { id: 1, image: '/img/poster.png', title: 'Blade' },
    { id: 2, image: '/img/img2.jpg', title: 'Skyfall' },
    { id: 3, image: '/img/img3.jpg', title: 'Birds of Prey' },
    { id: 4, image: '/img/img4.jpg', title: 'This Gun for Hire' },
    { id: 5, image: '/img/img5.jpg', title: 'Panther' },
    { id: 6, image: '/img/img6.png', title: 'Aladdin' },
  ];

  return (
    <div className=" p-6 md:p-8 ">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Posts</h2>
      
      {/* Movie Grid */}
      {/* <div className="grid   grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}
      {/* Movie Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {posts.map((post) => (
    <div 
      key={post.id} 
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-xl font-bold mb-2">{post.title}</h3>
          {post.description && (
            <p className="text-gray-300 text-sm line-clamp-2">{post.description}</p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

      {/* View More Button */}
      <div className="flex justify-center mb-8">
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded-full flex items-center gap-2 transition-colors"
          onClick={() => window.location.href = '/posts'}
        >
          View More
          <span>→</span>
        </button>
      </div>

      {/* FAQ Section */}
      <div className="border-t border-gray-200 pt-6">
        <details className="mb-4">
          <summary className="font-semibold text-gray-900 cursor-pointer hover:text-purple-600 transition-colors">
            Frequently asked questions
          </summary>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Find answers to common questions about our service.
          </p>
        </details>

        {/* Terms Section */}
        <details>
          <summary className="font-semibold text-gray-900 cursor-pointer hover:text-purple-600 transition-colors">
            Terms of Service
          </summary>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Please review our terms and conditions.
          </p>
        </details>
      </div>

      {/* Featured In Section */}
      <div className="mt-12 pt-8 border-t border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured In</h3>
        
        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative rounded-xl overflow-hidden h-80 group cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/img/img7.png" 
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg">Best Dinner Spots</h4>
                <p className="text-white/90 text-sm">37 Places →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Venues */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recommended Venues</h3>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">See All</a>
          </div>

          {/* Venue Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Image */}
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="/img/img8.png" 
                  alt="Venue"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Center Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img src="/img/user.png" alt="User" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Rohit Sharma</p>
                      <p className="text-xs text-gray-600">Attended a party here last mo</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">F-Bar</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="font-semibold text-gray-900">4.1</span>
                      <a href="#" className="text-purple-600 text-sm hover:underline">Review (03)</a>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-3 space-y-2">
                    <p className="flex items-center gap-2">
                      <span>📍</span> DLP Phase 3, Gurugram
                      <span className="text-purple-600 ml-auto">↔ 1.2 Kms</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🎵</span> Sitar Night - Music x Vibes
                      <span className="text-gray-500 ml-auto">⏰ 20 Dec 25 +3 More</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    View Details
                  </button>
                  <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Get Flat 25% Off On FnB
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <img 
                  src="/img/img9.jpg" 
                  alt="Venue"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Promo Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md hover:shadow-lg">
            <span>💳</span> 
            <div className="text-left">
              <div className="text-sm font-bold">Pay Now</div>
              <div className="text-xs">Flat 25% off</div>
            </div>
          </button>
          <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md hover:shadow-lg">
            <span>📅</span> 
            <div className="text-left">
              <div className="text-sm font-bold">Pre-Booking</div>
              <div className="text-xs">Get Discount upto 55%</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}