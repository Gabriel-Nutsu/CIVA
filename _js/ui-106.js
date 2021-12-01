// Menu lateral navegação
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


// Verificação de campos vazio

_$ = function(obj){
    return document.getElementById(obj);
}

window.onload = function() {
	_$("form1").onsubmit = tratarCamposAvancado;
}


tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	
		
	for(x = 0; x < elements.length; x++) {
		if (_$(elements[x].id).value=="") {
			camposErro = camposErro + elements[x].id + ",";
			temErro = true;
		}		
	}
	
	
	if (temErro) {
		camposErro = camposErro.substr(0,camposErro.length-1);
		alert("O(s) campo(s) "+ camposErro +" é(são) obrigatório(s)");
	}
	
	if(!temErro){
		alert("Dados alterados com sucesso!")
	}

	return !temErro;

}
var elements = document.getElementsByTagName("input")
var element = new Array(elements)