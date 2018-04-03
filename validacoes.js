function validarCpf(cpf) {
    var expReg2 = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2} $/;
    if(expReg2.test(cpf) != false)return true;
    else return false;
}

function validarTelefone(telefone){
    var expRegT = /^\([0-9]{2}\) [0-9]{4,5}\-?[0-9]{4}$/;
    if(expRegT.test(telefone) != false)return true;
    else return false;
}

function validarData(data) {
    var expRegD = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    if(expRegD.test(data) != false)return true;
    else return false;
}

function validarCep(cep){
    var expRegC = /^[0-9]{5}\-?[0-9]{3}$/;
    if(expRegC.test(data) != false)return true;
    else return false;
}

function validarRg(rg){
    //DISNEY WORLDS
}

