exports.handler = async (event) => {
    const { lat, lng } = JSON.parse(event.body);
  
    console.log(`Received GPS data: Latitude=${lat}, Longitude=${lng}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Location updated successfully!" }),
    };
  };
  