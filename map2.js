var map_options = {
  center: new google.maps.LatLng(33.138254,-96.708395),
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
map_canvas = document.getElementById('map2');
var map = new google.maps.Map(map_canvas, map_options);
