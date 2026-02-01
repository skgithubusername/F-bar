import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { city, area, club } = body;

    console.log('API Route - Received params:', { city, area, club });

    if (!city || !area || !club) {
      return NextResponse.json(
        { error: 'Missing required parameters: city, area, club' },
        { status: 400 }
      );
    }

    // Create FormData for the external API
    const formData = new FormData();
    formData.append('city', city);
    formData.append('area', area);
    formData.append('club', club);

    console.log('API Route - Making request to PartyWitty API...');

    const response = await fetch(
      'https://partywitty.com/master/APIs/Web/getClubDetails',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
      }
    );

    console.log('API Route - Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} ${response.statusText}`, errorText);
      return NextResponse.json(
        { error: `External API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('API Route - Response data:', JSON.stringify(data, null, 2));
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
