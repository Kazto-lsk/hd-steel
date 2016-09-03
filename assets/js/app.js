// script
RC_initDrawer();

// bar-header-secondary 상세검색
$('#moreSearch').on('show.rc.collapse', function () {
  $('#header-secondary').addClass("hd-expanded")
})
$('#moreSearch').on('hidden.rc.collapse', function () {
  $('#header-secondary').removeClass("hd-expanded")
})
