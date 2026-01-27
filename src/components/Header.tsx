'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';
import FollowersPopup from './FollowersPopup';

interface HeaderProps {
  name: string;
  location: string;
  distance: string;
  stats: {
    publications: number;
    followers: number;
    mutual: number;
  };
  followers?: Array<{
    id: string;
    name: string;
    username: string;
    avatar: string;
    isMutual?: boolean;
  }>;
  mutualMates?: Array<{
    id: string;
    name: string;
    username: string;
    avatar: string;
  }>;
}

export default function Header({ name, location, distance, stats, followers = [], mutualMates = [] }: HeaderProps) {
  const [isFollowersPopupOpen, setIsFollowersPopupOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <header 
      className="bg-gradient-to-b from-blue-50 to-white border-b border-blue-100 p-4 md:p-8"
      role="banner"
      aria-label="Restaurant header information"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex-shrink-0 overflow-hidden shadow-lg">
            <Image
              src="/img/toplogo.png"
              alt={`${name} restaurant logo`}
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 pt-0 sm:pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h1>
              <div className="flex items-center gap-2" aria-label="Restaurant rating">
                <span className="text-yellow-400 text-lg md:text-xl" aria-hidden="true">⭐</span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">4.1 Review (03)</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-700 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <span aria-hidden="true">📍</span>
                <span className="font-medium">{location}</span>
              </div>
              <span className="text-purple-600 font-semibold">📍 {distance}</span>
            </div>
            <div className="flex gap-6 md:gap-12">
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">{stats.publications}</div>
                <div className="text-xs text-gray-600 font-medium">Publications</div>
              </div>
              <div 
                className="cursor-pointer hover:bg-gray-100 rounded-lg p-2 -m-2 transition"
                onClick={() => setIsFollowersPopupOpen(true)}
                role="button"
                tabIndex={0}
                aria-label={`View ${stats.followers} followers`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsFollowersPopupOpen(true);
                  }
                }}
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900">{stats.followers}</div>
                <div className="text-xs text-gray-600 font-medium">Followers</div>
              </div>
              <div 
                className="cursor-pointer hover:bg-gray-100 rounded-lg p-2 -m-2 transition"
                onClick={() => setIsFollowersPopupOpen(true)}
                role="button"
                tabIndex={0}
                aria-label={`View ${stats.mutual} mutual connections`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsFollowersPopupOpen(true);
                  }
                }}
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900">{stats.mutual}</div>
                <div className="text-xs text-gray-600 font-medium">Mutual Mate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-4 lg:mt-0" role="toolbar" aria-label="Restaurant actions">
          <button 
            onClick={() => setIsFollowing(!isFollowing)}
            className="px-4 md:px-8 py-2.5 rounded-full font-semibold transition shadow-md hover:shadow-lg text-sm bg-purple-600 text-white hover:bg-purple-700"
            aria-pressed={isFollowing}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
          <button 
            className="px-4 md:px-6 py-2.5 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-400 transition text-sm"
            aria-label="Send message to restaurant"
          >
            Message
          </button>
          <button 
            className="px-4 md:px-6 py-2.5 bg-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-400 transition text-sm"
            aria-label="Get suggestions"
          >
            Suggestion
          </button>
          <button 
            className="p-2.5 text-gray-600 hover:bg-gray-200 rounded-full transition"
            aria-label="More options"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Followers Popup */}
      <FollowersPopup
        isOpen={isFollowersPopupOpen}
        onClose={() => setIsFollowersPopupOpen(false)}
        followers={followers}
        mutualMates={mutualMates}
      />
    </header>
  );
}
