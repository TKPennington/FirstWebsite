function initMap() {
  // The location of Uluru
  var location = {lat: 33.138254, lng: -96.708395};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: location});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
  	position: location, 
  	map: map});
}


//api Key: AIzaSyDGlVtQLh1pZg2GXMey_Edffn9e0t5VQ0g