'use client';

export default function AboutSection() {
  return (
    <div className=" p-6 md:p-8 shadow-sm border border-gray-200">
      {/* About Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">About The &lt; name of the Venue&gt;</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          The Grand Sapphire Hall is a premier event venue located in the heart of Delhi. Known for its luxurious interiors, elegant ambiance, and top-notch services, it is the perfect location for weddings, corporate events, receptions, and social gatherings...{' '}
          <span className="font-semibold text-gray-700">Read More.....</span>
        </p>
      </div>

      {/* Highlights Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Capacity : Up to 500 guest</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>In-house Catering & DJ</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Air Conditioned Banquet Halls</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Valet Parking Available</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Dedicated Bridal Room</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Venue Features Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Venue Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Stage Setup</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Lawn + Indoor Halls</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Live counters</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Led Screens</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start">
              <span className="mr-3">•</span>
              <span>Custom Decor</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}