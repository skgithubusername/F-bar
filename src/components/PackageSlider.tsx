// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// interface Inclusion {
//   inclusion_key: string;
//   inclusion_value: string;
// }

// interface Package {
//   id: string;
//   title: string;
//   packageThumbnail: string;
//   service_time: string;
//   inclusions: Inclusion[];
//   discount_amount: string;
//   clubRating?: number;
//   reviewCount?: number;
//   distance?: string;
//   people_capacity?: string;
// }

// interface PackageDetailsResponse {
//   status: boolean;
//   data: Package;
// }

// interface ClubDetailsResponse {
//   status: boolean;
//   data: {
//     id: string;
//     clubName: string;
//     party_packages: Package[];
//   };
// }

// interface TransformedPackage {
//   id: string;
//   image: string;
//   celebrity: {
//     name: string;
//     initials: string;
//     activity: string;
//   };
//   venue: {
//     name: string;
//     rating: number;
//     reviews: number;
//     location: string;
//     distance: string;
//   };
//   details: {
//     type: string;
//     duration: string;
//     people: string;
//   };
//   inclusions: Array<{
//     text: string;
//     type: 'green' | 'red' | 'gray';
//     more?: string;
//   }>;
//   offer: {
//     savings: string;
//     cta: string;
//   };
// }

// interface PackagePageProps {
//   packageId?: string;
//   clubId?: string;
// }

// const PackagePage = ({ 
//   packageId = "123",
//   clubId = "456"
// }: PackagePageProps) => {
//   const [packageData, setPackageData] = useState<TransformedPackage | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [relatedPackages, setRelatedPackages] = useState<TransformedPackage[]>([]);

//   // Transform inclusions from API format to component format
//   const transformInclusions = useCallback((inclusions: Inclusion[]) => {
//     if (!inclusions || !Array.isArray(inclusions) || inclusions.length === 0) {
//       return [
//         { text: 'Starters + Main Course', type: 'green' as const },
//         { text: 'Beverages Included', type: 'red' as const },
//         { text: 'Special Offers', type: 'gray' as const, more: '2+ More' }
//       ];
//     }

//     return inclusions.slice(0, 3).map((item, index) => {
//       const text = item.inclusion_key ? `${item.inclusion_key}: ${item.inclusion_value}` : String(item);
//       return {
//         text: text,
//         type: (index === 0 ? 'green' : index === 1 ? 'red' : 'gray') as 'green' | 'red' | 'gray',
//         more: index === 2 && inclusions.length > 3 ? `${inclusions.length - 3}+ More` : undefined
//       };
//     });
//   }, []);

//   // Fetch package details from API
//   useEffect(() => {
//     const fetchPackageData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         console.log('Fetching package details with ID:', packageId);

//         // Fetch package details
//         const packageForm = new FormData();
//         packageForm.append("package_id", packageId);
        
//         const packageResponse = await axios.post<PackageDetailsResponse>(
//           "https://partywitty.com/master/Api/getDataPost/packageDetails",
//           packageForm,
//           {
//             timeout: 15000,
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           }
//         );

//         console.log('Package API Response:', packageResponse.data);

//         if (packageResponse.data?.status && packageResponse.data?.data) {
//           const pkg = packageResponse.data.data;
//           console.log('Package Data:', pkg);

//           // Transform package data
//           const transformedPackage: TransformedPackage = {
//             id: pkg.id || packageId,
//             image: pkg.packageThumbnail 
//               ? `https://partywitty.com/master/assets/uploads/${pkg.packageThumbnail}`
//               : '/img/default-package.jpg',
//             celebrity: {
//               name: 'Popular Choice',
//               initials: 'PC',
//               activity: 'Most booked package this month'
//             },
//             venue: {
//               name: pkg.title || 'Package Venue',
//               rating: pkg.clubRating || 4.2,
//               reviews: pkg.reviewCount || 5,
//               location: 'Noida, Sector 63',
//               distance: pkg.distance ? `${pkg.distance} Kms` : '1.2 Kms'
//             },
//             details: {
//               type: pkg.title || 'Party Package',
//               duration: pkg.service_time || '3 hrs',
//               people: pkg.people_capacity ? `${pkg.people_capacity} people` : '10-15 people'
//             },
//             inclusions: transformInclusions(pkg.inclusions || []),
//             offer: {
//               savings: pkg.discount_amount ? `₹${pkg.discount_amount}` : '₹500',
//               cta: 'Book Now'
//             }
//           };

