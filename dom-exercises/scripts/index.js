var btn = document.getElementById("knappt");

var listener = function () {
    btn.style.color = "red";
    btn.style.fontSize = "12px";
}

btn.addEventListener("click",listener);


var input1Elem, input2Elem, resultElem;

function init(){
    input1Elem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    resultElem = document.getElementById("result");
    document.getElementById("runBtn").onclick = testScript;

}
window.onload = init;




function testScript(){

    var nr1, nr2, res;

    nr1 = input1Elem.value;
    nr2 = input2Elem.value;
    res = nr1 * nr2;
    resultElem.innerHTML = res;
    console.log(nr1, nr2) ;
}

var lnk = document.getElementById("link");

var listener = function (){
    console.log(lnk)
}

lnk.addEventListener("click",listener);


//Tableövning


var abtn = document.getElementById("addBtn");
var rbtn = document.getElementById("removeBtn");
//var table = document.getElementById("myTable");

abtn.addEventListener("click", function(){
    var nyRad = myTable.insertRow(1);   // Varför fungerar myTable här också?
    var nyCell1 = nyRad.insertCell(0);
    var nyCell2 = nyRad.insertCell(1);
    var nyCell3 = nyRad.insertCell(2);
    nyCell1.innerHTML = "Alpha";
    nyCell2.innerHTML = "Betsson";
    nyCell3.innerHTML = "55";
});

rbtn.addEventListener("click", function(){
    document.getElementById("myTable").deleteRow(1);
});


//Logga storlek

var width, height, display;

window.addEventListener("resize", mySize);

function mySize(){
    width = this.innerWidth;
    height = this.innerHeight;
    display = document.getElementById("logg");
    display.innerHTML = width, height;  // Varför ingen height?
    console.log (width, height);  //Funkar ju!
}




