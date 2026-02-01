'use client';

import { useState } from 'react';
import ClubCard from './ClubCard';

export default function ClubSlider() {
  const [clubs] = useState([
    { id: 874, name: "Club 874" },
    { id: 875, name: "Club 875" }
  ]);

  return (
    <div className="overflow-hidden px-2 sm:px-6 lg:px-2">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Clubs</h2>
      
      <div className="space-y-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ClubCard clubId={club.id} />
          </div>
        ))}
      </div>
    </div>
  );
}