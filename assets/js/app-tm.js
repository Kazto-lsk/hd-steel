// script


RC_initDrawer();

$('#map-close').tap(function() {
  $('#map').drawer('hide')
});

$('#map').on('show.rc.drawer', function () {
  $('.snap-content').css("width","calc(100% - 640px)");
})
$('#map').on('hide.rc.drawer', function () {
  $('.snap-content').css("width","100%");
})


// 임시 구글맵

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 36.9861, lng: 126.7218},
      zoom: 8
  });
}
