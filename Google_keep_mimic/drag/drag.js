$(document).ready(function() {
  $('#card_pane').isotope({
    itemSelector: '.gravity'
  });
  var list = $('#card_pane');
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
      console.log('top:' + ui.originalPosition.top + '\n left:' +  ui.originalPosition.left);
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

  $('#gravity_btn').click(function() {
    $("#card_pane").sortable('disable');
    $("#card_pane").css({
      'top': '0px',
      'left': '0px',
      'width': 'initial',
      'height': 'initial'
    });
    runs = "start";
    $('#card_pane').jGravity({
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


  function abortNewton() {
    $("#card_pane").sortable('enable');
    $("#card_pane").css({
      'top': '50px',
      'left': '0px',
      'width': '350px',
      'height': '500px'
    });
    runs = "stop";
    $('#gravity_btn').show(300);
    $(".steady").animate({
      left: '360px'
    }, 300);
  }
});
