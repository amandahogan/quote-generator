$(document).ready(function() {
document.getElementById("button").addEventListener('click', getNewQuote);
document.getElementById("twitter").addEventListener('click', tweetQuote);

var quote;
var author;

	function getNewQuote(){
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text('"' + quote + '"');
				if (author) {
					$('#author').text('- ' + author);
				} else {
					$('#author').text('- unknown');
				}
			}
		});
	}
	getNewQuote();

	function tweetQuote() {
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
	};
});
