
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

//var latituade;
//var longitude;



function initMap() {
     /* A função initMap inicializa e adiciona o mapa quando a página da Web carrega. S*/
    
    var local = {lat:-6.8898741999999995, lng: -38.544510599999995}; /* Longitute e latituade */
    var map = new google.maps.Map(document.getElementById('map'), { /*Adiciona um novo objeto do Google Maps para construir um mapa no elemento div.*/
       zoom: 4,
       center: local  /*A propriedade center informa a API a localização do ponto central do mapa. */
   });
       
   var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) { // Pede a localização/autorização
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Localização encontrada"); // informa se a localização foi encontrada
            map.setCenter(pos); // mostar a localização centralizada na tela 

            var marker = new google.maps.Marker({ /* Adiciona um marcador no mapa e O position propriedade define a posição do marcador.*/
                position: pos,
                map: map
            });    
        });

        

    } else {
        alert("Geolocation is not supported by this browser.");
    }      

}
  
