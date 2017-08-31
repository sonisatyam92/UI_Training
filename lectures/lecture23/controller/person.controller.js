function PersonController(){
        var personModel = PersonModel();
        var personView = PersonView();
        var lblView = LabelView();
        return {
            onSubmitBtnClick : function(){
               var person = personModel.addPerson(
                    $('#firstName').val(),
                    $('#lastName').val(),
                    $('#age').val(),
                    $('#gender').val(),
                    $('#location').val()
                );
                personView.refresh(personModel.getData());
                lblView.showLabel(person);
            }
        }


}
