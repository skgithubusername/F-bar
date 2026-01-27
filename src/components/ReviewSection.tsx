'use client';

export default function ReviewSection() {
  const occasions = [
    { name: 'Corporate Party', image: '/img/img1.jpg' },
    { name: 'Birthday Party', image: '/img/img2.jpg' },
    { name: 'Rooftop Party', image: '/img/img3.jpg' },
    { name: 'Rooftop Party', image: '/img/img4.jpg' },
    { name: 'Bachelor Party', image: '/img/img5.jpg' },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-8">
      {/* Review CTA Section */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Share Your Review, Earn Carrots!
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Tell us about your experience and help others make better choices. As a thank you, we'll reward you with carrots for every review you share!
          </p>
          <p className="text-blue-600 text-sm font-medium mb-6">
            Be the first to write a review
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors">
            <span>✏️</span>
            Write Review
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👩</div>
              <div className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="text-2xl">📱</div>
            </div>
          </div>
        </div>
      </div>

      {/* Occasions Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Occasions for</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <img
                src={occasion.image}
                alt={occasion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end p-4">
                <h4 className="text-white font-semibold text-lg">{occasion.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}