//The Javascript portion of the About Me project
function quiz() {
    if (confirm("Please answer the following questions with simple Y/N answers.")){
      var questionOne = prompt ("Did you learn anything?").toLowerCase();
      //Is there a reason to define the wrong answers? Why would it matter if the user said No or hazaah? Both are wrong?
      if (questionOne === "yes" || "y"){
        alert ("We're getting somewhere!");
      } else {
        alert ("Poorly done.\n Try again.")// && break;
      }
    }
}
