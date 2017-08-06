
function enterVal(el){
    var val= el.innerHTML;
    //alert(val+' got clicked');
    if(val == 'C'){
        clear();
    }else {
        var currentVal = document.getElementById('cal-panel').value;
        var newVal = currentVal+val;
        document.getElementById('cal-panel').value = newVal;
    }
}

function clear(){
    document.getElementById('cal-panel').value = "";
}