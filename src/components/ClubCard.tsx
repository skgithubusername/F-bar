'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

/* ========= TYPES ========= */

interface OccasionApiResponse {
  status: boolean;
  msg: string;
  data: {
    highlights: {
      open_time: string;
      close_time: string;
      max_party_size: string;
      about_us: string;
    };
  };
}

interface ClubCardProps {
  clubId: number;
}

/* ========= CLUB CARD COMPONENT ========= */

export default function ClubCard({ clubId }: ClubCardProps) {
  const [cardData, setCardData] = useState<OccasionApiResponse['data']['highlights'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // API call to get occasion data
        const response = await axios.post<OccasionApiResponse>(
          'https://admin.partywitty.com/master/APIs/Web/getOccassion',
          { club_id: clubId },
          {
            headers: {
              'Accept': 'application/json',
              'Origin': 'https://www.partywitty.com',
              'Referer': 'https://www.partywitty.com/',
            }
          }
        );

        if (response.data.status) {
          setCardData(response.data.data.highlights);
        } else {
          setError('Failed to fetch club data');
        }
      } catch (err) {
        console.error('Error fetching club data:', err);
        setError('Error loading club information');
      } finally {
        setLoading(false);
      }
    };

    if (clubId) {
      fetchClubData();
    }
  }, [clubId]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !cardData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
        <div className="text-red-500 mb-2">⚠️</div>
        <p className="text-gray-600">{error || 'No data available'}</p>
      </div>
    );
  }

  /* ========= CLUB CARD UI ========= */

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Mobile: Stacked layout, Desktop: Side-by-side */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section - Full width on mobile */}
        <div className="w-full md:w-64 md:h-64 relative flex items-center justify-center">
          <img 
            src="/img/club-placeholder.jpg" 
            alt="Club" 
            className="w-full h-full object-cover p-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/600x400?text=Club+Image';
            }}
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Club Highlights</h2>
          
          {/* Timing Information */}
          <div className="space-y-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">OT</span>
              </div>
              <span className="text-sm text-gray-600 break-words">Opening Time: {cardData.open_time}</span>
              <div className="ml-auto md:ml-0 mt-1 md:mt-0">
                <span className="text-purple-600 text-sm">🕐</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">CT</span>
              </div>
              <span className="font-semibold text-gray-900">Closing Time: {cardData.close_time}</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>👥</span>
              <span className="break-words">Max Party Size: {cardData.max_party_size} people</span>
            </div>
          </div>
          
          {/* About Section */}
          <div className="text-sm text-gray-700 mb-4">
            <div className="font-bold break-words">About Us</div>
            <div className="mt-1">
              <span className="text-gray-600">{cardData.about_us || 'No description available for this venue.'}</span>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              <div className="text-center md:text-left text-sm leading-tight">
                <span>Book Your Visit Now! </span>
              </div>
              <button className="text-white px-6 pt-2 font-semibold bg-white bg-opacity-20 rounded-lg md:bg-transparent md:bg-opacity-100 py-1 md:py-0">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========= PACKAGE SLIDER COMPONENT ========= */

export function PackageSlider() {
  const [clubs] = useState([
    { id: 874, name: "Club 874" },
    { id: 875, name: "Club 875" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Clubs
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8">
          {clubs.map((club) => (
            <div key={club.id} className="transform hover:scale-105 transition-transform duration-300">
              <ClubCard clubId={club.id} />
              <div className="text-center mt-3">
                <span className="text-gray-600 font-medium">{club.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}