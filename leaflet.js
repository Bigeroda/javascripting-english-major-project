let firstMap;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);

let washingtonSquarePark, washingtonSquareParkMarker, bobstLibrary, bobstLibraryMarker;
washingtonSquarePark = L.latLng(40.730833, -73.997222);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bingPopup("This is Washington Square Park.").addTo(firstMap);
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibrary = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#EF4824",
                                         fillColor: "#EF4824
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
                  ).addTo(firstMap);
circle = L.circle(bobstLibrary,         {radius: 100,
                                         color: "#EF4824",
                                         fillColor: "#EF4824"
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
                  ).addTo(firstMap);
