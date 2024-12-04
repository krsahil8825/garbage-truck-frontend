let map;

function initMap() {
  const options = {
    zoom: 15,
    center: { lat: 28.6139, lng: 77.209 },
    mapTypeId: "satellite",
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  // Add a truck marker
  new google.maps.Marker({
    position: { lat: 28.6139, lng: 77.209 },
    map: map,
    title: "Garbage Truck",
    icon: "../src/assets/icons/truck.png",
  });
}

window.onload = initMap;
