curl -X POST --include 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies' \
  -H 'X-Mashape-Key: AKIVvpSNx1mshOsQ6B7dLHoJgQJ3p1MuAo4jsn2dSCDlm6Mjv4' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'

  document.addEventListener('click',)


var quote = '';
var author = '';

document.addEventListener('click',requestQuote);

//var xhr = new XMLHttpRequest()
//xhr.open("GET", "https://www.codeacademy.com/", false)
//xhr.send()

function requestQuote() {

	var xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var json = JSON.parse(xhr.responseText);
			quote = json["quote"];
			author = json["author"];
			document.getElementById("quote").innerHTML = '"' + quote + '"';
			document.getElementById("quote").innerHTML = author;
    }
	}

	xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies", true)

	xhr.setRequestHeader("X-Mashape-Key", "D50aO827kvmsh33DHgK3KLy0gOaOp15DkpKjsn7FAZdKRdSOxL")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	xhr.setRequestHeader("Accept", "application/json")

	xhr.send()
