let marker, map;

function initMap() {  
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

 map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: posicion,
  });

 marker = new google.maps.Marker({
   position: posicion,
   map,
   title: "Mar del Plata",
 });
  
 const marker2 = new google.maps.Marker({
    position:  {
        lat: -37.2298,
        lng: -57.0030,
      },
    map,
    title: "Villa Gesell",
  });
 const marker3 = new google.maps.Marker({
    position:  {
        lat: -34.6102,
        lng: -58.3905,
      },
    map,
    title: "Villa Gesell",
  });
   
  geoPosiciona()
  
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = {timeout: 60000}
    const watchPos = geoLoc.watchPosition(centrarMapa, onError, options)
  } else {
    alert('Tu navegador no admite geolocalización')
  }
}

function centrarMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos);
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log(error);
}
