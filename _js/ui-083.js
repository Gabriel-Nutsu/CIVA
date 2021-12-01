window.onload = function() {
    document.getElementById("cadastro-supervisor").onsubmit = tratarCamposAvancado;
}
tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var campos = new Array("nome", "identidade", "date-de-nascimento", "pais-de-origem", 
        "id-ponto", "email", "contato","senha", "confirma-senha");
		
	for(x = 0; x < campos.length; x++) {
		if (document.getElementById(campos[x]).value=="") {
			camposErro = camposErro + campos[x] + ",";
			temErro = true;
		}		
	}
	if (temErro) {
        camposErro = camposErro.substr(0,camposErro.length-1);
        alert("O(s) campo(s) "+ camposErro +" é(são) obrigatório(s)");
    }else{
        alert("Dados cadastrados com sucesso!")
    }

}

//Seleção do menu
list = document.querySelectorAll('.item-menu')

for (let i = 0; i < list.length; i++){
    list[i].onclick = function(){
         let j = 0;
         while(j < list.length){
             list[j++].className='item-menu'
         }
         list[i].className='item-menu active-item-menu'
    }
}

