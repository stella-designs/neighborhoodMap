// Model (application data objects are stored)
var model = {}

var map;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.6199455, lng: -122.3512352},
    zoom: 13
  });
}

var locations = [
  {title: 'Pike Place Market', location: {lat: 47.610136, lng: -122.342057}},
  {title: 'Washington Park Arboretum', location: {lat: 47.630101, lng: -122.294548}},
  {title: 'Simply Soulful', location: {lat: 47.624056, lng: -122.294928}},
  {title: 'Bacco Cafe', location: {lat: 47.610097, lng: -122.341406}},
  {title: 'Seaward Park', location: {lat: 47.549605, lng: -122.257357}},
  {title: 'Mashiko', location: {lat: 47.560369, lng: -122.386989}},
]

// Veiw (whats presented to the users)
var mapView = {}

var largeInfowindow = new google.maps.InfoWindow();

//Location array to create an array of markers on initalize.
for (var i =0; i < locations.length; i++) {
  // Get the position from the location array
  var position = location[i].locations;
  var title = locations[i].title;
  //Create a marker per location, and put into markers array
  var marker = new.google.maps.Marker({
    position: position,
    title: title,
    animation: google.maps.Animation.DROP,
    id: i
  });
  // Push the marker to array of markers
  markers.push(marker);
  // create an onclick event to open an infowindow at each marker
  marker.addListner('click', function() {
    populateInfoWindow(this, largeInfowindow);
  });
}
document.getElementById('show-listings').addEventListener('click', showListings);
document.getElementById('hide-listings').addEventListener('click', hideListings);

// Populates infowindow when marker is clicked, allowing only one to open, populate based on location
function populateInfoWindow(marker, infowindow) {
  //Check to make sure info window is not already open
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '<div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if infowindow is closed
    infowindow.addListner('closeclick', function() {
      infowindow.marker = null;
    });
  }
}
//This function will loop through the markers array and display them all
function showListings() {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display marker
  for var (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}

// This function will loop through the lisitings and hide them all
function hideListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

// Controller (decision maker and glue between model and view)
var controller = {}