function LabelView(){
    return {
        showLabel : function(person){
            $('#lblName').text(person.getFirstName()+" "+ person.getLastName());
            $('#msg').show();
        }
    }
}