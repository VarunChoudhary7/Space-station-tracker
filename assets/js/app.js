var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



var myIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/6841/space-ship.svg',
    iconSize: [38, 32]
});
var path = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/331860/dot.svg',
    iconSize: [20, 20]
});

let marker = L.marker([51.5, -0.09], { icon: myIcon }).addTo(map)

const fetchSpaceStationDetails = async () => {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await res.json()
    const { latitude, longitude } = data
    console.log(latitude, longitude)

    marker.setLatLng([latitude, longitude])
    L.marker([latitude, longitude], { icon: path }).addTo(map)

}

setInterval(fetchSpaceStationDetails, 1000)