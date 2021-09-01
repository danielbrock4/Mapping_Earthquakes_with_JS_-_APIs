// MAP GeoJSON POINT TYPE
// ------------------------------------------------------------------------------------------------------------------
// // Create the map object with center at the San Francisco airport.
// let map = L.map("mapid").setView([37.5, -122.5], 10); // San Fransico Airport

// // IMPORTANT: Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.
// // We create the tile layer that will be the background of our map.
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/navigation-night-v1',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// }).addTo(map);

// // Add GeoJSON data.
//     // GeoJSON data coordinates are set with the 1st  parameter as X (longitude) & the 2nd parameter as Y (latitude)
//     let sanFranAirport =
//     {"type":"FeatureCollection","features":[{
//         "type":"Feature",
//         "properties":{
//             "id":"3469",
//             "name":"San Francisco International Airport",
//             "city":"San Francisco",
//             "country":"United States",
//             "faa":"SFO",
//             "icao":"KSFO",
//             "alt":"13",
//             "tz-offset":"-8",
//             "dst":"A",
//             "tz":"America/Los_Angeles"},
//             "geometry":{
//                 "type":"Point",
//                 "coordinates":[-122.375,37.61899948120117]}}
//     ]};

// // Create the GeoJSON layer and add a GeoJSON object to our map. = L.geoJSON(geojsonFeature).addTo(map);
//     // GeoJSON data coordinates are set with the 1st  parameter as X (longitude) & the 2nd parameter as Y (latitude)
//     // The L.geoJSON()layer reverses the coordinates to plot them on the map.cv  
// L.geoJSON(sanFranAirport).addTo(map);

// // BIND A POPUP TO THE SINGLE MARKER (GeoJSON)
// /* 1) pointToLayer callback function adds markers to a map
//    2) onEachFeature callback function allows you to add styling and bind data to a popup marker*/

// //Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, { // data will be our sanFranAirport data.
//     // pointToLayer callback function turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {//pass each GeoJSON feature as feature, & its latitude & longitude as latlng.
//         // The Console.Log will show feature is the JavaScript object geometry and properties of our GeoJSON object.
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup(`<h2>${feature.properties.name}</h2><hr><h4> ${feature.properties.city},
//         ${feature.properties.country} </h4>`);
//     }
// }).addTo(map);

// //Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, { // data will be our sanFranAirport data.
//      // onEachFeature callback function allows you to add styling and bind data to a popup marker
//     onEachFeature: ((feature, layer) => { //pass each GeoJSON feature as feature & any properties to 2nd argument, layer
//         console.log(layer);
//         layer.bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3><hr><h4> 
//             Airport Name: ${feature.properties.city}</h4>`);
//     })
// }).addTo(map);

// MAP MULTIPLE GeoJSON POINT TYPES
//-----------------------------------------------------------------------------------------------------------------
// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// // IMPORTANT: Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.
// // We create the tile layer that will be the background of our map.
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/dark-v10',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// }).addTo(map);

// // Accessing the airport GeoJSON URL
//     // access the majorAirports.json file on GitHub with the following airportData variable
//     // Within GitHub find majorAirports.json file and click raw to view JSON data
// let airportDataURL = "https://raw.githubusercontent.com/danielbrock4/Mapping_Earthquakes_with_JS_-_APIs/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/js/majorAirports.json"

// // Grabbing our GeoJSON data from URL.
//     // Inside d3.json() add airportDataURL variable 
//     // .then add the "data" parameter, which references the airportDataURL
// d3.json(airportDataURL).then(data => {
//     console.log(data);
//     //Creating a GeoJSON layer with the retrieved data.
//     L.geoJson(data, {
//         onEachFeature: ((feature, layer) => { //pass each GeoJSON feature as feature & any properties to 2nd argument, layer
//             console.log(layer);
//             layer.bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3><hr><h4> 
//                               Airport Name: ${feature.properties.city}</h4>`)        
//         }) 
//     }).addTo(map);
// }); 

// ADD MULTIPLE MAPS
//------------------------------------------------------------------------------------------------------------------
// First, Add the multiple tile layers that will be the background of our map and assign them variables.
    // DONT add the addTo(map) at the end of your streets or dark tileLayer() code
let dark  = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
let streets  = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
    // In the base layer code, the Street and Dark keys set the text, which we'll see in the index.html file, 
    // while the corresponding values reference the tile layers. Street and Dark can be used to 
    // toggle between styles in the index.html file 
let baseMaps ={
    Street: streets,
    Dark: dark,
};

// Create the map object with center and zoom level using alternative method
    // An alternative to using the setView()method is to modify each attribute in the 
    // map object using the curly braces notation as follows
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 4,
    layers: [streets] // base layer code
});

// Pass our map layers into our layers control and add the layers control to the map.
    // use the Leaflet control.layers, which will control the layers we'll see on the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
    // access the majorAirports.json file on GitHub with the following airportData variable
    // Within GitHub find majorAirports.json file and click raw to view JSON data
let airportDataURL = "https://raw.githubusercontent.com/danielbrock4/Mapping_Earthquakes_with_JS_-_APIs/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/js/majorAirports.json"

// Grabbing our GeoJSON data from URL.
    // Inside d3.json() add airportDataURL variable 
    // .then add the "data" parameter, which references the airportDataURL
d3.json(airportDataURL).then(data => {
    console.log(data);
        //Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        onEachFeature: ((feature, layer) => { //pass each GeoJSON feature as feature & any properties to 2nd argument, layer
            console.log(layer);
            layer.bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3><hr><h4> 
                                  Airport Name: ${feature.properties.city}</h4>`)        
        }) 
    }).addTo(map);
}); 


/* */