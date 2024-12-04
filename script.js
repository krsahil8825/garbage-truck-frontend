// Connect to the backend using Socket.IO
const socket = io.connect('https://your-heroku-app.herokuapp.com');

// Update the truck data when receiving real-time updates
socket.on('truck_update', (data) => {
    document.getElementById('status').textContent = 'Status: ' + data.status;
    document.getElementById('location').textContent = 'Location: ' + 
      'Lat: ' + data.latitude + ', Lng: ' + data.longitude;
    document.getElementById('weight').textContent = 'Weight: ' + data.weight + ' kg';
});
