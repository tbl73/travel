
$(document).ready(function (){

    function initialize() {
    	var myLatlng = new google.maps.LatLng(latitude, longitude)
    
      var mapOptions = {
      center: myLatlng,
      zoom: 13,
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);   

      var image = "<%= asset_path 'house.png' %>";
      var marker = new google.maps.Marker({
      	position: myLatlng,
      	map: map,
      	animation: google.maps.Animation.DROP
      });

      var contentString = '<h3>address</h3>';
 			  

 			 var infowindow = new google.maps.InfoWindow({
  			 content: contentString
 			});

 			 google.maps.event.addListener(marker, 'click', function() {
   	 infowindow.open(map,marker);
 			});
 
    }
   
    google.maps.event.addDomListener(window, 'load', initialize);
});

