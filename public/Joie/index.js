var searchUrl = 'https://pixabay.com/api/?key=9094037-3aee986e30bb181b5b8023f08&q=seattle&image_type=photo';

document.getElementById("clickMe").addEventListener("click", function() {
  $.getJSON(searchUrl, function(result){
    if (!result) {
      console.log("There are no results.");
      return false;
    } else {
      console.log(result);
    }
  });
});
