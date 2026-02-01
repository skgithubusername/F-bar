'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DualApiTest() {
  const [occasionData, setOccasionData] = useState<any>(null);
  const [clubDetailsData, setClubDetailsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testBothApis = async () => {
      try {
        setLoading(true);
        setError(null);

        // Test 1: getOccassion API (working based on your PowerShell test)
        console.log('Testing getOccassion API...');
        const occasionResponse = await axios.post(
          'https://admin.partywitty.com/master/APIs/Web/getOccassion',
          { club_id: 872 },
          {
            headers: {
              'Accept': 'application/json',
              'Origin': 'https://www.partywitty.com',
              'Referer': 'https://www.partywitty.com/',
            }
          }
        );
        setOccasionData(occasionResponse.data);
        console.log('Occasion API Success:', occasionResponse.data);

        // Test 2: getClubDetails API (what PackageSlider needs)
        console.log('Testing getClubDetails API...');
        const formData = new FormData();
        formData.append('city', 'delhi');
        formData.append('area', 'all');
        formData.append('club', 'all');

        const clubDetailsResponse = await axios.post(
          'https://admin.partywitty.com/master/APIs/Web/getClubDetails',
          formData,
          {
            headers: {
              'Accept': 'application/json',
              'Origin': 'https://www.partywitty.com',
              'Referer': 'https://www.partywitty.com/',
            }
          }
        );
        setClubDetailsData(clubDetailsResponse.data);
        console.log('ClubDetails API Success:', clubDetailsResponse.data);

      } catch (err: any) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    testBothApis();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Testing both APIs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dual API Test Results
        </h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* getOccassion Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">getOccassion API</h2>
            <div className="text-sm text-green-600 mb-2">✓ Working</div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
              {JSON.stringify(occasionData, null, 2)}
            </pre>
          </div>
          
          {/* getClubDetails Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">getClubDetails API</h2>
            {clubDetailsData ? (
              <div>
                <div className="text-sm text-green-600 mb-2">✓ Success</div>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {JSON.stringify(clubDetailsData, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="text-sm text-red-600">✗ Failed or No Data</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}