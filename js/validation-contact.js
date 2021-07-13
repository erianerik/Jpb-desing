let normalFields = document.querySelectorAll(".normalValidation");
let nullField = "";
let emailField = false;
let normalField = false;
const regexEmail = new RegExp("^[a-z 0-9]{2,}@{1}[a-z]{2,}.[a-z]{2,3}$", "g");

function htmlErro(mensagem) {
    return `<p class="error-description error-description--email">${mensagem}</p>`;
}

function htmlSendEmail(mensagem) {
    return `<div class="message-status"> <p class="message-status__message">${mensagem}</p> </div>`;
}
function validationsFields() {
    $.each(normalFields, function (index, input) {
        let valueInput = $(input).val();
        $(input).parent().find("p").remove();

        if (nullField == valueInput) {
            $(input).addClass("error-input");
            $(input).parent().append(htmlErro("Campo inválido"));
        } else {
            $(input).removeClass("error-input");
            $(input).parent().find("p").remove();
        }

    });

    $.each(normalFields, function (index, input) {
       
        if ($(input).parent().find(".error-description")[0]) {
            normalField = true;
            return false;
        } else {
            normalField = false;
        }

    });
}
function validationEmail() {
    let valueEmail = $("#email").val();
    $("#email").parent().find("p").remove();

    if (valueEmail.match(regexEmail)) {
        $("#email").removeClass("error-input");
        $("#email").parent().find("p").remove();
        emailField = false;
    } else {
        $("#email").addClass("error-input");
        $("#email").parent().append(htmlErro("Email inválido"));
        emailField = true;
    }
}

function sendEmail() {
    $.ajax({
        method: "POST",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            message: $("#message").val(),
        },
        url: $(".contact").attr("action"),
    }).done(function (response) {

        if (response == "true") {
            $(".contact").append(htmlSendEmail("Mensagem enviado com sucesso!"));
            $(".message-status").css("background-color", "green");
        } else {
            $(".contact").append(htmlSendEmail("Erro ao enviar mensagem!"));
            $(".message-status").css("background-color", "red");
        }
    });
}

$(".button-pattern--contact").click(function () {
    validationsFields();
    validationEmail();
    if (!emailField && !normalField) {
        sendEmail();
    }
});
