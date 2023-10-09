function validarFormulario(){
    var nome = document.forms["contact-Form"]["nome"].value;
    var email = document.forms["contact-Form"]["email"].value;
    if((nome== "")||(email== "")){
        alert("o campos devem ser preenchido!");
        return false;
    } else if(email.indexOf("@")===-1){
        alert("email invalido, coloque o @");
    }
    else{
        alert("formulario enviado");
        return false;
    }
}