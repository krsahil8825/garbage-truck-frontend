// script.js
let map = L.map('map').setView([51.505, -0.09], 13);  // Default to some location

// Set up the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a marker for the truck
let truckMarker = L.marker([51.505, -0.09]).addTo(map);

// Simulate truck data (GPS, weight, status)
let truckData = {
    latitude: 51.505,
    longitude: -0.09,
    weight: 0,
    status: 'Active'
};

// Function to update truck's location and data
function updateTruckData() {
    // Simulate GPS data and weight change
    truckData.latitude += (Math.random() - 0.5) * 0.01;  // Random GPS change
    truckData.longitude += (Math.random() - 0.5) * 0.01;
    truckData.weight = Math.floor(Math.random() * 500);  // Simulate weight
    truckData.status = truckData.weight > 100 ? 'Full' : 'Active';

    // Update marker position
    truckMarker.setLatLng([truckData.latitude, truckData.longitude]);

    // Update truck data on the page
    document.getElementById('truck-status').innerText = `Status: ${truckData.status}`;
    document.getElementById('truck-weight').innerText = `Weight: ${truckData.weight} kg`;

    // Send alert if the truck is full
    if (truckData.weight > 100) {
        document.getElementById('alert-message').innerText = 'ALERT: Truck is full!';
        document.getElementById('alert-message').style.color = 'red';
    } else {
        document.getElementById('alert-message').innerText = '';
    }
}

// Simulate truck data update every 5 seconds
setInterval(updateTruckData, 5000);

// Optional: Simulate route optimization (This would be a more complex algorithm in a real system)
function simulateRouteOptimization() {
    // For now, we'll just log a message
    console.log("Optimizing route...");
}
setInterval(simulateRouteOptimization, 10000);
