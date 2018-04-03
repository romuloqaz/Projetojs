$(document).ready(function masktel9d(){
    var maskTel9d = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {onKeyPress: function(val, e, field, options) {
                field.mask(maskTel9d.apply({}, arguments), options);
            }
        };
    $('.telefone').mask(maskTel9d, options);
});

$(document).ready(function maskcpf(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
});

$(document).ready(function maskcep(){
    $('.cepz').mask('00000-000');
});

$(document).ready(function maskdata(){
    $('.nascimentz').mask('00/00/0000');
});
