
function validaCampo()
{
if(document.cadastro.nome.value=="")
{
alert("O Campo nome é obrigatório!");
return false;
}
else
if(document.cadastro.email.value=="")
{
alert("O Campo email é obrigatório!");
return false;
}
if(document.cadastro.cpf.value=="")
{
alert("O Campo CPF é obrigatório!");
return false;
}
else
if(document.cadastro.endereco.value=="")
{
alert("O Campo endereço é obrigatório!");
return false;
}
else
if(document.cadastro.bairro.value=="")
{
alert("O Campo Bairro é obrigatório!");
return false;
}
else
if(document.cadastro.pais.value=="")
{
alert("O Campo país é obrigatório!");
return false;
}
else
if(document.cadastro.login.value=="")
{
alert("O Campo Login é obrigatório!");
return false;
}
else
if(document.cadastro.senha.value=="")
{
alert("Digite uma senha!");
return false;
}
else
return true;
}
// <!-- Fim do JavaScript que validará os campos obrigatórios! -->


// javascript referente ao mapa

function initMap() { /* A função initMap inicializa e adiciona o mapa quando a página da Web carrega. S*/
    var local = {lat: -6.883712399999999, lng: -38.5573006}; /* Longitute e latituade */
    var map = new google.maps.Map(document.getElementById('map'), { /*Adiciona um novo objeto do Google Maps para construir um mapa no elemento div.*/
       zoom: 4,
       center: local  /*A propriedade center informa a API a localização do ponto central do mapa. */
   });
       var marker = new google.maps.Marker({ /* Adiciona um marcador no mapa e O position propriedade define a posição do marcador.*/
       position: local,
       map: map
   });
}
    