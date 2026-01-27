'use client';

import Image from 'next/image';

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  tags: string[];
  price: string;
  isVeg?: boolean;
}

export default function MenuItem({ image, name, description, tags, price, isVeg }: MenuItemProps) {
  return (
    <div className=" bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 relative">
      {/* Price Badge - Top Right */}
      <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
        ₹{price}
      </div>

      <div className="flex gap-4">
        {/* Image */}
        <div className="w-24 h-24 rounded-xl flex-shrink-0 overflow-hidden relative">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col pr-16">
          {/* Title with Veg Indicator */}
          <div className="flex items-start gap-2 mb-2">
            {isVeg && (
              <div className="w-4 h-4 border-2 border-green-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            )}
            <h3 className="font-semibold text-gray-800 text-base leading-tight">{name}</h3>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  tag === 'Bestseller'
                    ? 'bg-yellow-100 text-yellow-700'
                    : tag === 'Fresh Ingredients'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