//           setPackageData(transformedPackage);
          
//           // Fetch related packages from same club
//           if (clubId) {
//             const clubForm = new FormData();
//             clubForm.append("club_id", clubId);
            
//             const clubResponse = await axios.post<ClubDetailsResponse>(
//               "https://partywitty.com/master/Api/getDataPost/clubWiseAllPackages",
//               clubForm,
//               {
//                 timeout: 15000,
//                 headers: {
//                   'Content-Type': 'multipart/form-data'
//                 }
//               }
//             );

//             console.log('Club Packages API Response:', clubResponse.data);

//             if (clubResponse.data?.status && clubResponse.data?.data?.party_packages) {
//               const related = clubResponse.data.data.party_packages
//                 .filter((p: Package) => p.id !== packageId)
//                 .slice(0, 3)
//                 .map((pkg: Package, index: number) => ({
//                   id: pkg.id || `related-${index}`,
//                   image: pkg.packageThumbnail 
//                     ? `https://partywitty.com/master/assets/uploads/${pkg.packageThumbnail}`
//                     : '/img/default-package.jpg',
//                   celebrity: {
//                     name: 'Also Popular',
//                     initials: 'AP',
//                     activity: 'Recommended for you'
//                   },
//                   venue: {
//                     name: clubResponse.data.data.clubName || 'Venue',
//                     rating: pkg.clubRating || 4.0,
//                     reviews: pkg.reviewCount || 3,
//                     location: 'Noida, Sector 63',
//                     distance: pkg.distance ? `${pkg.distance} Kms` : '1.5 Kms'
//                   },
//                   details: {
//                     type: pkg.title || 'Party Package',
//                     duration: pkg.service_time || '3 hrs',
//                     people: pkg.people_capacity ? `${pkg.people_capacity} people` : '8-12 people'
//                   },
//                   inclusions: transformInclusions(pkg.inclusions || []),
//                   offer: {
//                     savings: pkg.discount_amount ? `₹${pkg.discount_amount}` : '₹300',
//                     cta: 'View Details'
//                   }
//                 }));

//               setRelatedPackages(related);
//             }
//           }
//         } else {
//           setError('Package not found');
//         }
//       } catch (err) {
//         console.error('Error fetching package data:', err);
//         setError('Failed to load package details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackageData();
//   }, [packageId, clubId, transformInclusions]);

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//         <span className="ml-3 text-gray-600">Loading package details...</span>
//       </div>
//     );
//   }

//   // Show error state
//   if (error || !packageData) {
//     return (
//       <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto mt-10">
//         <div className="text-gray-500 mb-4">
//           <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 mb-2">Package Not Found</h3>
//         <p className="text-gray-500">{error || 'The requested package could not be loaded.'}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//           {packageData.details.type}
//         </h1>
//         <div className="flex items-center gap-4 text-gray-600">
//           <span className="flex items-center">
//             <span className="text-yellow-400 mr-1">★</span>
//             {packageData.venue.rating} ({packageData.venue.reviews} reviews)
//           </span>
//           <span>•</span>
//           <span>{packageData.venue.location}</span>
//           <span>•</span>
//           <span>{packageData.venue.distance}</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main Package Section */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             {/* Package Image */}
//             <div className="relative h-80 md:h-96">
//               <img 
//                 src={packageData.image}
//                 alt={packageData.details.type}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.src = 'https://via.placeholder.com/800x400?text=Package+Image';
//                 }}
//               />
//               <div className="absolute top-4 left-4">
//                 <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {packageData.celebrity.name}
//                 </div>
//               </div>
//               <div className="absolute bottom-4 left-4">
//                 <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
//                   {packageData.celebrity.activity}
//                 </div>
//               </div>
//             </div>

//             {/* Package Details */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <div className="text-2xl font-bold text-purple-600">{packageData.details.duration}</div>
//                   <div className="text-gray-600">Duration</div>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <div className="text-2xl font-bold text-purple-600">{packageData.details.people}</div>
//                   <div className="text-gray-600">Capacity</div>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <div className="text-2xl font-bold text-green-600">{packageData.offer.savings}</div>
//                   <div className="text-gray-600">Savings</div>
//                 </div>
//               </div>

