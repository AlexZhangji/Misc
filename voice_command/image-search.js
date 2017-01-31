$(document).ready(function() {

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
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
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
        return img_url;
      })
      .fail(function() {
        // alert("error");
        return 'failed';
      });
  }

  console.log('image search js is loaded');

});
