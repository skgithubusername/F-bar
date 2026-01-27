'use client';

export default function GallerySection() {
  return (
    <div className="  overflow-hidden py-2 px-8">
      <div className=" mx-auto">
        <div className="flex items-start gap-12">
          {/* Gallery Title */}
          <div className="flex-shrink-0  ">
            <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
          </div>
          
          {/* Gallery Cards */}
          <div className="flex gap-16 flex-1">
            {/* Ambiance */}
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-4">Ambiance</h3>
              <div className="relative w-72  h-72">
                {/* Back photo - bottom left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-12 translate-x-2 translate-y-3 shadow-md overflow-hidden">
                  <img src="/img/img1.jpg" alt="Restaurant ambiance" className="w-full h-full object-cover" />
                </div>
                {/* Second photo - bottom right */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-8 translate-x-6 translate-y-4 shadow-md overflow-hidden">
                  <img src="/img/img2.jpg" alt="Restaurant interior" className="w-full h-full object-cover" />
                </div>
                {/* Third photo - top left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-6 translate-x-0 translate-y-0 shadow-md overflow-hidden">
                  <img src="/img/img3.jpg" alt="Restaurant lighting" className="w-full h-full object-cover" />
                </div>
                {/* Front photo with purple overlay - center */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-3 translate-x-4 translate-y-2 shadow-lg overflow-hidden">
                  <img src="/img/img4.jpg" alt="Main restaurant view" className="w-full h-full object-cover" />
                  {/* Purple overlay */}
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-75 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold leading-tight">31+</div>
                      <div className="text-sm font-normal">Picture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food */}
    <div>
              <h3 className="text-base font-medium text-gray-800 mb-4">Food</h3>
              <div className="relative w-72  h-72">
                {/* Back photo - bottom left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-12 translate-x-2 translate-y-3 shadow-md overflow-hidden">
                  <img src="/img/img1.jpg" alt="Restaurant ambiance" className="w-full h-full object-cover" />
                </div>
                {/* Second photo - bottom right */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-8 translate-x-6 translate-y-4 shadow-md overflow-hidden">
                  <img src="/img/img2.jpg" alt="Restaurant interior" className="w-full h-full object-cover" />
                </div>
                {/* Third photo - top left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-6 translate-x-0 translate-y-0 shadow-md overflow-hidden">
                  <img src="/img/img3.jpg" alt="Restaurant lighting" className="w-full h-full object-cover" />
                </div>
                {/* Front photo with purple overlay - center */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-3 translate-x-4 translate-y-2 shadow-lg overflow-hidden">
                  <img src="/img/img4.jpg" alt="Main restaurant view" className="w-full h-full object-cover" />
                  {/* Purple overlay */}
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-75 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold leading-tight">31+</div>
                      <div className="text-sm font-normal">Picture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Beverages */}
           <div>
              <h3 className="text-base font-medium text-gray-800 mb-4">Beverages</h3>
              <div className="relative w-72  h-72">
                {/* Back photo - bottom left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-12 translate-x-2 translate-y-3 shadow-md overflow-hidden">
                  <img src="/img/img1.jpg" alt="Restaurant ambiance" className="w-full h-full object-cover" />
                </div>
                {/* Second photo - bottom right */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-8 translate-x-6 translate-y-4 shadow-md overflow-hidden">
                  <img src="/img/img2.jpg" alt="Restaurant interior" className="w-full h-full object-cover" />
                </div>
                {/* Third photo - top left */}
                <div className="absolute w-48 h-48 rounded-lg transform -rotate-6 translate-x-0 translate-y-0 shadow-md overflow-hidden">
                  <img src="/img/img3.jpg" alt="Restaurant lighting" className="w-full h-full object-cover" />
                </div>
                {/* Front photo with purple overlay - center */}
                <div className="absolute w-48 h-48 rounded-lg transform rotate-3 translate-x-4 translate-y-2 shadow-lg overflow-hidden">
                  <img src="/img/img4.jpg" alt="Main restaurant view" className="w-full h-full object-cover" />
                  {/* Purple overlay */}
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-75 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold leading-tight">31+</div>
                      <div className="text-sm font-normal">Picture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}