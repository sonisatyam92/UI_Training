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
    else if(((op === '-')||(op === 'sub')) && (typeof a === 'number') && (typeof b ==='number')){
        return a - b;
    }
    else{
        return 'Invalid Input';
    }
}
function add(a,b){
    return a+b;

}
function sub(a,b){
    if (typeof a === 'number' && typeof b ==='number') {
        return a - b;
    }
    else{
        return 'Invalid Input';
    }
}
var x=null;
var y=0;
console.log((x-y));
console.log(calculate(a,b,op));
console.log(add(a,b));
console.log(sub(a,b));

