function checkName(){
    let input = $('#name');
    let cur_val = input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        input.removeClass('is-invalid');
        input.addClass('is-valid');
        return true;
    } else{
        input.removeClass('is-valid');
        input.addClass('is-invalid');
        return false;
    }
}

function checkAge(){
    let input = $('#age');
    let cur_val = input.val();
    let age_regex = "^[0-9]+$";
    if (cur_val.match(age_regex) && cur_val !== ''){
        input.removeClass('is-invalid');
        input.addClass('is-valid');
        return true;
    } else{
        input.removeClass('is-valid');
        input.addClass('is-invalid');
        return false;
    }
}

function checkMail(){
    let input = $('#mail');
    let cur_val = input.val();
    // Email regex from emailregex.com
    let mail_regex = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
    if (cur_val.match(mail_regex) && cur_val !== ''){
        input.removeClass('is-invalid');
        input.addClass('is-valid');
        return true;
    } else{
        input.removeClass('is-valid');
        input.addClass('is-invalid');
        return false;
    }
}

function checkResidence(){
    let input = $('#residence');
    let cur_val = input.val();
    let residence_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(residence_regex) && cur_val !== ''){
        input.removeClass('is-invalid');
        input.addClass('is-valid');
        return true;
    } else{
        input.removeClass('is-valid');
        input.addClass('is-invalid');
        return false;
    }
}

$(function() {
    // Check Name
    $('#name').keyup(function() {
        checkName();
    });
    // Check Age
    $('#age').keyup(function() {
        checkAge();
    });
    // Check Mail Address
    $('#mail').keyup(function() {
        checkMail();
    });
    // Check Residence
    $('#residence').keyup(function() {
        checkResidence();
    });
    $('#submit').click(function() {
        if (checkName() && checkAge() && checkMail() && checkResidence()) {
            console.log("If passed!");
            $('#form').submit();
        }
    });
});