var test = "Hello World";
console.log(test);

console.log(nope());

function nope() {

    var a = "Bye World"
    console.log(a);

}

calc(1,2,"+");

function calc(a,b,c){
     if (typeof a == "number" & typeof b == "number" & typeof c == "string")  {
     d = a + b;
     return d;
     }
     else{
     return "error";
     }
 }
