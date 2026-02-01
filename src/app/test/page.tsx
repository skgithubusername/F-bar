'use client';

import { ClubCard } from '@/components';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Test Club Card
        </h1>
        <div className="flex justify-center">
          <ClubCard clubId={874} />
        </div>
      </div>
    </div>
  );
}