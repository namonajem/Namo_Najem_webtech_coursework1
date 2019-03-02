function encoderot13()
{
  var plain_text = document.getElementById("input_area").value;
  var cypher_text = [];
  var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  for(var idx=0; idx<plain_text.length; idx++)
  {
    input = alphabet.indexOf(plain_text[idx]);
    if(input == -1)
    {
      cypher_text.push(plain_text[idx]);
    }
    else
    {
      var coded = (input+13)%26;
      var letter = alphabet[coded];
      cypher_text.push(letter);
    }
  }
  document.getElementById("output").innerHTML = cypher_text.join("");
}

function encodecaesar(b)
{
  var plain_text = document.getElementById("input_area").value;
  var length = plain_text.length;
  var cypher_text = '';


	if (b)
		length = (-length) + 26;

	for (var i = 0; i < plain_text.length; i ++) {

		var l = plain_text[i];

		if (l.match(/[a-z]/i)) {

			var value = plain_text.charCodeAt(i);

			if ((value >= 65) && (value <= 90))
				l = String.fromCharCode(((value - 65 + length) % 26) + 65);

			else if ((value >= 97) && (value <= 122))
				l = String.fromCharCode(((value - 97 + length) % 26) + 97);
		}
		cypher_text += l;
	}
  document.getElementById("output").innerHTML = cypher_text;

}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.border = "6px solid #003E47";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.border = "0px solid #003E47";
}
