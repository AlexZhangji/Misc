$(document).ready(function() {
  $('#inner').isotope({
    itemSelector: '.gravity'
  });
  var list = $('#inner');
  list.sortable({
    cursor: 'move',
    start: function(event, ui) {
      ui.item.addClass('grabbing moving').removeClass('gravity');
      ui.placeholder
        .addClass('starting')
        .removeClass('moving')
        .css({
          top: ui.originalPosition.top,
          left: ui.originalPosition.left
        });
      list.isotope('reloadItems');
    },
    change: function(event, ui) {
      ui.placeholder.removeClass('starting');
      list
        .isotope('reloadItems')
        .isotope({
          sortBy: 'original-order',
          transformsEnabled: false
        });
    },
    beforeStop: function(event, ui) {
      ui.placeholder.after(ui.item);
    },
    stop: function(event, ui) {
      ui.item.removeClass('grabbing').addClass('gravity');
      list
        .isotope('reloadItems')
        .isotope({
          sortBy: 'original-order',
          transformsEnabled: false
        });

      $('#inner').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });

    }
  });
  $('#bar').click(function() {
    $("#inner").sortable('disable');
    $("#inner").css({
      'top': '0px',
      'left': '0px',
      'width': 'initial',
      'height': 'initial'
    });
    runs = "start";
    $('#inner').jGravity({
      target: 'div.gravity',
      ignoreClass: 'div.steady',
      weight: 10,
      depth: 5,
      drag: true
    });
    $(this).hide(300);
    $(".steady").animate({
      left: '0px'
    }, 300);
  });


  // $('#btn1').click(function() {
  //   add_Cards();
  //
  //   $('#inner').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
  // });



  function abortNewton() {
    $("#inner").sortable('enable');
    $("#inner").css({
      'top': '50px',
      'left': '100px',
      'width': '750px',
      'height': '500px'
    });
    runs = "stop";
    $('#bar').show(300);
    $(".steady").animate({
      left: '880px'
    }, 300);
  }
});
