$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {

            event.preventDefault(); // prevent default submit behaviour
            // get values from Contact Form
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message/
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            // get values from Reservation Form
            var checkIn = $("input#check_in").val();
            var checkOut = $("input#check_out").val();
            var adults = $("input#adults").val();
            var childrens = $("input#childrens").val();

            if ((email == '') && (checkIn!='') && (checkOut!='') && (adults!='')){
                name = 'Reservas'
                email = 'pedacodoparaiso@site.com'
                message = 
                'Ola, Tenho interesse em realizar uma Reserva!'
                +'\n'+'\n'+
                'Check-In: '+checkIn+'\n'+
                'Check-Out: '+checkOut+'\n'+
                'Adultos: '+adults+'\n'+
                'Criancas: '+childrens
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

                     let divSucess = '#success'
                     let formName = '#contactForm';
                      if ((checkIn!='') && (checkOut!='') && (adults!='')){
                        divSucess = '#reservationSuccess'
                        formName = '#reservationForm'
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

                     let divSucess = '#success'
                     let formName = '#contactForm';
                      if ((checkIn!='') && (checkOut!='') && (adults!='')){
                        divSucess = '#reservationSuccess'
                        formName = '#reservationForm'
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
