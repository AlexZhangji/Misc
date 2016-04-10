var prev_html = document.querySelector('body').innerHTML.split('<div class="item_card card-2">')[0];
// var after_html = '';
var item_html = document.querySelector('body').innerHTML.split('<!-- item  -->')[1].split('<!-- end of item -->')[0];

// console.log(item_html);

// i know this looks kinda cheesy...
function initItem(num) {
  var item_list = '';
  for (var i = 0; i < num; i++) {
    item_list += item_html;
  }

  document.querySelector('body').innerHTML = prev_html + item_list;
}

// init num of items on a page
initItem(4);


var num_selected = 4;
// toggle the filter btn
$(function() {
  $('#category_list .caption_small').click(function() {
    console.log($(this));
    $(this).prev('.glyphicon').toggleClass('green');
    $(this).prev('.glyphicon').toggleClass('gray');

    if ($(this).prev('.glyphicon').hasClass('green')) {
      num_selected += 1;
    } else {
      num_selected -= 1;
    }

    $('#filter_cate_list').html('Searching in ' + num_selected + ' categories:');
  });
});
