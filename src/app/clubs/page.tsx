'use client';

import { ClubCard, ClubSlider, PackageSlider } from '@/components';

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Club Information Cards
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Club ID: 874</h2>
            <ClubCard clubId={874} />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Club ID: 875</h2>
            <ClubCard clubId={875} />
          </div>
        </div>
        
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Club Slider View
          </h2>
          <ClubSlider />
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Package Slider (API Data)
          </h2>
          <div className="flex justify-center">
            <PackageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}