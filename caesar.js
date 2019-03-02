function encodecaesar(b)
{
  var plain_text = document.getElementById("message").value;
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
