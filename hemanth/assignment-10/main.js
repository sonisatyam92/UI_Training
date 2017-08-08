/**
 * Created by Hemanth on 8/8/2017.
 */
// Even-Odd Table
var html="<table border='1'><tr><th>Odd</th><th>Even</th></tr>";
var sumOdd=0;
var sumEven=0;

for(var i = 1;i<=50;i++){
    if(i%2!=0){
        sumOdd= sumOdd+i;
        html = html+"<tr><td>"+i+"</td>";
    } else {
        sumEven= sumEven+i;
        html = html+"<td>"+i+"</td></tr>";
    }

}

html= html+"<tr><td>"+sumOdd+"</td><td>"+sumEven+"</td></tr>";

//Fibonacci Sequence Table
html= html+"</table>";
document.write(html);

var html1="<table border='1'><tr><th>Fibonacci</th></tr>";
var sumFib=0;
var a=0;
var b=1;
var c;
 html1 = html1+"<td>"+a+"</td></tr>";
 html1 = html1+"<td>"+b+"</td></tr>";
for(var i = 2;i<=50;i++){
    c=a+b;
    html1 = html1+"<td>"+c+"</td></tr>";
    console.log(c);
    a=b;
    b=c;
    sumFib=sumFib+c;
}
html1= html1+"<tr><td>"+sumFib+"</td></tr>";
    html1= html1+"</table>";
    document.write(html1);