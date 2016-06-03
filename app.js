//The Javascript portion of the About Me project
var favoriteNumber = 13;
var amountCorrect = 0;
function yesNo() {
  if (yesNo === "yes" || yesNo === "y") {
    alert("Nicely Done!");
    amountCorrect += 1;
  } else {
    alert("Sorry thats not correct, keep trying!");
  }
}
function quiz() {
  var userName = prompt ("Let's get to know you! \nWhats your name?");
  alert("Great! Thanks" + " " + userName + ".");
  
}
// function quiz() {
//     confirm("Please answer the following questions with simple Y/N answers.")
//
//     var questionOne = prompt ("Was I born in Washington?").toLowerCase();
//       //Is there a reason to define the wrong answers? Why would it matter if the user said No or hazaah? Both are wrong?
//       if (questionOne === "yes" || questionOne === "y"){
//         alert ("We're getting somewhere!");
//         amountCorrect += 1;
//         console.log(amountCorrect);
//       } else {
//         alert ("Poorly done.\nTry again.");
//       }
//     var questionTwo = prompt ("Did I attend an amazing coding accelerator?").toLowerCase();
//       if (questionTwo === "yes" || questionTwo === "y") {
//         alert ("We're getting somewhere!");
//         amountCorrect += 1;
//       } else {
//         alert ("Poorly done.\nTry again.");
//       }
//     var questionThree = prompt ("Was that coding accelerator the start of something new?").toLowerCase();
//       if (questionThree === "yes" || questionThree === "y") {
//         alert ("We're getting somewhere!");
//         amountCorrect += 1;
//       } else {
//         alert ("Poorly done.\nTry again.");
//       }
//     var questionFour = prompt ("Was that something new....Skynet?!").toLowerCase();
//       if (questionFour === "yes" || questionFour === "y") {
//         alert ("We're getting somewhere!");
//         amountCorrect += 1;
//       } else {
//         alert ("Poorly done.\nTry again.");
//       }
// //Start of the first real logical questions below
//         console.log(amountCorrect);
//         var counter = 3
//         var questionFive = parseInt(prompt ("What is my favorite number?"));
//           while (questionFive !== favoriteNumber && counter >= 0) {
//             console.log('running while loop');
//             if (questionFive >= favoriteNumber) {
//               console.log('inside while/if');
//               questionFive = parseInt(prompt ("Too high!"));
//               --counter;
//               console.log(counter);
//             }
//             else if (questionFive <= favoriteNumber){
//               console.log('inside while/elseif');
//               questionFive = parseInt(prompt ("Too low!"));
//               --counter;
//               console.log(counter);
//             }
//           }
//     // }
//   alert ("Nice!")
// }
