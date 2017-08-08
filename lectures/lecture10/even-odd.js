var html="<table border='1'><tr><th>Odd</th><th>Even</th></tr>";
var sumOdd=0;
var sumEven=0;
for(var i = 1;i<=100;i++){
    if(i%2!=0){
        sumOdd= sumOdd+i;
        html = html+"<tr><td>"+i+"</td>";
    } else {
        sumEven= sumEven+i;
        html = html+"<td>"+i+"</td></tr>";
    }
}
html= html+"<tr><td>"+sumOdd+"</td><td>"+sumEven+"</td></tr>";

html= html+"</table>";
document.write(html);