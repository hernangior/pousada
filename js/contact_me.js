function isValid(field){
if ((typeof field != 'undefined') && (typeof field != 'null') 
&& (field != '') && (field != 0)){
  return true
}else{
  return false
}
} 

/*
function showSuccessMsg(divSucess, formName){
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
    $("#loading").addClass('d-none');
    $("#contact_loading").addClass('d-none');
    $("#reservation_loading").addClass('d-none');
}
*/

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {

            var google_form_id = "";
            var data_content = {};

            event.preventDefault(); // prevent default submit behaviour

            // get values from Reservation Form
            var checkIn = $("input#check_in").val();
            var checkOut = $("input#check_out").val();
            var adults = $("input#adults").val();
            var childrens = $("input#childrens").val();

             // get values from Reservation Modal Form
            var personName = $("input#personName").val();
            var personGener = $("#personGener").val();
            var personBirth = $("input#PersonBirth").val();
            var personCountry = $("input#personCountry").val();
            var personRG = $("input#personRG").val();
            var personCPF = $("input#personCPF").val();
            var personPhoneFix = $("input#personPhoneFix").val();
            var personAdress = $("input#personAdress").val();
            var personCEP = $("input#personCEP").val();
            var personEmail = $("input#personEmail").val();
            var personPhoneCell = $("input#personPhoneCell").val();

            // Reservation Form

            if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                && (checkIn != '') && (checkIn != 0))&& 
                ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                    && (checkOut != '') && (checkOut != 0))&&
                ((typeof adults != 'undefined') && (typeof adults != 'null') 
                    && (adults != '') && (adults != 0))
                ){

                $("#reservation_loading").removeClass('d-none');

                name = 'Reservas'
                email = 'reservas@pedacodoparaiso.com'
                message = 
                'Ola, Tenho interesse em realizar uma Reserva!'+
                '   |   Check-In: '+checkIn+
                '   |   Check-Out: '+checkOut+
                '   |   Adultos: '+adults+
                '   |   Criancas: '+childrens+
                '   Dados do solicitante   '+
                '   |   Nome: '+personName+
                '   |   Sexo: '+personGener+
                '   |   Nascimento: '+personBirth+
                '   |   Nacionalidade: '+personCountry+
                '   |   RG: '+personRG+
                '   |   CPF/Passaporte: '+personCPF+
                '   |   Telefone Fixo: '+personPhoneFix+
                '   |   Telefone Celular: '+personPhoneCell+
                '   |   Endereco: '+personAdress+
                '   |   CEP: '+personCEP

                if (
                    !isValid(personRG) ||
                    !isValid(personCPF) ||
                    !isValid(personCEP) ||  
                    !isValid(personName) ||
                    !isValid(personBirth) ||
                    !isValid(personEmail) ||
                    !isValid(personGener) ||
                    !isValid(personAdress) ||
                    !isValid(personCountry) ||
                    !isValid(personPhoneFix) ||
                    !isValid(personPhoneCell)
                    ){
                    return
                }

                // Show Only Loading Message
                $('#modalTitleLoading').removeClass('d-none')
                $('#modalLoading').removeClass('d-none')
                $('#modalFooterInitial').hide()
                $('#modalTitleInitial').hide()
                $('#modalTitleInitial').hide()
                $('#modalBodyInitial').hide()

                google_form_id = "1FAIpQLSdwktKC-CyiFxBu_kCVhz66KLE9oTgkT4oxsIw5Sdp60bJbKw";
                data_content = {
                    "entry.437635144"  :checkIn         ,
                    "entry.248687947"  :checkOut        ,
                    "entry.1226916961" :adults          ,
                    "entry.1808109080" :childrens       ,
                    "entry.699611865"  :personName      ,
                    "entry.947893135"  :personGener     ,
                    "entry.2017781221" :personBirth     ,
                    "entry.711818060"  :personCountry   ,
                    "entry.350815007"  :personRG        ,
                    "entry.2063278341" :personCPF       ,
                    "entry.960703935"  :personPhoneFix  ,
                    "entry.1799531849" :personPhoneCell ,
                    "entry.33109248"   :personAdress    ,
                    "entry.280043100"  :personCEP       ,
                    "entry.954337788"  :personEmail     
                };
                
            }else{

                var contactName = $("input#contact_name").val();
                var contactEmail = $("input#contact_email").val();
                var contactMessage = $("textarea#contact_message").val();
                var contactForm = $("input#contact_form").val();

                // Contact Form

                //console.log('forms')

                if (((typeof contactForm != 'undefined') && (typeof contactForm != 'null') 
                    && (contactForm != '') && (contactForm != 0)) &&
                    ((typeof contactName != 'undefined') && (typeof contactName != 'null') 
                    && (contactName != '') && (contactName != 0)) &&
                    ((typeof contactEmail != 'undefined') && (typeof contactEmail != 'null') 
                    && (contactEmail != '') && (contactEmail != 0)) &&
                    ((typeof contactMessage != 'undefined') && (typeof contactMessage != 'null') 
                    && (contactMessage != '') && (contactMessage != 0))
                    ){

                    $("#contact_loading").removeClass('d-none')
                    $('#submitContactButton').hide()

                    // get values from Contact Form
                    var name_temp = $("input#contact_name").val();
                    var email_temp = $("input#contact_email").val();
                    var message_temp = $("textarea#contact_message").val();

                    var name = 'Contato'
                    var email = 'reservas@pedacodoparaiso.com'
                    var message = ' Ola, Tenho interesse em entrar em contato! '+
                    ' Nome :'+name_temp+
                    ' E-mail:'+email_temp+
                    ' Mensagem: '+message_temp

                    google_form_id = "1FAIpQLSdf1pu3K4D4T_yXu0wp514kfQs2mwN0Wg1orDmbZTX2GAUP4g";
                    data_content = {
                        "entry.52904792": name_temp,
                        "entry.1665733173": email_temp,
                        "entry.1129926948": message_temp
                    };

                // Newsletter Form

                }else{

                    //console.log('Newsletter')

                    $("#loading").removeClass('d-none');
                    $('#submitNewsletterButton').hide()

                    /*

                    // get values from Contact Form
                    var name_temp = $("input#name").val();
                    var email_temp = $("input#email").val();
                    var message_temp = $("textarea#message").val();

                    var name = 'Novidades'
                    var email = 'reservas@pedacodoparaiso.com'
                    var message = ' Ola, Tenho interesse em Novidades! '+
                    ' E-Mail:'+email_temp*/

                    var name = 'Contato'
                    var email = 'reservas@pedacodoparaiso.com'
                    var message = ' Ola, Tenho interesse em entrar em contato! E-Mail: ['+$("input#email").val()+']'

                    google_form_id = "1FAIpQLSdf1pu3K4D4T_yXu0wp514kfQs2mwN0Wg1orDmbZTX2GAUP4g";
                    data_content = {
                        "entry.52904792": name,
                        "entry.1665733173": email,
                        "entry.1129926948": message
                    };

                }

/*                var firstName = name; // For Success/Failure Message/
                // Check for white space in name for Success/Fail message
                if (firstName.indexOf(' ') >= 0) {
                    firstName = name.split(' ').slice(0, -1).join(' ');
                }*/

            }

            $.ajax({
                //url: "https://www.elformo.com/forms/aeaa8eff-dfca-4535-abb2-022b1788848e",
                url: "https://docs.google.com/forms/u/0/d/e/"+google_form_id+"/formResponse",
                type: "POST",
                /*
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                */
                data:data_content,
                cache: false,
                success: function() {

                    // Reservation Form
                    if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                        && (checkIn != '') && (checkIn != 0))&& 
                        ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                            && (checkOut != '') && (checkOut != 0))&&
                        ((typeof adults != 'undefined') && (typeof adults != 'null') 
                            && (adults != '') && (adults != 0))
                        ){
                        // Hide components of initial message
                        $('#modalFooterInitial').hide()
                        $('#modalTitleInitial').hide()
                        $('#modalBodyInitial').hide()
                        // Show components of complete message
                        $('#modalFooterComplete').removeClass('d-none')
                        $('#modalTitleComplete').removeClass('d-none')
                        $('#modalBodyComplete').removeClass('d-none')
                        // Clear all fields
                        $('#formReservaData').trigger("reset");
                        $('#reservationForm').trigger("reset");
                        // Hide unecessery components
                        $("#loading").addClass('d-none');
                        $("#contact_loading").addClass('d-none');
                        $("#reservation_loading").addClass('d-none');

                        $('#modalTitleLoading').addClass('d-none');
                        $('#modalLoading').addClass('d-none');

                      }else{

                        // Contact Form

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
                            $('#submitContactButton').show()

                        // Newsletter Form

                        }else{
                            divSucess = '#success'
                            formName = '#contactForm';
                            $('#submitNewsletterButton').show()
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

                        $("#loading").addClass('d-none');
                        $("#contact_loading").addClass('d-none');
                        $("#reservation_loading").addClass('d-none');

                      }

                },
                error: function(error) {
                    // Reservation Form
                    if (((typeof checkIn != 'undefined') && (typeof checkIn != 'null') 
                        && (checkIn != '') && (checkIn != 0))&& 
                        ((typeof checkOut != 'undefined') && (typeof checkOut != 'null') 
                            && (checkOut != '') && (checkOut != 0))&&
                        ((typeof adults != 'undefined') && (typeof adults != 'null') 
                            && (adults != '') && (adults != 0))
                        ){
                        // Hide components of initial message
                        $('#modalFooterInitial').hide()
                        $('#modalTitleInitial').hide()
                        $('#modalBodyInitial').hide()
                        // Show components of complete message
                        $('#modalFooterComplete').removeClass('d-none')
                        $('#modalTitleComplete').removeClass('d-none')
                        $('#modalBodyComplete').removeClass('d-none')
                        // Clear all fields
                        $('#formReservaData').trigger("reset");
                        $('#reservationForm').trigger("reset");
                        // Hide unecessery components
                        $("#loading").addClass('d-none');
                        $("#contact_loading").addClass('d-none');
                        $("#reservation_loading").addClass('d-none');

                        $('#modalTitleLoading').addClass('d-none');
                        $('#modalLoading').addClass('d-none');

                      }else{

                        // Contact Form

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
                            $('#submitContactButton').show()

                        // Newsletter Form

                        }else{
                            divSucess = '#success'
                            formName = '#contactForm';
                            $('#submitNewsletterButton').show()
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

                        $("#loading").addClass('d-none');
                        $("#contact_loading").addClass('d-none');
                        $("#reservation_loading").addClass('d-none');

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