function validar(){
    var name = form.name.value;
    var mail = form.mail.value;
    var civa = form.civa.value;
    var date = form.date.value;
    var ident = form.ident.value;
    var pais = form.pais.value;
    var crm = form.crm.value;
    var contact = form.contact.value;


    if(name == ""){
        alert("Campo nome obrigatório!");
        name.focus();
        return false;
    }
    if(civa == ""){
        alert("Campo civa obrigatório!");
        civa.focus();
        return false;
    }
    if(date == ""){
        alert("Campo date obrigatório!");
        date.focus();
        return false;
    }
    if(ident == ""){
        alert("Campo identidade obrigatório!");
        ident.focus();
        return false;
    }
    if(pais == ""){
        alert("Campo endereço obrigatório!");
        pais.focus();
        return false;
    }
    if(crm == ""){
        alert("Campo País de origem obrigatório!");
        crm.focus();
        return false;
    }
    if(mail == ""){
        alert("Campo email obrigatório!");
        mail.focus();
        return false;
    }
    if(contact == ""){
        alert("Campo contato obrigatório!");
        contact.focus();
        return false;
    }
}