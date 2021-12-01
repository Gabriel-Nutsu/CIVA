window.onload = function() {
	document.getElementById('form1').onsubmit = tratarCamposAvancado;
} 
 
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

tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var elements = document.getElementById("form1").getElementsByTagName("input");	
	// var campos = new Array("div1", "div2", "div3", "div4", "location", "nature");
	

		
	for(x = 0; x < elements.length; x++) {
		if (document.getElementById(elements[x].id).value=="") {
			camposErro = camposErro + elements[x].id + ",";
			temErro = true;
		}		
	}
	
	
	if(!temErro){
		alert("Alterações feitas com sucesso!")
	} 

	if (temErro) {
		camposErro = camposErro.substr(0,camposErro.length-1);
		alert("O(s) campo(s) "+ camposErro +" é(são) obrigatório(s)");
	}
	
	

	return !temErro;

}


