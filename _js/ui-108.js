// Menu lateral navegação



// Verificação de senhha

conferir_id = function(obj){
    return document.getElementById(obj);
}

tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var elements = document.getElementById("form1").getElementsByTagName("input");	
	

		
	for(x = 0; x < elements.length; x++) {
		if (document.getElementById(elements[x].id).value=="") {
			camposErro = camposErro + elements[x].id + ",";
			temErro = true;
		}		
	}
	if(conferir_id("password")!=null){
		if (conferir_id("password").value != conferir_id("password2").value ){
			temErro = true;
			alert("Senhas diferentes, não é possível prosseguir")
		}

		if ((conferir_id("password").value.length||conferir_id("password2").value.length) <7){
			temErro = true;
			alert("Senha deve possuir mais de 6 caracteres")
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





window.onload = function(){
    conferir_id("form1").onsubmit = tratarCamposAvancado;
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



// // BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
// const btnToggle = document.querySelector('.toggle-btn')
// const toggleName = document.querySelector('.toggle-name')

// btnToggle.onclick = event => {


// btnToggle.classList.toggle('active-toggle')

// if(btnToggle.classList == 'toggle-btn'){

//     toggleName.textContent = 'Ativado' 

// }  else { 

// toggleName.textContent = 'Desativado'

// }
// }
 

