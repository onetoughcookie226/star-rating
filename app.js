// var buildStars = function(i) {
//   // Full star  => x
//   // Half star  => i
//   // Empty star => o
//   return "xxxxi";
// }

//On click submitButton console.log "Hello!"

var submitObject = document.getElementById("submitButton");
  submitObject.onclick = function (e) {
    e.preventDefault();

  var input = getValue();
  console.log(buildStarsFor(input));
  // console.log(buildStarsIf(input));
}

function buildStarsFor (input) {
 
  input = (Math.round(input * 2) / 2).toFixed(1);
  var stars = "";
  for (var i = 1; i <= 5; i ++) {
    if (i <= input) {
      stars += "X";
    } else if (i - 0.5 === parseFloat(input)) {
      stars += "i";
    }
    else {
      stars += "O";
    }
  }
  return stars;
}

// Get the input value and console.log it instead of Hello!
function getValue () {
    var valueObject = document.getElementById("numberInput");
    return valueObject.value;
}


//
// function buildstars (input) {
//   var star = "";
//   for (var i = 0; i <= 5 ; i += 1 ){
//     star += i + "x";
//   }
//   return star;
// }
//
// console.log(buildstars(5));

//
// function buildStarsIf (input) {
//     input = parseInt(input);
//     validateInput(input);
//     var stars = "";
//     if ( input === 1) {
//       stars = "Xoooo";
//     } else if ( input === 2) {
//       stars = "xxooo";
//     } else if ( input === 3) {
//       stars = "xxxoo";
//     } else if (input === 4) {
//       stars = "xxxxo";
//     } else {
//       stars = "xxxxx";
//     }
//     return stars;
// }




// function testStars (fn, input, expected_output) {
//   if (fn(input) === expected_output) {
//     console.log("Test passed for input " + input);
//   } else {
//     console.log("Test failed for input " + input + ", expected " + expected_output + ", got " + fn(input));
//   }
// }
//
// testStars(buildStarsFor, 5, "XXXXX");
//
// testStars(buildStarsFor, 3.5, "XXXiO");
//
// testStars(buildStarsFor, 2.5, "XXiOO");
//
// testStars(buildStarsFor, 2.24, "XXOOO");
//
// testStars(buildStarsFor, 2.25, "XXiOO");
//
// testStars(buildStarsFor, 2.26, "XXiOO");
//
// testStars(buildStarsFor, 1, "XOOOO");
//
// testStars(buildStarsFor, 2.76, "XXXOO");
//
// testStars(buildStarsFor, 2.74666, "XXiOO");
//
// testStars(buildStarsFor, 0.5, "iOOOO");
//
// testStars(buildStarsFor, 6, "0OOOO");
// testStars(buildStarsFor, 4.74, "XXXXX");


//Check the validity of the user input only numbers from 1 to 5

// What if input is not a number?
// What if input is > 5
// What if input it < 0


// function sanitizeInput(input) {
//   input = parseFloat(input);
//   if (isNaN(input)) {
//     input =  0;
//   } else if ( input > 5) {
//     input = 5;
//   } else if ( input < 0 ) {
//     input = 0
//   }
//   return input;
// }
