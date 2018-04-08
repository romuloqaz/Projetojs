function validarCampos() {
    if (document.getElementById('nome').value == "") {
        alert("O Campo nome é obrigatório!");
        return false;
    }
    if (validarCpf(document.getElementById('cpf').value) == false) {
        alert("O Campo CPF é obrigatório!");
        return false;
    }
    if (document.getElementById('rua').value == "") {
        alert("O Campo Endereco é obrigatório!");
        return false;
    }
    if (validarData(document.getElementById('data').value) == false) {
        alert("O Campo Data de Nascimento é obrigatório!");
        return false;
    }
    if (document.getElementById('bairro').value == "") {
        alert("O Campo Bairro é obrigatório!");
        return false;
    }
    if (document.getElementById('numero_casa').value == "") {
        alert("O Campo Numero é obrigatório!");
        return false;
    }
    if (validarTelefone(document.getElementById('telefone').value) == false) {
        alert("O Campo Telefone é obrigatório!");
        return false;
    }
    if (validarCep(document.getElementById('cep').value) == false) {
        alert("O Campo CEP é obrigatório!");
        return false;
    }
    if (validarRg(document.getElementById('rg').value) == false) {
        alert("O Campo RG é obrigatório!");
        return false;
    }
}