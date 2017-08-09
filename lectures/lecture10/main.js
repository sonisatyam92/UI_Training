var sum = 0;
for(var i=1;i<=100;i++){
    sum = sum+i;
    document.write(i+'<br/>');
}
document.write("<br/> ------------------------------------- <br/> SUM : "+ sum);

MyClass('Satyam').getName();

function MyClass(name){
    return {
        name : name,
        getName :function(){
            return name;
        }

    }

}

// DOM



// over laoding
function myFunct(asda, asdasd){

}
function myFunct(asda){

}