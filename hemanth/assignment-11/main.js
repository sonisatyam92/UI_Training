/**
 * Created by Hemanth on 8/8/2017.
 */
// Implement test function
function test(name){
    return {
        name : name

    }
}
console.log(test);
console.log(test('Hemanth'));

// Calculate function

var a;
var b;
var op;
function calculate(a,b,op){
    if((op === '+')||(op === 'add')){
        return a + b;

    }
    else if((op === '-')||(op === 'sub')){
        if ((a>0||a<0)&&(b>0||b<0)) {
            return a - b;
        }
        else{
            return 'Invalid Input';
        }

    }
    else{
        return 'Invalid Input';
    }
}
function add(a,b){
    return a+b;

}
function sub(a,b){
    if ((a>0||a<0)&&(b>0||b<0)) {
        return a - b;
    }
    else{
        return 'Invalid Input';
    }
}

console.log(calculate(a,b,op));
console.log(add(a,b));
console.log(sub(a,b));

