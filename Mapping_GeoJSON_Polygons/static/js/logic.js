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
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets] // base layer code
});

// Pass our map layers into our layers control and add the layers control to the map.
    // use the Leaflet control.layers, which will control the layers we'll see on the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
    // access the majorAirports.json file on GitHub with the following airportData variable
    // Within GitHub find majorAirports.json file and click raw to view JSON data
let torontoData = "https://raw.githubusercontent.com/danielbrock4/Mapping_Earthquakes_with_JS_-_APIs/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json";
let torontoHoods = "https://raw.githubusercontent.com/danielbrock4/Mapping_Earthquakes_with_JS_-_APIs/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/static/js/torontoNeighborhoods.json"

// Grabbing our GeoJSON data from URL.
d3.json(torontoHoods).then((data) => { 
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        color: "blue",
        weight: 1,
        onEachFeature: ((feature, layer) => {
            console.log(layer);
            layer.bindPopup(`<h4>Neighborhood: ${feature.properties.AREA_NAME}</h4>`)
        })
    }).addTo(map);
});

/* */