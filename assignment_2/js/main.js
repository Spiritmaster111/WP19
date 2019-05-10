function validateForm(formData){
    let errorMessage = "";
    if (formData['name'].match(/[\W\d]/)) errorMessage += "Name contains invalid non-letter characters.\n";
    if ((formData.city).match(/[\W\d]/)) errorMessage += "City contains invalid non-letter characters.\n";
    if ((formData.age).match(/[\D]/)) errorMessage += "Age contains invalid non-digit characters.\n";
    if ((formData.number).match(/[\D]/)) errorMessage += "Number contains invalid non-digit characters.\n";
    if ((formData.email).match(/.+@.+\..+/)) errorMessage += "Email address is not in a valid format.\n";
    if (errorMessage) {
        $('#form-alert').show().innerHTML = errorMessage;
        console.log("Error: " + errorMessage);
    } else {
        console.log("Validation Success");
    }
}

function writeFormData(){

}

$(function() {
    $('#inputSubmit1').click(function() {
        var formData = {
            name: $('#inputName1').val(),
            age: $('#inputAge1').val(),
            city: $('#inputCity1').val(),
            email: $('#inputEmail1').val(),
            number: $('#inputNumber1').val()
        };
        validateForm(formData);
    });

    $('#inputErase1').click(function() {

    });

    $('#link-tab').click(function() {
        $('.tab-pane, .nav-link').removeClass('active');
        $('#link-tab').addClass('active');
        $('#links').addClass('active');
    });

    $('#contact-tab').click(function() {
        $('.tab-pane, .nav-link').removeClass('active');
        $('#contact-tab').addClass('active');
        $('#contact').addClass('active');
    });
});