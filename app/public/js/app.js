$(document).ready(function () {
    /*$(".chosen-select").chosen({
        allow_single_deselect: true
    });*/
    
    $("form[name='surveyForm']").validate({
        rules: {
            friendName: "required",
            photoLink: "required"
        },
        messages: {
            friendName: "Please enter your firstname",
            photoLink: "Please enter your lastname"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});