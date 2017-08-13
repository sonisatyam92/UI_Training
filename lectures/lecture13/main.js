function onMyFormSubmit(){
    var nameFld = document.getElementById('name');
    var errFld = document.getElementById('errMsg');
    if(!nameFld.value  || nameFld.value  !== ''){
          errFld.innerHTML='Invalid Name. Its mandatory field';
        return false;
    }
    return true;
}
document.getElementById('name').onkeypress=function (ev) {
        var key = ev.key;
        var isValid = false;
        try {
            isValid = !isNaN(parseInt(key)) || key === 'Backspace';
        }catch (e){

        }
        if(!isValid){
            document.getElementById('name').className='form-control has-error';
        }else {
            document.getElementById('name').className='form-control';
        }
        return isValid;

};




//
//UI -> function

