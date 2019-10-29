// business logic
var vowels = ["a", "e", "i", "o", "u"]





// user interface


$(document).ready(function() {
  $("form#userform").submit(function(event) {
    event.preventDefault();
    var input = $("input#userinput").val();
    var inputArray = input.split(" ");
    var transformedArray = [];
    console.log(inputArray);


    // inputArray.forEach(function(word) {
    //   if (vowels.includes(word.charAt(0))) {
    //     transformedArray.push(word + "way")
    //   } else
    // });
    // for (var i = 0; i < input.length(); i++) {
    //
    // }
    // input.indexOf()
  });
});
