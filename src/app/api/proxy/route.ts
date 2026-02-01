import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Forward the request to the external API
    const response = await fetch('https://admin.partywitty.com/master/APIs/Web/getClubDetails', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Origin': 'https://www.partywitty.com',
        'Referer': 'https://www.partywitty.com/',
      },
    });

    const data = await response.json();
    
    return Response.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error('Proxy API error:', error);
    return Response.json(
      { error: 'Failed to fetch data from external API' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}