//               {/* Inclusions */}
//               <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-4">What's Included</h3>
//                 <div className="space-y-3">
//                   {packageData.inclusions.map((inclusion, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                       <span className={`flex-1 ${
//                         inclusion.type === 'green' ? 'text-green-700' :
//                         inclusion.type === 'red' ? 'text-red-700' : 'text-gray-700'
//                       }`}>
//                         {inclusion.text}
//                       </span>
//                       {inclusion.more && (
//                         <span className="text-gray-500 text-sm">{inclusion.more}</span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Book Button */}
//               <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors">
//                 {packageData.offer.cta} - {packageData.offer.savings}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           {/* Venue Info */}
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">About the Venue</h3>
//             <div className="space-y-3">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                   <span className="text-lg font-bold text-gray-600">
//                     {packageData.venue.name.charAt(0)}
//                   </span>
//                 </div>
//                 <div>
//                   <div className="font-semibold">{packageData.venue.name}</div>
//                   <div className="text-gray-600 text-sm">{packageData.venue.location}</div>
//                 </div>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <span className="text-yellow-400 mr-1">★</span>
//                 <span>{packageData.venue.rating} ({packageData.venue.reviews} reviews)</span>
//               </div>
//               <div className="text-gray-600">
//                 <span className="mr-2">📍</span>
//                 {packageData.venue.distance} away
//               </div>
//             </div>
//           </div>

//           {/* Related Packages */}
//           {relatedPackages.length > 0 && (
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">You Might Also Like</h3>
//               <div className="space-y-4">
//                 {relatedPackages.map((pkg) => (
//                   <div key={pkg.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
//                     <img 
//                       src={pkg.image}
//                       alt={pkg.details.type}
//                       className="w-16 h-16 object-cover rounded-lg"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.src = 'https://via.placeholder.com/64x64?text=Package';
//                       }}
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h4 className="font-medium text-gray-900 truncate">{pkg.details.type}</h4>
//                       <p className="text-sm text-gray-600">{pkg.venue.name}</p>
//                       <div className="flex items-center justify-between mt-1">
//                         <span className="text-green-600 font-medium">{pkg.offer.savings}</span>
//                         <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
//                           {pkg.offer.cta}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

'use client';

import { useState, useEffect } from 'react';

// Mock package data with premium styling
const mockPackages = [
  {
    id: "1",
    title: "Premium Birthday Celebration",
    packageThumbnail: "https://images.unsplash.com/photo-1519003722824-194d4455a93d?w=400&h=300&fit=crop",
    service_time: "4 hrs",
    inclusions: [
      { inclusion_key: "Gourmet Buffet", inclusion_value: "Multi-cuisine delicacies" },
      { inclusion_key: "Premium Bar", inclusion_value: "Craft cocktails & wines" },
      { inclusion_key: "Luxury Decor", inclusion_value: "Custom theme setup" },
      { inclusion_key: "Entertainment", inclusion_value: "Live DJ performance" }
    ],
    discount_amount: "2500",
    price: "15000",
    discount_price: "12500",
    clubName: "The Grand Palace",
    areaName: "Connaught Place",
    cityName: "New Delhi",
    rating: 4.8,
    bookings: 127
  },
  {
    id: "2", 
    title: "Corporate Excellence Package",
    packageThumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
    service_time: "6 hrs",
    inclusions: [
      { inclusion_key: "Executive Lounge", inclusion_value: "Premium meeting space" },
      { inclusion_key: "Gourmet Catering", inclusion_value: "Business lunch & dinner" },
      { inclusion_key: "Tech Setup", inclusion_value: "Audio-visual equipment" },
      { inclusion_key: "Networking", inclusion_value: "Professional networking" }
    ],
    discount_amount: "3500",
    price: "20000",
    discount_price: "16500",
    clubName: "Business Hub Elite",
    areaName: "Gurgaon",
    cityName: "Delhi NCR",
    rating: 4.6,
    bookings: 89
  },
  {
    id: "3",
    title: "Royal Wedding Reception",
    packageThumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    service_time: "8 hrs",
    inclusions: [
      { inclusion_key: "Banquet Hall", inclusion_value: "Luxury royal setup" },
      { inclusion_key: "Fine Dining", inclusion_value: "7-course gourmet meal" },
      { inclusion_key: "Live Orchestra", inclusion_value: "Classical music ensemble" },
      { inclusion_key: "Premium Service", inclusion_value: "Dedicated event manager" }
    ],
    discount_amount: "8000",
    price: "45000",
    discount_price: "37000",
    clubName: "Royal Gardens Palace",
    areaName: "South Delhi",
    cityName: "Delhi",
    rating: 4.9,
    bookings: 64
  }
];

