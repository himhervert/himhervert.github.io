var formulario = document.getElementById('formulario');
var mensaje = document.getElementById('Mensaje');
var expReg = /[a-z]/i;

formulario.addEventListener('submit', function (evento) {
    if (!VerificaUsuario()) {
        evento.preventDefault();
    }
    else {

    }
});
formulario.username.addEventListener('blur', function() {
    VerificaUsuario();
});

function VerificaUsuario() {
    // if(formulario.nombre.value.charAt(0) == ''){
    //     window.alert("No hay ni un campo");
    //     return false;
    // }else{
    //     return true;
    // }

    // if(formulario.nombre.value.charAt(0).toLowerCase()>='a'
    // && formulario.nombre.value.charAt(0).toLowerCase()<='z')
    if (expReg.test(formulario.username.value.charAt(0))) {
        mensaje.innerHTML = "";
        return true;
    }
    else {
        mensaje.innerHTML = "El nombre de usuario esta mal";
        return false;
    }
}

function VerificaContrasenia() {
    return true;
}
function VerificaTerminos() {
    return true;
}