function encoderot13()
{
  //declaring our variables
  var plain_text = document.getElementById("input_area").value; //input string
  var cypher_text = []; //output string
  var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


  //for loop that replaces each letter with one 13 letters after it
  for(var idx=0; idx<plain_text.length; idx++)
  {
    input = alphabet.indexOf(plain_text[idx]);
    if(input == -1)
    {
      cypher_text.push(plain_text[idx]);
    }
    else
    {
      var coded = (input+13)%26; //adding 13 to the value
      var letter = alphabet[coded];
      cypher_text.push(letter); //pushing the substitute to the output string
    }
  }
  document.getElementById("output").innerHTML = cypher_text.join(""); //outputing to html element
}

function encodecaesar(b)
{
  //declaring our variables
  var plain_text = document.getElementById("input_area").value; //input string
  var length = plain_text.length;
  var cypher_text = '';


	if (b)
		length = (-length) + 26;

	for (var i = 0; i < plain_text.length; i ++) {

		var l = plain_text[i];

		if (l.match(/[a-z]/i)) {

			var value = plain_text.charCodeAt(i);

			if ((value >= 65) && (value <= 90))
				l = plain_texting.fromCharCode(((value - 65 + length) % 26) + 65);

			else if ((value >= 97) && (value <= 122))
				l = String.fromCharCode(((value - 97 + length) % 26) + 97);
		}
		cypher_text += l;
	}
  document.getElementById("output").innerHTML = cypher_text; //outputing to html element

}

function encodemorse(b)
{
  var alphabet = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
  //two arrays with values in corresponding positions
  var morse = [ "\xa0\xa0\xa0\xa0", "._", "_...", "_._.", "_..", ".", ".._.", "__.", "....", "..", ".___", "_._", "._..", "__", "_.", "___", ".__.", "__._", "._.", "...", "_", ".._", "..._", ".__", "_.._", "_.__", "__..", ".____", "..___", "...__", "...._", ".....", "_....", "__...", "___..", "____.", "_____" ];

  //declaring our variables
  var plain_text = document.getElementById("input_area").value.toLowerCase(); //input string lowercased immediately
  var cypher_text = '';

  //if statement to check if we decode or encode
  if (!b)
  {
  var words = plain_text.split(" "); //splitting input into words

  for (var j=0; j < words.length; j ++)
  {
    var word = words[j]; //selecting one word from the words

    for (var i = 0; i < word.length; i ++) {

      var l = alphabet.indexOf(word[i]); //finding what index in the alphabet array our letter corresponds to

        cypher_text += morse[l] + " "; //using the index we got above to choose the morsecode for that letter and adding it to our output string
      }
      cypher_text += "/"; // adding / to seperate words
    }
  }
  else
  {
    var words = plain_text.split("/"); //splitting input into words

    for (var j=0; j < words.length; j++)
    {
      var word = words[j]; //selecting one word from the word

      var letters = word.split(" "); //splitting again into letters of morsecode

      for (var i = 0; i < letters.length-1; i++) {

        var letter = letters[i]; //selecting one letter

          var l = morse.indexOf(letter);   //finding what index in the morsecode array our letter corresponds to
          cypher_text += alphabet[l]; //adding the letter equivalent to our output string

    }
         cypher_text += " ";

        }
      }

document.getElementById("output").innerHTML = cypher_text; //outputing to html element
}

function encodepig(b) {

  var plain_text = document.getElementById("input_area").value.toLowerCase(); //input string lowercased immediately
  var cypher_text = '';
  var vowels = /[aeiou]/gi;

  if (plain_text[0].match(vowels)){ //if word starts with a vowel we just add way

    cypher_text = plain_text + "way";
  }
  else {
    var firstvowel = plain_text.indexOf(plain_text.match(vowels)[0]);

    cypher_text = plain_text.substr(firstvowel) + plain_text.substr(0, firstvowel) + 'ay'; //otherwise we take all constanants before the first vowel, add them to the end of our word followed by "ay"
  }
  document.getElementById("output").innerHTML = cypher_text; //outputing to html element
}





function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.border = "6px solid #003E47";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.border = "0px solid #003E47";
}