export default function PackageSlider() {
  const [packages] = useState(mockPackages);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  // Auto-rotate packages every 6 seconds
  useEffect(() => {
    if (packages.length > 1) {
      const interval = setInterval(() => {
        setCurrentPackageIndex((prevIndex) => 
          (prevIndex + 1) % packages.length
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [packages.length]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 text-center animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    );
  }

  if (error || packages.length === 0) {
    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 text-center border border-red-100">
        <div className="text-3xl mb-4">⚠️</div>
        <p className="text-gray-700 font-medium">{error || 'No packages available'}</p>
      </div>
    );
  }

  const currentPackage = packages[currentPackageIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Featured Packages
        </h2>
        <p className="text-gray-600 text-lg">Discover our most popular event experiences</p>
      </div>

      {/* Main Package Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Mobile: Stacked layout, Desktop: Side-by-side */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section - Full width on mobile */}
          <div className="w-full md:w-64 md:h-64 relative flex items-center justify-center">
            <img 
              src={currentPackage.packageThumbnail}
              alt={currentPackage.title}
              className="w-full h-full object-cover p-4 transition-transform duration-700 hover:scale-110"
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
                {/* Package Info - Adjusted for mobile */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 md:mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">PKG</span>
                  </div>
                  <span className="text-sm text-gray-600 break-words">{currentPackage.title}</span>
                  <div className="ml-auto md:ml-0 mt-1 md:mt-0">
                    <span className="text-purple-600 text-sm">🎁</span>
                  </div>
                </div>
                
                {/* Venue Info - Responsive layout */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 md:mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <span className="font-semibold text-gray-900">{currentPackage.clubName}</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold">{currentPackage.rating}</span>
                    <span className="text-sm text-gray-500">Reviews ({currentPackage.bookings})</span>
                  </div>
                </div>

                {/* Location - Responsive layout */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 md:mb-4">
                  <span>📍</span>
                  <span className="break-words">{currentPackage.areaName}, {currentPackage.cityName}</span>
                </div>

                {/* Package Details - Wrapped on mobile */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3 md:mb-4">
                  <span>⏱️ {currentPackage.service_time}</span>
                </div>

                {/* Price Information - Mobile-friendly */}
                <div className="text-sm text-gray-700 mb-4">
                  <div className="font-bold break-words">Price: ₹{currentPackage.discount_price} <span className="text-gray-500 line-through text-sm">₹{currentPackage.price}</span></div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-green-600 font-bold">You Save: ₹{currentPackage.discount_amount}</span>
                  </div>
                </div>
              </div>

              {/* Inclusion Section - Full width on mobile, right aligned on desktop */}
              <div className="text-left md:text-right w-full md:w-auto">
                <div className="text-sm text-gray-600 mb-2">Inclusions</div>
                <div className="space-y-1 mb-4">
                  {currentPackage.inclusions.slice(0, 3).map((item, index) => (
                    <div key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded break-words max-w-[200px]">
                      ✓ {item.inclusion_key} {index === 2 && currentPackage.inclusions.length > 3 ? `${currentPackage.inclusions.length - 3}+ More` : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA - Responsive layout */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                <div className="text-center md:text-left text-sm leading-tight">
                  <span>Book Package Now! </span>
                  <span className="text-yellow-300">Save ₹{currentPackage.discount_amount}</span>
                  <span> with this deal!</span>
                </div>
                <button className="text-white px-6 pt-2 font-semibold bg-white bg-opacity-20 rounded-lg md:bg-transparent md:bg-opacity-100 py-1 md:py-0">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>✨ Trusted by 10,000+ happy customers • 🛡️ 24/7 Support • 💯 100% Satisfaction Guarantee</p>
      </div>
    </div>
  );
}

