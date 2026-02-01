// Simple test script to verify the API
const testAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/packages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: 'noida',
        area: 'sector-63',
        club: 'the-ancient-barbeque'
      })
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

testAPI();