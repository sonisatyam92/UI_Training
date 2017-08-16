/**
 * Created by Hemanth on 8/15/2017.
 */
var n= Array(4);
function myFunction() {
    n[0]=Math.round(Math.random()*1000);
    document.getElementById("id1").innerHTML = n[0];
}
function myFunction2() {
    n[1]=Math.round(Math.random()*1000);
    document.getElementById("id2").innerHTML = n[1];
}
function myFunction3() {
    n[2]=Math.round(Math.random()*1000);
    document.getElementById("id3").innerHTML =n[2];
}
function myFunction4() {
    var x=Math.round((Math.random()*10)%2);
    if(x===0||x===1||x===2) {
        document.getElementById("id4").innerHTML = n[x];
    }
}


