$(document).ready(function () {
    /*$(".chosen-select").chosen({
        allow_single_deselect: true
    });*/
    
    $("form[name='surveyForm']").validate({
        rules: {
            friendName: "required",
            photoLink: "required",
            q1: "required",
            q2: "required",
            q3: "required",
            q4: "required",
            q5: "required",
            q6: "required",         
            q7: "required",       
            q8: "required",           
            q9: "required",     
            q10: "required",
        },
        messages: {
            friendName: "<b>Please input your first name.</b>",
            photoLink: "<b>Please input your last name.</b>",
            q1: "<b>Please select an option.</b>",
            q2: "<b>Please select an option.</b>",
            q3: "<b>Please select an option.</b>",
            q4: "<b>Please select an option.</b>",
            q5: "<b>Please select an option.</b>",
            q6: "<b>Please select an option.</b>",
            q7: "<b>Please select an option.</b>",
            q8: "<b>Please select an option.</b>",
            q9: "<b>Please select an option.</b>",
            q10: "<b>Please select an option.</b>"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});