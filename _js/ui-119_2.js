window.onload = function() {
    document.getElementById("voltar").onclick = mensagem ;
    document.getElementById("form1").onsubmit = campos ;

}

mensagem = function(){
alert("Dados preenchidos não serão salvos")


}

campos = function(){
var correto = true;

if (document.getElementById("idpais").value ==""){
    alert("campo ID País está vazio");
    correto = false;
}

if (document.getElementById("pais").value ==""){
    alert("campo País está vazio");
    correto = false;

}

if (document.getElementById("orgao").value ==""){
    alert("campo Orgão de saúde está vazio");
    correto = false;
}

if (document.getElementById("cont").value ==""){
    alert("campo Continente está vazio");
    correto = false;
}

if (document.getElementById("contato").value ==""){
    alert("campo Padrão de Contato está vazio");
    correto = false;
}

if (document.getElementById("fuso").value ==""){
    alert("campo Fuso Horário está vazio");
    correto = false;
}

if (document.getElementById("docpc").value ==""){
    alert("campo Documentação PC está vazio");
    correto = false;
}

if (document.getElementById("docps").value ==""){
    alert("campo Documentação PS está vazio");
    correto = false;
}    

return correto;


}
