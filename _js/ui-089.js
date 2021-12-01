window.onload = function() {
    document.getElementById("novasenha").onsubmit = tratarCampos;
}

    tratarCampos = function()   {
        var temErro = false;
        var campos = new Array("senha", "confirme");

        for(x=0;x < campos.length; x++) {
            if (document.getElementById(campos[x]).value=="") {
                temErro = true;
                alert("Todos os campos devem ser preenchidos");
            }
        }
        return !temErro;
    }