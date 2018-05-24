$('#srchButton').click(function() {
  var s1 = $( "input[name='search1']").val().toLowerCase();
  var s2 = $( "input[name='search2']").val().toLowerCase();
  var searchUrl = 'https://pixabay.com/api/?key=9093855-07854ae771d82d6fe28481ea8&q=' + s1 + '+' + s2 + '&image_type=photo';
  $.ajax({
    url : searchUrl,
    success : function(data) {
       console.log(data);
       data.hits.map(function(v){
         var html = '<img src="' + v.webformatURL + '" alt="">';
         $("#stuff").append(html);
       });
    },
    error : function(err) {
        console.log(err)
    }
  });
})
