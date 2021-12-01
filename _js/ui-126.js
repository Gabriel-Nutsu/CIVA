
window.onload = function() {
    document.getElementById("dados").onsubmit = tratarCamposAvancado;
}
tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var campos = new Array("contato","email","cargo","origem","idUser","nasc","nCiva","nCompleto");
		
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

