//The Javascript portion of the About Me project
var favoriteNumber = 13;
var amountCorrect = 0;
var states = ["washington", "idaho", "montana", "hawaii", "oregon"];
function yesNo(x) {
  if (x === "yes" || x === "y") {
    alert("Hoorah for Let's keep going.");
    amountCorrect += 1;
  } else {
    alert("Sorry thats not correct, keep trying!");
  }
}
function multiChoice (){
  //dont i need to define a parameter inside of multiChoice???
  if (multiChoice === states.indexOf("")){
    alert("Oh my god am i getting somewhere?");
    amountCorrect += 1;
  } else {
    alert("of course not");
  }
}

function quiz() {
  var userName = prompt ("Let's get to know you! \nWhats your name?").toLowerCase();
  alert("Great! Thanks");
  var questionOne = prompt ("Alright let's start with an easy question.\nWas I born in Washington?").toLowerCase();
  yesNo(questionOne);
  console.log(amountCorrect);
  console.log(questionOne);
  console.log(userName);
  var questionTwo = prompt ("Did I attend an amazing coding accelerator?").toLowerCase();
  yesNo(questionTwo);
  console.log(amountCorrect);
  var questionThree = prompt ("Was that coding accelerator the start of something new?").toLowerCase();
  yesNo(questionThree);
  console.log(amountCorrect);
  var questionFour = prompt ("Was that something new....Skynet?!").toLowerCase();
  yesNo(questionFour);
  console.log(amountCorrect);
  var questionFive = prompt ("Name a state I lived in.").toLowerCase();
  multiChoice(questionFive);
  console.log(questionFive);
  //must be at bottom for global userName to be defined?
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
