window.onload = function() {

    var botao = document.getElementById("botao");


    botao.onclick = event => {
        checarFormulario();
    }

    function checarFormulario() {
        var entradas = document.getElementsByClassName("input-default");
        var ok = true;

        for (var i = 0; i < entradas.length; i++) {
            if (!entradas[i].value) {
                ok = false;
            }
        }
        if (ok) {
            window.alert("Dados alterados com sucesso!!")

        } else {
            window.alert("Você não preencheu todos os campos!!")

        }

    };

}