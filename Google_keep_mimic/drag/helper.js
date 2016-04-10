$(document).ready(function() {

  $('#btn1').click(function() {
    add_Cards();
    // var input = $('#img_card_input').val();
    var input = './img/disk.jpg';
    // console.log('input url:' + input);
    add_Cards(input, 'img');

    $('#inner').isotope('reloadItems').isotope({
      sortBy: 'original-order'
    });
  });

  // disk appear
  $('#btn2').click(function() {
    $('#wild_img').animate({
      // bottom: '00px'
      top: '100px',
      right: '100px',
    });
  });

  // restore
  $('#btn5').click(function() {
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

    $('#inner').isotope({
      filter: '.gravity'
    });

  });

});

function add_Cards(input, type) {
  if (type === 'img') {
    var img_card = '<div class="gravity card_pane" style="left:100px;top:2000px;"> <img src="img_url" /> </div>';
    img_card = img_card.replace('img_url', input);
    $('#inner').append(img_card);
    console.log('added');
  } else if (type === 'song') {

  }
  // sort after add
  // $('#inner').isotope('reLayout');
}
