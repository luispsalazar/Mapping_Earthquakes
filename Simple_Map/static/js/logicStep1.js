// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([37.6213, -122.3790], 4);
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });



// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


// We create the tile layer that will be the background of our map.



// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// for white background:
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
 });

// Create the map object with center and zoom level.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Then we add our 'graymap' tile layer to the map.
dark.addTo(map);



// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Add GeoJSON data.
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/luispsalazar/Mapping_Earthquakes/main/majorAirports.json";


// NOTE:
//  GeoJSON data coordinates are set with the first parameter
//  as X (longitude) and the second parameter as Y (latitude)


// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/150000,
//     color: "orange"
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


//  Add a circcle to the map for Los Angeles, California.
// L.circleMarker(city.location, {
//   radius: 30,
//   color: "black",
//   fillColor: '#ffffa1'
// }).addTo(map);


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).bindPopup("<h2>" + features.properties.name + "</h2>").addTo(map)
});


// L.geoJson(data, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng);
//   }
// });

//.bindPopup("<h2>" + properties.city + "</h2> <hr> <h3>Airport Name: " + properties.name + "</h3>")