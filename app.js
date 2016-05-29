//The Javascript portion of the About Me project
var favoriteNumber = 13;
var amountCorrect = 0;
function quiz() {
    confirm("Please answer the following questions with simple Y/N answers.")

    var questionOne = prompt ("Was I born in Washington?").toLowerCase();
      //Is there a reason to define the wrong answers? Why would it matter if the user said No or hazaah? Both are wrong?
      if (questionOne === "yes" || questionOne === "y"){
        alert ("We're getting somewhere!");
        amountCorrect += 1;
        console.log(amountCorrect);
      } else {
        alert ("Poorly done.\nTry again.");
      }
    var questionTwo = prompt ("Did I attend an amazing coding accelerator?").toLowerCase();
      if (questionTwo === "yes" || questionTwo === "y") {
        alert ("We're getting somewhere!");
        amountCorrect += 1;
      } else {
        alert ("Poorly done.\nTry again.");
      }
    var questionThree = prompt ("Was that coding accelerator the start of something new?").toLowerCase();
      if (questionThree === "yes" || questionThree === "y") {
        alert ("We're getting somewhere!");
        amountCorrect += 1;
      } else {
        alert ("Poorly done.\nTry again.");
      }
    var questionFour = prompt ("Was that something new....Skynet?!").toLowerCase();
      if (questionFour === "yes" || questionFour === "y") {
        alert ("We're getting somewhere!");
        amountCorrect += 1;
      } else {
        alert ("Poorly done.\nTry again.");
      }
//Start of the first real logical questions below
      console.log(amountCorrect);
    var counter = 3;
    var questionFive = parseInt(prompt ("What is my favorite number?"));
    while (questionFive !== favoriteNumber && counter >= 0) {
      console.log('running while loop');
      if (questionFive >= favoriteNumber) {
        console.log('inside while/if');
        questionFive = parseInt(prompt ("Too high!"));
        --counter;
        console.log(counter);
      }
      else if (questionFive <= favoriteNumber){
        console.log('inside while/elseif');
        questionFive = parseInt(prompt ("Too low!"));
        --counter;
        console.log(counter);
      }
    }
    var counterTwo = 4;
    var myStates = ["washington", "idaho", "montana", "oregon", "hawaii"];
    // do i have to have the prompt access the indicies ?
    console.log(myStates);
    var questionSix = prompt ("What states have I lived in?").toLowerCase();{
      while (questionSix !== myStates && counterTwo >= 0) {
        console.log("running second while loop");
        console.log(questionSix);
        if (questionSix === myStates) {
          questionSix = prompt( "Nicely done! I have lived in;" + myStates);
          console.log(questionSix);
          console.log(myStates);
        }
        else if (questionSix !== myStates){
          questionSix = prompt("No sorry, you have ");
          console.log(myStates);
          console.log(questionSix);
          break;
        }
      }
    }
    var totalScore = prompt("Not too bad, you scored, " + amountCorrect + " out of 7!");
    alert ("Nice!")
    }
