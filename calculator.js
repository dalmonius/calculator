var oldNum, resultNum, theNum = "";

var opsLength = document.querySelectorAll(".ops").length;
var numLength = document.querySelectorAll(".num").length;

// click event on numbers
for (var i = 0; i < numLength; i++) {
    document.querySelectorAll(".num")[i].onclick = function() {
        theNum += this.getAttribute("data-num");
        viewer.innerHTML = theNum;
    };
}

var clear = function(){
    theNum = ""
    viewer.innerHTML = theNum + "<br>"
}
// click event on clear button
document.querySelector("#clear").onclick = clear;

// click event on operators buttons
for (var i = 0, l = opsLength; i < l; i++) {
    document.querySelectorAll(".ops")[i].onclick = function() {
      oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
      equals.setAttribute("data-result", "");
    };
}

// doing the operations
var showResult = function(){
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    switch (operator) {
        case "add":
          resultNum = oldNum + theNum;
          break;
        case "minus":
          resultNum = oldNum - theNum;
          break;
        case "multiply":
          resultNum = oldNum * theNum;
          break;
        case "divide":
          resultNum = oldNum / theNum;
          break;
        default:
          resultNum = theNum;
    }
    
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    oldNum = 0;
    theNum = resultNum;
}
// click event on equals button
document.querySelector("#equals").onclick = showResult;