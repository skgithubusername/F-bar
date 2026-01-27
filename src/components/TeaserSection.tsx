'use client';

export default function TeaserSection() {
  const teaserCards = [
    {
      id: 1,
      image: '/img/img1.jpg',
      alt: 'Party scene with people dancing'
    },
    {
      id: 2,
      image: '/img/img2.jpg',
      alt: 'Neon lights and ambiance'
    },
    {
      id: 3,
      image: '/img/img3.jpg',
      alt: 'Portrait with green background'
    },
    {
      id: 4,
      image: '/img/img4.jpg',
      alt: 'Food and dining experience'
    }
  ];

  return (
    <div className=" p-6 md:p-8 ">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Teaser</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teaserCards.map((card) => (
          <div key={card.id} className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Earn 25 Tulips Badge */}
              <div className="absolute top-3 left-3 bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                <span className="text-white text-sm font-medium">Earn 25 Tulips</span>
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">?</span>
                </div>
              </div>
              
              {/* Ambiance Label */}
              <div className="absolute top-3 right-3 bg-green-500 rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">Ambiance</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}