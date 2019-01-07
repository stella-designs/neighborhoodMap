// Model
var model = {

}

var locations = [
  {title: 'Pike Place Market', location: {lat: 47.610136, lng: -122.342057}},
  {title: 'Washington Park Arboretum', location: {lat: 47.630101, lng: -122.294548}},
  {title: 'Simply Soulful', location: {lat: 47.624056, lng: -122.294928}},
  {title: 'Bacco Cafe', location: {lat: 47.610097, lng: -122.341406}},
  {title: 'Seaward Park', location: {lat: 47.549605, lng: -122.257357}},
  {title: 'Mashiko', location: {lat: 47.560369, lng: -122.386989}},
]

// Veiw
var mapView = {

}
var map;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.6199455, lng: -122.3512352},
    zoom: 13
  });
}

// Controller
var controller = {
    
}