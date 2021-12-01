// Verificação de senhha

window.onload = function() {
    document.getElementById("botão").onclick = mensagem;
    document.getElementById("form1").onsubmit = tratarCampos;

}

mensagem = function () {
    alert("Cadastro Cancelado");
}

tratarCampos = function() {
    var correto = true;

    if (document.getElementById("país").value=="") {
        alert("Campo país está vazio.")
        correto = false;
    }

    if (document.getElementById("doc ps").value=="") {
        alert("Campo Documentação PC está vazio.")
        correto = false; 
    }

    if (document.getElementById("orgão").value==""){
        alert("Campo Orgão de Saúde está vazio.")
        correto = false;
    }
    
    if (document.getElementById("doc ps").value==""){
        alert("Campo Documentação Ps está vazio.")
        correto = false;
    }

    return correto;
}