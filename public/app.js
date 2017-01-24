var initialize = function(){
  var center = {lat: 51.507351, lng: -0.127758 };
  var mapDiv = document.querySelector('#main-map');

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);

  var heathrow = {lat: 51.470022, lng: 0.454295};
  mainMap.addMarker(heathrow, 'Looky here'); 
  mainMap.addClickEvent();

  var button = document.getElementById('Chicago');
  button.onclick = function() {
    var centerCoords = {lat: 41.878114, lng: -87.629798};
    mainMap.centerClick(centerCoords);
  }

  var button2 = document.getElementById('Location');
  button2.onclick = function() {

  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  mainMap.googleMap.setCenter(pos);
  })

  }

 var button3 = document.getElementById('good');
 button3.onclick = function() {
   var centerCoords = {lat: -9.3592366, lng: 150.1008688};
   mainMap.centerClick(centerCoords);
 }

}




window.onload = initialize;

