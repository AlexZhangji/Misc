
// e.which = 37 //left
// e.which = 38: // up
// e.which = 39: // right
// e.which = 40: // down


$(document).ready(function() {

  // up down up down left right lef right B A B A
  var easterEgg = 'wsadwsadbaba';
  var eggLength = easterEgg.length;
  var keyHistory = '';
  var match;
  $(document).keypress(function(e) {
    keyHistory += String.fromCharCode(e.which);
    console.log(String.fromCharCode(e.which));

    match = keyHistory.match(easterEgg);
    if (match) {
      alert('Cheat mode on!');
      keyHistory = match = '';
    } else if (keyHistory.length > 30) {
      keyHistory = keyHistory.substr((keyHistory.length - eggLength - 1));
    }
  });
});

console.log('key-press.js has been loaded');
