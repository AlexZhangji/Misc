$(document).ready(function() {
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
  console.log('restored');

  $("#inner").sortable('enable');
  $("#inner").css({
    'top': '50px',
    'left': '0px',
    'width': '550px',
    'height': '500px'
  });
  runs = "stop";
  $('#bar').show(300);
  $(".steady").animate({
    left: '360px'
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
