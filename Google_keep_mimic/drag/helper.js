$(document).ready(function() {

  $('#btn1').click(function() {
    add_Cards();
    var input = $('#search_img').val();
    // var input = './img/disk.jpg';
    search_img(input);

    // reload page
    $('#inner').isotope('reloadItems').isotope({
      sortBy: 'original-order'
    });
  });
  
  // disk appear
  $('#btn2').click(function() {
    $('#wild_img').animate({
      // bottom: '00px'
      top: '50px',
      right: '100px',
    }, 1000);
  });

  // restore
  $('#btn5').click(function() {
    restore();
  });


  function search_img(term) {
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
        var img_url = data.value[0].contentUrl;
        // $('#img_api').attr("src", img_url);
        console.log('img_url:' + img_url);
        // return img_url;
        add_Cards(img_url, 'img');

      })
      .fail(function() {
        // alert("error");
        console.log('error');
        return 'failed';
      });
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
});

function nono() {
  alert('Nono, bad! bad !');
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


function showImages(ss) {
  // alert(ss)
  console.log(ss);

  if (ss.indexOf('cat') != 0) {
    $('#wild_img').animate({
      bottom: '-20px'
    });
  } else {
    alert('show me ' + ss);
  }
}

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
