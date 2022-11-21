var resultNum, theNum = "";
var numLength = document.querySelectorAll(".num").length;

// Add click event to numbers
for (var i = 0; i <= numLength; i++) {
    document.querySelectorAll(".num")[i].addEventListener("click", function(){
        theNum = theNum + this.getAttribute("data-num");
        viewer.innerHTML = theNum;
    });
};