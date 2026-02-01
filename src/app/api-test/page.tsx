'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiTestPage() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testApi = async () => {
      try {
        setLoading(true);
        setError(null);

        // Test the exact API call
        const formData = new FormData();
        formData.append('city', 'delhi');
        formData.append('area', 'all');
        formData.append('club', 'all');

        console.log('Making API request to:', 'https://admin.partywitty.com/master/APIs/Web/getClubDetails');
        console.log('FormData:', {
          city: 'delhi',
          area: 'all',
          club: 'all'
        });

        const apiResponse = await axios.post(
          'https://admin.partywitty.com/master/APIs/Web/getClubDetails',
          formData,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            timeout: 10000 // 10 second timeout
          }
        );

        console.log('API Response:', apiResponse);
        setResponse(apiResponse.data);
      } catch (err: any) {
        console.error('API Error Details:', {
          message: err.message,
          code: err.code,
          response: err.response?.data,
          status: err.response?.status,
          headers: err.response?.headers
        });
        setError(`Error: ${err.message}`);
        setResponse(err.response?.data || 'No response data');
      } finally {
        setLoading(false);
      }
    };

    testApi();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Testing API connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          API Test Results
        </h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">API Response</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}