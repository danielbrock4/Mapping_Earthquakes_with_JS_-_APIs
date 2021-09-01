// GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude)

/* GeoJSON data is a type of JavaScript Object Notation (JSON) data that is specifically designed to host 
geographical information. GeoJSON data consists of a single object, which can be represented by a:

1) geometry object
2) features object
3) collection of features (FeatureCollection object).*/

// GEOMETRY OBJECT (Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, or GeometryCollection)

/*Point- Point has a single set of coordinates, like when we mapped a single marker to the map.*/
// "geometry":{
//     "type":"Point",
//     "coordinates": [-118.4, 33.9]
//     }

/* MultiPoint is an array of point coordinates, like when we mapped multiple cities with their population to a map. */
// "geometry":{
//     "type":"MultiPoint",
//     "coordinates": [-118.4, 33.9], [-118.5, 34.0]
//     }

/*LineString has an array of Point coordinates, like when we mapped the airline route from LAX to SFO.  */
// "geometry":{
//     "type":"LineString",
//     "coordinates": [[-118.4, 33.9],[-122.4, 37.6]]
//     }

/*MultiLineString are an array of LineString coordinates, like when we mapped the LAX-SFO-SLC-SEA airline route.  */
// "geometry":{
//     "type":"MultiLineString",
//     "coordinates":
//        [[-118.4, 33.9],[-106.4, 31.8]],
//        [[-118.4, 33.9],[-123.2, 44.1]]
//     }

/* Polygon has an array of LineString coordinates. We'll map polygons later in this module. */
// "geometry": {
//     "type": "Polygon",
//      "coordinates":
//     [
//      [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ]
//     ]

/*MultiPolygon has an array of polygon coordinates. We'll map multiple polygons later in this module.  */
// "geometry": {
//     "type": "MultiPolygon",
//     "coordinates": [
//      [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ],
//      [ [ -122.378, 37.826 ], [ -122.377, 37.830 ], [ -122.369, 37.832 ] ]
//  ]

/*GeometryCollection has a geometry array. Each element in the geometry array can be one of the geometry objects above.  */
// {
//     "type": "GeometryCollection",
//     "geometries": [
//         {
//           "type":"Point",
//         "coordinates": [-118.4, 33.9]
//        }
//         },
//         {
//            "type":"LineString",
//            "coordinates": [
//               [-118.4, 33.9],[-122.4, 37.6]
//             ]
//         }
//     ]
//  }

// FEATURES OBJECT
/*GeoJSON features object contains a geometry object, like those above, and additional properties, 
such as magnitude, address, and time as shown below for an earthquake features object.  */
// {
//     type: "Feature",
//     properties: {
//     mag: 1.88,
//     place: "6km SE of Pahala, Hawaii",
//     time: 1573766377230,
//     type: "earthquake",
//     title: "M 1.9 - 6km SE of Pahala, Hawaii"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -155.4329987,
//     19.1634998
//     ]},
//   }



/*FeatureCollection Object
A FeatureCollection object contains an array of features objects. In the following FeatureCollection of airline
routes, there is an array of features objects where each feature has its own properties and geometry:  */
// {"type":"FeatureCollection","features":
// [
//   {
//     "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","dst":"ABQ","dst_id":"4019","stops":"0","equipment":"CRJ CR7"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-106.609001,35.040199]]}
// },
// {
// "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"ANC","dst_id":"3774","codeshare":"Y","stops":"0","equipment":"737"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-149.99600219726562,61.174400329589844]]}
//   },
// {
//   "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"AUS","dst_id":"3673","codeshare":"","stops":"0","equipment":"M83 738"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-97.6698989868164,30.194499969482422]]}
//   }
// ]

// }