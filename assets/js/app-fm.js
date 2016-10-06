var doPanzoom = function(){
  // http://timmywil.github.io/jquery.panzoom/
  // Several options at once
  $("#panzoom-remove").tap(function(){
    $(".panzoom").panzoom("reset");
    $(".panzoom").panzoom("disable");
    $(this).addClass("active");
    $("#panzoom-start").removeClass("active");
    });
    $("#panzoom-start").tap(function(){
    $(".panzoom").panzoom();
    $(".panzoom").panzoom("enable");
    $(this).addClass("active");
    $("#panzoom-remove").removeClass("active");

    $(".panzoom").panzoom("option", {
      increment: 0.4,
      minScale: 0.2,
      maxScale: 1,
      duration: 500,
    });
  });
};

// push bind , http://rc.kimsq.com/controls/push/#push-bind
window.addEventListener('push', doPanzoom);
doPanzoom();


// Initialize drawer
RC_initDrawer();

$('#popup-time').on('show.rc.popup',function(){
  $(this).load('./template/popup-time.html',function(){

    $('#popup-time .table td').on('tap',function(){
      var name = $(this).data('label');
      $('#time').val(name);

      $(this).popup('hide');

    });
  })
});

$('#popup-humidity').on('show.rc.popup',function(){
  $(this).load('./template/popup-humidity.html',function(){
    $('#popup-humidity .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#humidity').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-ore').on('show.rc.popup',function(){
  $(this).load('./template/popup-ore.html',function(){
    $('#popup-ore .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#ore').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-factory').on('show.rc.popup',function(){
  $(this).load('./template/popup-factory.html',function(){
    $('#popup-factory .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#factory').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-factory-1').on('show.rc.popup',function(){
  $(this).load('./template/popup-factory-1.html',function(){
    $('#popup-factory-1 .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#factory-1').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-category').on('show.rc.popup',function(){
  $(this).load('./template/popup-category.html',function(){
    $('#popup-category .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#category').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-usage').on('show.rc.popup',function(){
  $(this).load('./template/popup-usage.html',function(){
    $('#popup-usage .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#usage').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-part-1').on('show.rc.popup',function(){
  $(this).load('./template/popup-part-1.html',function(){
    $('#popup-part-1 .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#part-1').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-part-2').on('show.rc.popup',function(){
  $(this).load('./template/popup-part-2.html',function(){
    $('#popup-part-2 .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#part-2').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-part-3').on('show.rc.popup',function(){
  $(this).load('./template/popup-part-3.html',function(){
    $('#popup-part-3 .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#part-3').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-kind').on('show.rc.popup',function(){
  $(this).load('./template/popup-kind.html',function(){
    $('#popup-kind .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#kind').val(value);
      $(this).popup('hide');
    });
  })
});

$('#popup-pile').on('show.rc.popup',function(){
  $(this).load('./template/popup-pile.html',function(){
    $('#popup-pile .table td').on('tap',function(){
      var value = $(this).data('label');
      $('#pile').val(value);
      $(this).popup('hide');
    });
  })
});
