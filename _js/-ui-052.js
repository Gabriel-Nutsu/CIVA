window.onload = function() {
	document.getElementById("form-vac").onsubmit = validarCampos;
}

validarCampos= function () {
    var correto = true;
    
    if(document.getElementById("idvacinaçao").value=="") {
        alert("O campo ID vacinaçao é obrigatório!");
        correto = false;
    }

    if(document.getElementById("dose").value=="") {
        alert("O campo Dose é obrigatório!");
        correto = false;
    }

    if(document.getElementById("vacina").value=="") {
        alert("O campo  Vacina é obrigatório!");
        correto = false;
    }

    if(document.getElementById("lab").value=="") {
        alert("O campo  Laboratorio é obrigatório!");
        correto = false;
    }

    if(document.getElementById("dataaplicaçao").value=="") {
        alert("O campo  Data de aplicação é obrigatório!");
        correto = false;
    }

    if(document.getElementById("pais").value=="") {
        alert("O campo  País é obrigatório!");
        correto = false;
    }

    if(document.getElementById("idptnvac").value=="") {
        alert("O campo  ID ponto de vacinação é obrigatório!");
        correto = false;
    }

    if(document.getElementById("pntvacinaçao").value=="") {
        alert("O campo  Ponto de vacinação é obrigatório!");
        correto = false;
    }

    if(document.getElementById("ncivaprof").value=="") {
        alert("O campo N CIVA Profissional é obrigatório!");
        correto = false;
    }

    if(document.getElementById("lote").value=="") {
        alert("O campo lote é obrigatório!");
        correto = false;
    }



    return correto;
}    