// Add Style to the Earthquake Data
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

// Create a function styleInfo(), which will contain all the style parameters for each earthquake plotte
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function to calculate the radius.
function styleInfo(feature) { // In styleInfo() pps the argument feature to reference each object's features.
    return {
    opacity: 1, 
    fillOpacity: 1, // inside circle
    fillColor: "#ffae42", // organe
    color: "#000000", // black
    // create getRadius() to retrieve the earthquake's magnitude to calculate the radius 
    // of the circle from the magnitude.
    radius: getRadius(feature.properties.mag), 
    stroke: true,
    weight: 0.5
    }
};

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    // use a conditional statement that sets the magnitude to 1 if the magnitude 
    // of the earthquake in the JSON file is 0 so that the earthquake is plotted on the map.
    if (magnitude === 0) { // === needs exact match
        return 1;
    }
    // If the magnitude is greater than 0, then the magnitude is multiplied by 4.
    return magnitude * 4;

};

// Grabbing our GeoJSON data from URL.
d3.json(earthquakeData).then((data) => { 
    // We turn each feature into a circleMarker on the map.
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng, latlng);
        },
        style: styleInfo,
    }).addTo(map);
});


/* */