window.onload = function() {
    document.getElementById("vacinacao").onsubmit = tratarCamposAvancado;
}

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


tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var campos = new Array("id-de-vacinação", "dose", "vacina", "laboratorio", "data-de-aplicação", "pais-de-origem", 
	"id-ponto-de-vacinacao", "ponto-vacinacao", "num-civa-profissional", "lote",);
		
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
		alert("Dados alterados com sucesso!")
	}
}

//"nome","num-civa", "data-de-nascimento", "identidade","endereco-portador","pais-de-origem","email","contato"

