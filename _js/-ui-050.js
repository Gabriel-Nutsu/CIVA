window.onload = function() {
	document.getElementById("form-dados").onsubmit = validarCampos;
}

validarCampos= function () {
    var correto = true;
    
    if(document.getElementById("nome-hospital").value=="") {
        alert("O campo nome do hospital é obrigatório!");
        correto = false;
    }

    if(document.getElementById("id-unidade").value=="") {
        alert("O campo Id unidade é obrigatório!");
        correto = false;
    }

    if(document.getElementById("postal").value=="") {
        alert("O campo Código Postal é obrigatório!");
        correto = false;
    }

    if(document.getElementById("estado").value=="") {
        alert("O campo Estado é obrigatório!");
        correto = false;
    }

    if(document.getElementById("endereço").value=="") {
        alert("O campo endereço é obrigatório!");
        correto = false;
    }

    if(document.getElementById("municipio").value=="") {
        alert("O campo municipio é obrigatório!");
        correto = false;
    }

    if(document.getElementById("locaçao").value=="") {
        alert("O campo Locação é obrigatório!");
        correto = false;
    }

    if(document.getElementById("tipo-natureza").value=="") {
        alert("O campo Natureza é obrigatório!");
        correto = false;
    }

    if(document.getElementById("estabelecimento").value=="") {
        alert("O campo Estabelecimento é obrigatório!");
        correto = false;
    }

    if(document.getElementById("contato2").value=="") {
        alert("O campo Contato é obrigatório!");
        correto = false;
    }
   else{
       alert("Dados alterados com sucesso")
   }
    
     return correto;
    }