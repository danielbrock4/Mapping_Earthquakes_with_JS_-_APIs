// CONFIRM FILE IS WORKING IN CONSOLE
// Add console.log to check to see if our code is working.
    // console.log() w/  phrase "working" inside the() will help confirm that our logic.js file 
    // is accessed in the console on Chrome.
console.log("working");

// ADD A MAP OBJECT
/* Add the map object, as shown on the Leaflet Quick Start Guide page with some slight modifications. We'll 
change the geographical center of the map to the approximate geographical center of the United States.
    1) Assing the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
    2) The mapid will reference the id tag in our <div> element on the index.html file.
    3) The setView() method sets the view of the map with a geographical center, where the first coordinate 
    is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.*/ 
// Create the map object with a center and zoom level.
    // Setview Method
let map = L.map('mapid').setView([40.7, -94.5], 4);
    // Other Method - useful when we need to add multiple tile layers, or a background image of our map(s)
// let map2 = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });    

// ADD TILE LAYER FOR OUR MAP

// 1ST USE LEAFLET Quick Setup Guide TO COPY CODE
    // Copy from MapBoxWebsite Setup this tile layer code & assign it to the streets variable, since the tile 
    // layer will create a street-level map
// We create the tile layer that will be the background of our map.
    /*1) We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the 
         variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
    2) The following URLs appear in the parentheses of our tileLayer() method:
        2a) The API URL with a reference to the accessToken
        2b) The OpenStreetMap URL inside the curly braces of our tileLayer() method
    3) We add the maxZoom attribute and assign it a value of 18.
    4) We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
    5) We add the accessToken attribute and assign it the value of our API_KEY. */
// let streetsLeafletCode = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// Then we add our 'graymap' tile layer to the map.
    // 6) Finally, we call the addTo() function with our map object, map on our graymap object tile layer. 
    //    The addTo() function will add the graymap object tile layer to our let map. 
// streetsLeafletCode.addTo(map2);

// 2nd UPDATE CODE WITH MAPBOX - To use the Mapbox Styles API, edit the URL in the Leaflet tilelayer()method,
// We create the tile layer that will be the background of our map. 
    /* 1) First, navigate to the Mapbox Glossary
    2) Search the Static Tiles API
    3) Copy this part of the URL: https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/.
    4) In your tileLayer() code, replace this part of the URL, https://api.tiles.mapbox.com/v4/{id}/, 
        with the Mapbox Styles API URL you copied.
    5) Remove the .png from the URL.
    6) Remove the id attribute and the map style reference.
    7) To change your map style, click on the Static Tiles API documentation link on the Static Tiles API page.
    8)  On the left sidebar, click on the Styles link
    9) Below the Styles subheading, find a list of different Mapbox styles
    10) To change the map style, use the style given in the URLs (e.g., "streets-v11," "dark-v10," etc.).
        mapbox://styles/mapbox/dark-v10 */
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
/* */
/* */