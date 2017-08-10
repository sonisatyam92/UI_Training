
var sumOdd = 0;
var sumEven = 0;
var row;
function test(i){
    /*
        <Table>
          <Tr id="myTr2">
             <td>
             EvenNum (2,4)
             </td>
          </tr>
      </table>

      object of table element node;

      <table>
            <tr></tr>
      </table>

    * */


    var isEven = i%2 ==0;

    if(isEven){

        var colEven = document.createElement("TD");
        var evenCell = document.createTextNode(i);
        colEven.appendChild(evenCell);
        row.appendChild(colEven);
        sumEven = sumEven + i;
    }else {
        var row = document.createElement("TR");
        document.getElementById("myTable").appendChild(row);

        var colOdd = document.createElement("TD");
        var oddCell = document.createTextNode(i);
        colOdd.appendChild(oddCell);
        row.appendChild(colOdd);
        sumOdd = sumOdd + i;
    }






}

for (var i=1 ; i<=100 ; i++){
    test(i);
}

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

