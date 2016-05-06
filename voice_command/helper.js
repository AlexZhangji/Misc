$(document).ready(function() {

  $('#btn4').click(function() {
    delete_card('first');
  });

  $('#btn1').click(function() {
    // add_Cards();
    var input = $('#search_img').val();
    // var input = './img/disk.jpg';
    search_img(input, 'img');

    // reload page
    // $('#inner').isotope('reloadItems').isotope({
    //   sortBy: 'original-order'
    // });
  });

  // disk appear
  $('#btn2').click(function() {
    // album_appear();
    play_music();
  });


  $('#btn3').click(function() {
    var input = $('#search_img').val();
    play_song(input);
    // play_music();
  });



  // restore
  $('#btn5').click(function() {
    restore();
  });
});

// once music finished playing
// make ablum image back
$("#audio_tag").bind('ended', function() {
  // done playing
  console.log("audio finished");

  // stop spining
  $('#wild_img').removeClass('rotate_15');

  // send back
  $('#wild_img').animate({
    // bottom: '00px'
    top: '-400px',
    right: '-400px',
  }, 2000);
  $('#wild_img').addClass('rotate_15');
});


function search_img(term, type) {
  var params = {
    // Request parameters
    "q": term,
    "count": "10",
    "offset": "0",
    "mkt": "en-us",
    "safeSearch": "Moderate",
  };

  $.ajax({
      url: "https://bingapis.azure-api.net/api/v5/images/search?" + $.param(params),
      beforeSend: function(xhrObj) {
        // Request headers
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "4abb72b2eea943fa8de128c9ee46d07d");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      // alert("success");
      console.log(data);
      // get a random img
      var num = Math.floor(Math.random() * 10);

      var img_url = data.value[num].contentUrl;
      // $('#img_api').attr("src", img_url);
      console.log('img_url:' + img_url);
      // return img_url;
      // how to return value?
      // this way is really hacky and ugly... :/
      if (type === 'img') {
        add_Cards(img_url, 'img');
      } else if (type === 'album') {
        $('#wild_img').css('background-image', 'url(' + img_url + ')');
      }

      //speak if not for search album image
      if (type !== 'album') {
        responsiveVoice.speak(term + ' image', "UK English Female", {
          pitch: 1,
          rate: 1
        });
      }
    })
    .fail(function() {
      // alert("error");
      console.log('error');
      return 'failed';
    });
}


// muisc_helper
function play_music() {
  var music_player = document.getElementById('audio_tag');
  // var disk_img = document.getElementById('wild_img');
  if (music_player) {
    if (music_player.paused) {
      responsiveVoice.speak('Playing', "UK English Female", {
        pitch: 1,
        rate: 1
      });
      music_player.play();
      $('#wild_img').addClass('rotate_15');
    } else {
      music_player.pause();
      responsiveVoice.speak('Paused', "UK English Female", {
        pitch: 1,
        rate: 1
      });
      $('#wild_img').removeClass('rotate_15');
    }
  }
  // toogle the rotation
}




// voice helper
function fall() {
  console.log('fall');
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
}

// parameter is just to prolong the time
function mirror(useless) {
  img = 'http://www.nihaopay.com/img/team/zune1.jpg';
  var img_card = '<div class="gravity card_pane" style="left:100px;top:2000px;"> <img src="img_url" /> </div>';
  img_card = img_card.replace('img_url', img);
  $('#inner').append(img_card);
  console.log('added');

  $('#inner').isotope('reloadItems').isotope({
    sortBy: 'original-order'
  });
}

function nono() {
  alert('Ministry of Magic Warning. \nMinistry of Magic has logged a record of this behavior along with the magic wand of the participants due to potential violations of Wizard law.');
  responsiveVoice.speak('NO, no, This is very bad.',"UK English Male", {
    pitch: .8,
    rate: 1
  });

}

function restore() {
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
}

function album_appear() {
  $('#wild_img').animate({
    // bottom: '00px'
    top: '50px',
    right: '20px',
  }, 1000);
  console.log('album appear');
}

// use itunes API to find song info.
// name/url/thumbnail
function play_song(song_name) {
  console.log('play song');

  var search_term = song_name.replace(/\s/g, '+');
  // search_script.src = 'https://itunes.apple.com/search?term=' + search_term + '&callback=getSongs';

  $.getJSON(
    'https://itunes.apple.com/search?term=' + search_term + '&callback=?',
    function(data) {
      console.log(data)
        // get info
      var music_url = data.results[0].previewUrl;
      var music_img = data.results[0].artworkUrl100;
      var artist_name = data.results[0].artistName;
      // update music url and img
      // $('#wild_img').css('background-image', 'url(' + music_img + ')');
      var music_search_term = search_term + ' ' + artist_name + ' album';
      search_img(music_search_term, 'album');
      album_appear();
      $("#audio_tag").attr("src", music_url).trigger("play");



    });


  // album_appear();
}


function show_images(ss) {

  console.log(ss);
  if (ss.indexOf('cat') !== -1) {
    $('#cat_img').animate({
      bottom: '-30px'
    });

    // send cat back
    setTimeout(function() {
      $('#cat_img').animate({
        bottom: '-500px'
      });
    }, 4500);

    console.log('voice:' + ss);
    console.log('cat appear!');
  } else {
    console.log('voice_2:' + ss);
    // alert('show me ' + ss);
    search_img(ss, 'img');
  }
}

function delete_card(command) {
  var card_list = $('.card_pane');
  // console.log(card_list.length);
  var num_card = card_list.length;

  if (num_card > 0) {
    if (command === 'card' || command === 'last') {
      // console.log('delete');
      $($('.card_pane')[num_card - 1]).fadeOut(700);
      setTimeout(function() {
        $('.card_pane')[num_card - 1].remove();
      }, 705);

      // $('.card_pane')[num_card - 1];
    } else if (command === 'first') {
      console.log('delete first');
      $($('.card_pane')[0]).fadeOut(700);
      setTimeout(function() {
        $('.card_pane')[0].remove();
      }, 705);
    } else if (command === 'all') {
      console.log('delete all');
      $('.card_pane').fadeOut(700);
      setTimeout(function() {
        $('.card_pane').remove();
      }, 705);
    }
    setTimeout(function() {
      resort();
    }, 710);
  }
  // if no card on page
  else {
    alert('No card to delete');
  }

}


// sort the list
function resort() {
  $('#inner').isotope('reloadItems').isotope({
    sortBy: 'original-order'
  });
}

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
  $('#inner').isotope('reloadItems').isotope({
    sortBy: 'original-order'
  });

}
