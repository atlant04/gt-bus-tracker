var mymap = L.map('mapid').setView([32.77, -84.39], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXRsYW50MDQiLCJhIjoiY2swc2c2NXNkMDJjNzNicGR6bjFnZHBqZiJ9.OBsA8h0eendA7wWQ6YyhoA'
}).addTo(mymap);

const options = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    }
}

fetch('/api', options)
.then(response => response.json())
.then(data => {
    Object.values(data.data.stops).forEach(stop => {
        const lat = stop.latitude
        const lon = stop.longitude
        var marker = L.marker([lat, lon]).addTo(mymap)
        marker.bindPopup(`<b>${stop.name}</b>`).openPopup();
    })
})

var lat = 33.77406
var lon = -84.39192

var marker = L.marker([lat, lon]).addTo(mymap)

setInterval(() => {
    marker.setLatLng([lat += 0.00002, lon += 0.00002])
    if(lat > 33.78) {
        marker.setLatLng([33.77406, -84.39192])
    }
}, 100)