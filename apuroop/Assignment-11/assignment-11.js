
// test variable
var test = "Hello World";
console.log(typeof test);

//function as name as test

test = function test() {
    var a = "Bye World";
    console.log(a);
};
console.log(typeof test);



calc(1,2,"+");
//   & &&  , | ||
/*

   &, &&  all the condition should be true.
   false = condition1 & condition2  & ....condition n.

   && = condition1 && condition2

    a = 10;
  if(a<10 & (a =(a=5) <10)){
  }
  a = 5;

 if(a<10 && (a =(a=5) <10)){
 }
 a = 10;

* */
function calc(a,b,c){
    if (typeof a == "number" && typeof b == "number" && c == "+")  {
        var d = a + b;
        console.log(d);
    }
    else if (typeof a == "number" && typeof b == "number" && c == "-")  {
        var d = a - b;
        console.log(d);
    }
    else{
        console.log("Error");
    }
}
