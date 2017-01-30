// Load the first quote to be seen
$(document).ready(function(){
  getQuote();
});

// Set color variables to be used when clicking refresh
var bodyBackground = ["bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"];
var btn = ["btn bg-primary", "btn bg-success", "btn bg-info", "btn bg-warning", "btn bg-danger"];
var blockQuote = ["blockquote-reverse text-primary", "blockquote-reverse text-success", "blockquote-reverse text-info", "blockquote-reverse text-warning", "blockquote-reverse text-danger"];
var twitterLink = ["twitter-share-button text-primary", "twitter-share-button text-success", "twitter-share-button text-info", "twitter-share-button text-warning", "twitter-share-button text-danger"];
var refresh = 0;

// Pull a quote from mashape API, update the twitter text, and change the color of the page
function getQuote() {
  var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) {
    // Update the quote text and author on the page
     	document.getElementById("quote").innerHTML = data.quote;
      document.getElementById("author").innerHTML = data.author;
    // Update the text to send to the twitter quote
      var currentQuote = data.quote;
      var currentAuthor = data.author;
      var strLink = "https://twitter.com/intent/tweet?text=" + '"' + currentQuote +'" '+ currentAuthor;
      document.getElementById("twitterLink").setAttribute("href", strLink);
    // Change the colors of elements
      document.getElementById("body").className = bodyBackground[refresh];
      document.getElementById("btn").className = btn[refresh];
      document.getElementById("blockquote").className = blockQuote[refresh];
      document.getElementById("twitterLink").className = twitterLink[refresh];
    // Update the color to use on next click
      if (refresh < btn.length - 1) {
        refresh++;
      } else {
        refresh = 0;
      }
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "op03oMcDkgmshm2pMxB4vxfM4Thup1hx1yRjsnMsQdJdtmPqKN");
    }
  });
};
