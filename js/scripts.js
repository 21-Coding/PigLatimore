// business logic
var vowels = ["a", "e", "i", "o", "u"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]




// user interface


$(document).ready(function() {
  $("form#userform").submit(function(event) {
    event.preventDefault();
    var input = $("input#userinput").val();
    var inputArray = input.split(" ");
    var transformedArray = [];

    inputArray.forEach(function(word) {
      if (vowels.includes(word.charAt(0))) {
        transformedArray.push(word + "way")
      } else if (consonants.includes(word.charAt(0))) {
        transformedArray.push(word.slice(1) + word.charAt(0) + "ay")
      } else {
      alert("nope")
      }
    });
    console.log(transformedArray);






    // for (var i = 0; i < input.length(); i++) {
    //
    // }



  });
});
