$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {

            event.preventDefault(); // prevent default submit behaviour

            // get values from Reservation Form
            var checkIn = $("input#check_in").val();
            var checkOut = $("input#check_out").val();
            var adults = $("input#adults").val();
            var childrens = $("input#childrens").val();

            if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                && (checkIn != '') && (checkIn != 0))&& 
                ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                    && (checkOut != '') && (checkOut != 0))&&
                ((typeof adults != 'undefined') && (typeof adults != 'null') 
                    && (adults != '') && (adults != 0))
                ){

                name = 'Reservas'
                email = 'pedacodoparaiso@site.com'
                message = 
                'Ola, Tenho interesse em realizar uma Reserva!'
                +'\n'+'\n'+
                'Check-In: '+checkIn+'\n'+
                'Check-Out: '+checkOut+'\n'+
                'Adultos: '+adults+'\n'+
                'Criancas: '+childrens
                
            }else{

                var contactName = $("input#contact_name").val();
                var contactEmail = $("input#contact_email").val();
                var contactMessage = $("textarea#contact_message").val();
                var contactForm = $("input#contact_form").val();

                if (((typeof contactForm != 'undefined') && (typeof contactForm != 'null') 
                    && (contactForm != '') && (contactForm != 0)) &&
                    ((typeof contactName != 'undefined') && (typeof contactName != 'null') 
                    && (contactName != '') && (contactName != 0)) &&
                    ((typeof contactEmail != 'undefined') && (typeof contactEmail != 'null') 
                    && (contactEmail != '') && (contactEmail != 0)) &&
                    ((typeof contactMessage != 'undefined') && (typeof contactMessage != 'null') 
                    && (contactMessage != '') && (contactMessage != 0))
                    ){
                    // get values from Contact Form
                    var name = $("input#contact_name").val();
                    var email = $("input#contact_email").val();
                    var message = $("textarea#contact_message").val();
                    console.log('1')
                }else{
                    // get values from Contact Form
                    var name = $("input#name").val();
                    var email = $("input#email").val();
                    var message = $("textarea#message").val();
                    console.log('2')
                }

                var firstName = name; // For Success/Failure Message/
                // Check for white space in name for Success/Fail message
                if (firstName.indexOf(' ') >= 0) {
                    firstName = name.split(' ').slice(0, -1).join(' ');
                }
                
            }

            $.ajax({
                url: "https://www.elformo.com/forms/aeaa8eff-dfca-4535-abb2-022b1788848e",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {


                    if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                        && (checkIn != '') && (checkIn != 0))&& 
                        ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                            && (checkOut != '') && (checkOut != 0))&&
                        ((typeof adults != 'undefined') && (typeof adults != 'null') 
                            && (adults != '') && (adults != 0))
                        ){
                        divSucess = '#reservationSuccess'
                        formName = '#reservationForm'
                      }else{
                        if (((typeof contactForm != 'undefined') && (typeof contactForm != 'null') 
                            && (contactForm != '') && (contactForm != 0)) &&
                            ((typeof contactName != 'undefined') && (typeof contactName != 'null') 
                            && (contactName != '') && (contactName != 0)) &&
                            ((typeof contactEmail != 'undefined') && (typeof contactEmail != 'null') 
                            && (contactEmail != '') && (contactEmail != 0)) &&
                            ((typeof contactMessage != 'undefined') && (typeof contactMessage != 'null') 
                            && (contactMessage != '') && (contactMessage != 0))
                            ){
                            divSucess = '#contactSuccess'
                            formName = '#superContactForm';
                            console.log('super form')
                        }else{
                            divSucess = '#success'
                            formName = '#contactForm';
                            console.log('other')
                        }
                      }

                    // Success message
                    $(divSucess).html("<div class='alert alert-success f-s-25 text-center'>");
                    $(divSucess+' > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $(divSucess+' > .alert-success')
                        .append("<strong>Sua mensagem foi enviada. </strong>");
                    $(divSucess+' > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $(formName).trigger("reset");
                },
                error: function() {

                    if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                        && (checkIn != '') && (checkIn != 0))&& 
                        ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                            && (checkOut != '') && (checkOut != 0))&&
                        ((typeof adults != 'undefined') && (typeof adults != 'null') 
                            && (adults != '') && (adults != 0))
                        ){
                        divSucess = '#reservationSuccess'
                        formName = '#reservationForm'
                      }else{
                        if (((typeof contactForm != 'undefined') && (typeof contactForm != 'null') 
                            && (contactForm != '') && (contactForm != 0)) &&
                            ((typeof contactName != 'undefined') && (typeof contactName != 'null') 
                            && (contactName != '') && (contactName != 0)) &&
                            ((typeof contactEmail != 'undefined') && (typeof contactEmail != 'null') 
                            && (contactEmail != '') && (contactEmail != 0)) &&
                            ((typeof contactMessage != 'undefined') && (typeof contactMessage != 'null') 
                            && (contactMessage != '') && (contactMessage != 0))
                            ){
                            divSucess = '#contactSuccess'
                            formName = '#superContactForm';
                        }else{
                            divSucess = '#success'
                            formName = '#contactForm';
                        }
                      }

/*                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Desculpe " + firstName + 
                        ", parece que meu servidor de email não está respondendo. Por favor tente novamente mais tarde!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");*/

                    // Success message
                    $(divSucess).html("<div class='alert alert-success f-s-25 text-center'>");
                    $(divSucess+' > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $(divSucess+' > .alert-success')
                        .append("<strong>Sua mensagem foi enviada. </strong>");
                    $(divSucess+' > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $(formName).trigger("reset");

                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
