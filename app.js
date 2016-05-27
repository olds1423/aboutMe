//The Javascript portion of the About Me project
function quiz() {
    if (confirm("Please answer the following questions with simple Y/N answers.")){
      var questionOne = prompt ("Did you learn anything?").toLowerCase();
      if (questionOne === "yes" || "y"){
        alert ("We're getting somewhere!");
      } else {
        alert ("Poorly done.");
      }
    }
}
