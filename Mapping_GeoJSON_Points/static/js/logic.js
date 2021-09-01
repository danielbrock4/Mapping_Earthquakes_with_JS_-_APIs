// Add GeoJSON data.
    // GeoJSON data coordinates are set with the 1st  parameter as X (longitude) & the 2nd parameter as Y (latitude)
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([37.5, -122.5], 10);

// We create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

// Create the GeoJSON layer and add a GeoJSON object to our map. = L.geoJSON(geojsonFeature).addTo(map);
    // GeoJSON data coordinates are set with the 1st  parameter as X (longitude) & the 2nd parameter as Y (latitude)
    // The L.geoJSON()layer reverses the coordinates to plot them on the map.cv  
L.geoJSON(sanFranAirport).addTo(map);

// BIND A POPUP TO THE MARKER (GeoJSON)
/* 1) pointToLayer callback function adds markers to a map
   2) onEachFeature callback function allows you to add styling and bind data to a popup marker*/

//Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, { // data will be our sanFranAirport data.
    // pointToLayer callback function turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {//pass each GeoJSON feature as feature, & its latitude & longitude as latlng.
        // The Console.Log will show feature is the JavaScript object geometry and properties of our GeoJSON object.
        console.log(feature);
        return L.marker(latlng)
        .bindPopup(`<h2>${feature.properties.name}</h2><hr><h4> ${feature.properties.city},
        ${feature.properties.country} </h4>`);
    }
}).addTo(map);

//Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, { // data will be our sanFranAirport data.
     // onEachFeature callback function allows you to add styling and bind data to a popup marker
    onEachFeature: ((feature, layer) => { //pass each GeoJSON feature as feature & any properties to 2nd argument, layer
        console.log(layer);
        layer.bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3><hr><h4> 
            Airport Name: ${feature.properties.city}</h4>`);
    })
}).addTo(map);

/* */