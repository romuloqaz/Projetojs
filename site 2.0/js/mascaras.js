$(document).ready(function(){
    var maskTel9d = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {onKeyPress: function(val, e, field, options) {
                field.mask(maskTel9d.apply({}, arguments), options);
            }
    };
    $('.telefone').mask(maskTel9d, options);
    $('.data').mask('00/00/0000');
    $('.cepx').mask('00000-000');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.numero').mask('0000000');
    $('.rg').mask('00.000.000-0');
});