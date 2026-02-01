'use client';

import ClubCard from './ClubCard';
import ClubSlider from './ClubSlider';
import PackageSlider from './PackageSlider';

export default function DisplayComponentsDemo() {
  return (
    <div className="overflow-hidden px-2 sm:px-6 lg:px-2">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Display Components Demo</h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <PackageSlider />
      </div>
      
      <div className="my-6 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 md:p-6">
          <ClubCard clubId={874} />
        </div>
      </div>
      
      <div className="mt-6">
        <ClubSlider />
      </div>
    </div>
  );
}