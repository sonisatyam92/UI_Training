
var sumOdd = 0;
var sumEven = 0;

function test(i){
    var row = document.createElement("TR");
    row.setAttribute("id", "myTr" + i);
    document.getElementById("myTable").appendChild(row);

    var even = 2*i;
    var colEven = document.createElement("TD");
    var evenCell = document.createTextNode(even);
    colEven.appendChild(evenCell);
    document.getElementById("myTr" + i).appendChild(colEven);
    sumEven = sumEven + even;


    var odd = 2*i - 1;
    var colOdd = document.createElement("TD");
    var oddCell = document.createTextNode(odd);
    colOdd.appendChild(oddCell);
    document.getElementById("myTr" + i).appendChild(colOdd);
    sumOdd = sumOdd + odd;
}

for (var i=1 ; i<=100 ; i++){

    test(i);

    if (i!=100){

        var row = document.createElement("TR");
        row.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(row);

        var EvenSum = document.createElement("TD");
        var evenSumCell = document.createTextNode(sumEven);
        EvenSum.appendChild(evenSumCell);
        document.getElementById("myTr").appendChild(EvenSum);

        var OddSum = document.createElement("TD");
        var oddSumCell = document.createTextNode(sumOdd);
        OddSum.appendChild(oddSumCell);
        document.getElementById("myTr").appendChild(OddSum);

    }
}

