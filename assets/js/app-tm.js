// script


RC_initDrawer();

$('#map-close').tap(function() {
  $('#map').drawer('hide')
});

$('#map').on('show.rc.drawer', function () {
  $('.snap-content').css("width","calc(100% - 28rem)");
})
$('#map').on('hide.rc.drawer', function () {
  $('.snap-content').css("width","100%");
})


// 임시 구글맵

function initMap() {
  var mapDiv = document.getElementById('map-view');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 36.9861, lng: 126.7218},
      zoom: 10
  });
}

$('#popup-group-01').on('show.rc.popup',function(){
  $(this).load('./template/popup-group-01.html',function(){
    $('#popup-group-01 .table tr').on('tap',function(){
      var value = $(this).data('label');
      $('#group-01').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-group-02').on('show.rc.popup',function(){
  $(this).load('./template/popup-group-02.html',function(){
    $('#popup-group-02 .table tr').on('tap',function(){
      var value = $(this).data('label');
      $('#group-02').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-group-03').on('show.rc.popup',function(){
  $(this).load('./template/popup-group-03.html',function(){
    $('#popup-group-03 .table tr').on('tap',function(){
      var value = $(this).data('label');
      $('#group-03').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-group-04').on('show.rc.popup',function(){
  $(this).load('./template/popup-group-04.html',function(){
    $('#popup-group-04 .table tr').on('tap',function(){
      var value = $(this).data('label');
      $('#group-04').val(value);
      $(this).popup('hide');
    });
  })
});
