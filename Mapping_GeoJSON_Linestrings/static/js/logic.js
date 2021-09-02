// Map GeoJSON Linestrings
//------------------------------------------------------------------------------------------------------------------

// First, Add the multiple tile layers that will be the background of our map and assign them variables.
    // DONT add the addTo(map) at the end of your streets or dark tileLayer() code
let day = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-day-v1',
    accessToken: API_KEY
});

let night = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
    // In the base layer code, the Street and Dark keys set the text, which we'll see in the index.html file, 
    // while the corresponding values reference the tile layers. Street and Dark can be used to 
    // toggle between styles in the index.html file 
let baseMaps = {
    Day: day,
    Night: night,
};

// Create the map object with center and zoom level using alternative method
    // An alternative to using the setView()method is to modify each attribute in the 
    // map object using the curly braces notation as follows
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [day] // base layer code
});

// Pass our map layers into our layers control and add the layers control to the map.
    // use the Leaflet control.layers, which will control the layers we'll see on the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
    // access the majorAirports.json file on GitHub with the following airportData variable
    // Within GitHub find majorAirports.json file and click raw to view JSON data
let torontoData = "https://raw.githubusercontent.com/danielbrock4/Mapping_Earthquakes_with_JS_-_APIs/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json";

// Grabbing our GeoJSON data from URL.
d3.json(torontoData).then((data) => { 
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        color: "yellow",
        weight: 2,
        onEachFeature: ((feature, layer) => {
            console.log(layer);
            layer.bindPopup(`<h3>Airline: ${feature.properties.airline}</h3><hr><h4> 
            Destination: ${feature.properties.dst}</h4>`);
        })
    }).addTo(map);
});

/* */