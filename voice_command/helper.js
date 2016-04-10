function add_Cards(input, type) {
  if (type === 'img') {
    var img_card = '<div class="card gravity img_card"> <img src="img_url" /> </div>';
    img_card = img_card.replace('img_url', input);
    $('#inner').append(img_card);

  } else if (type === 'song') {

  }

  // sort after add
  // $('#inner').isotope('reLayout');

}

$(document).ready(function() {
  console.log('ready');
  $('#add_img_card').click(function() {
    var input = $('#img_card_input').val();
    console.log('input url:' + input);
    add_Cards(input, 'img');
  });
});

// show all the test buttons
function appear() {

}
