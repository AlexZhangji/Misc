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
    }
  });


  function abortNewton() {
    $("#inner").sortable('enable');
    $("#inner").css({
      'top': '100px',
      'left': '0px',
      'width': '550px',
      'height': '500px'
    });
    runs = "stop";
    $('#bar').show(300);
    $(".steady").animate({
      left: '360px'
    }, 300);
  }
});
