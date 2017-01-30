// Load the first quote to be seen
$(document).ready(function(){
  getQuote();

});

// Pull a quote from mashape API
function getQuote() {
  var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) {
      var currentQuote = data.quote;
      var currentAuthor = data.author;
     	document.getElementById("quote").innerHTML = data.quote;
      document.getElementById("author").innerHTML = data.author;
      var strLink = "https://twitter.com/intent/tweet?text=" + '"' + currentQuote +'" '+ currentAuthor;
      document.getElementById("twitterLink").setAttribute("href", strLink);
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "op03oMcDkgmshm2pMxB4vxfM4Thup1hx1yRjsnMsQdJdtmPqKN");
    }
  });
}
