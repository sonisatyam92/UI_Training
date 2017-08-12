function myloadFunction(){
    //alert('should i load the page.')
}
// eval -> evaluate
document.onload = myloadFunction();

document.onreadystatechange = function(){
    //alert('document is rendered.'+ document.readyState);
};

function onclose() {
       // alert('i am going to close the page');
        //return false;
}
function onbodyUnload() {
       // alert('removing body');
        //return false;
}
document.onunload = onclose();

//document.getElementById('id1').onmouseover= onmouseEver;

document.getElementById('btn').onclick=selectText;
function selectText(ev){

    var text = window.getSelection().anchorNode.textContent;
    var start = window.getSelection().anchorOffset;
    var end = window.getSelection().extentOffset;
    document.getElementById("magnify").innerHTML=extractText(text,start,end);
}
function extractText(text, start, till){
        return text.substr(start, till-1);
}

function onmouseEver(ev){
    console.log(ev);
}

function onChecked(el){
        var target = el;
    alert(target.checked);
}
document.getElementById('txt').onkeyup = ontextchange;

function ontextchange(ev){
    var el = ev.target;
    if(ev.keyCode === 13){
        document.getElementById("magnify").innerHTML+='<br/>';
        return;
    }
    document.getElementById("magnify").innerHTML += ev.key;

}



function Person(input){
    var obj = input || {
        id : null,
        name : null
    };
    function getId(){return obj.id;}
    function setId(id){obj.id= id;}
    function setName(name){obj.name= name;}
    return {
        id : obj.id,
        name : obj.name,
        getId : getId,
        setId : setId
    };
}


var p1 = Person({id:1,name:'Satyam'});
var p2 = Person({id:2,name:'Satyam'});
p1.setName('Pradeep');


console.log(p1.getId());
console.log(p2.getId());
console.log(p1==p2);




