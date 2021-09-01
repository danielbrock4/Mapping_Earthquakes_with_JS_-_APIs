// Map GeoJSON Polygons
/* In the JSON data, we can see that the geometry type is "Polygon." To form a polygon, 
the coordinates have to be an array of linear ring (LinearRing) coordinate arrays. 
A LinearRing is a LineString with at least four or more sets of coordinates, where the starting and 
end points have the same coordinates.*/
//------------------------------------------------------------------------------------------------------------------

// First, Add the multiple tile layers that will be the background of our map and assign them variables.
    // DONT add the addTo(map) at the end of your streets or dark tileLayer() code
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
    // In the base layer code, the Street and Dark keys set the text, which we'll see in the index.html file, 
    // while the corresponding values reference the tile layers. Street and Dark can be used to 
    // toggle between styles in the index.html file 
let baseMaps = {
    Streets: streets,
    "Satellite Streets": satelliteStreets,
};

// Create the map object with center and zoom level using alternative method
    // An alternative to using the setView()method is to modify each attribute in the 
    // map object using the curly braces notation as follows
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets] // base layer code
});

// Pass our map layers into our layers control and add the layers control to the map.
    // use the Leaflet control.layers, which will control the layers we'll see on the map
L.control.layers(baseMaps).addTo(map);

// Add the USGS URL for earthquake data by following these steps:
    // 1) From the USGS home page (https://earthquake.usgs.gov/) click the Earthquakes link:
    // 2) Next, click the Real-time Notifications, Feeds, and Web Services (Links to an external site.) link:
    // 3) Scroll down until you see "GeoJSON Summary Feed".
    // 4) Click the GeoJSON Summary Feed (Links to an external site.) link:
    // 5) On the right-hand side, click the All Earthquakes link under the "Past 7 Days" heading:
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data from URL.
d3.json(earthquakeData).then((data) => { 
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});


/* */