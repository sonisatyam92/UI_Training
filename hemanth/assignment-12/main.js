/**
 * Created by Hemanth on 8/12/2017.
 */
function myFunction() {
    document.getElementById("id1").innerHTML = "<h1>I don't like it! </h1>";
}
//document.getElementById("id2").onclick=function(){myFunction1()};

document.getElementById("id2").addEventListener('click', myFunction1);
function myFunction1(){
    document.getElementById("id2").innerHTML="You Tapped me!";
}
function myFunction2(ele) {
    ele.style.color='blue';
}

document.getElementById("id3").addEventListener("dblclick", myFunction3);

function myFunction3() {
    document.getElementById("id3").innerHTML = "You double-clicked me!";
}


document.getElementById("id4").addEventListener("mousedown", mouseDown);
document.getElementById("id4").addEventListener("mouseup", mouseUp);

function mouseDown(ev) {
    document.getElementById("id4").innerHTML = "The mouse button is held down.";
    console.log(ev)
}

function mouseUp(ev) {
    document.getElementById("id4").innerHTML = "You released the mouse button.";
    console.log(ev);
}
document.getElementById("id5").onmouseenter = function() {mouseEnter()};
document.getElementById("id5").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("id5").style.color = "red";
}

function mouseLeave() {
    document.getElementById("id5").style.color = "blue";
}
function myFunction4(e) {
    var x = e.clientX;
    var y = e.clientY;
    var Coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("id6").innerHTML = Coor;
    console.log(e);
}

function clearCoor() {
    document.getElementById("id6").innerHTML = "";
}
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}
//Key events

function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function myFunction5() {
    var x = document.getElementById("fname1").value;
    document.getElementById("demo").innerHTML = x;
}
