$(document).ready(function(){
  // console.log("here's your mock data to start with:")
  // console.log(GLOBAL_MOCK_DATA_OBJECT)

  // can you render the mock data to the page?
  var api_endpoint = "http://api.giphy.com/v1/gifs/search?q=";
  var api_key = "dc6zaTOxFJmzC";
  window.datastuff = '';

  $('#button').on('click', function(event){

    $('.image-container').remove();
    // $().remove

    var word = $('li:first-child').find('#searchForm').val();
    // console.log(word);
    $.getJSON(api_endpoint + word + '&api_key=' + api_key,
    {
      format: "json"
    },
    function(data){
      datastuff = data
      data_array = data["data"];
      // console.log(data_array);
        $.each(data_array, function(index, blob){
          // console.log(blob)
          var img = blob['images']['fixed_width']['url'];
          console.log(img);
          $('#sanity-check').append("<img class='image-container' src='" + img + "'>");
          // if ( img >= 25 ) return false;
        });
    });
  });

});
