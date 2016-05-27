//The Javascript portion of the About Me project
function quiz() {
    confirm("Please answer the following questions with simple Y/N answers.")

    var questionOne = prompt ("Was I born in Washington?").toLowerCase();
      //Is there a reason to define the wrong answers? Why would it matter if the user said No or hazaah? Both are wrong?
        if (questionOne === "yes" || questionOne === "y"){
          alert ("We're getting somewhere!");
        } else {
          alert ("Poorly done.\n Try again.");
        }
      // var questionTwo = prompt ("Did I attend an amazing coding accelerator?").toLowerCase();
      //   if (questionTwo === "yes" || "y") {
      //     alert ("We're getting somewhere!");
      //   } else {
      //     alert ("Poorly done.\n Try again.");
      //   }

}
