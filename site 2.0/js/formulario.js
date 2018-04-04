
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



// ARMAZENAMENTO

function verificarCadastro(){
    var nome_Usuario = document.getElementById('nome').value;
    var cpf_Usuario = document.getElementById('cpf').value;
    var rua_Usuario = document.getElementById('rua').value;
    var data_Nasc_Usuario = document.getElementById('data').value;
    var bairro_Usuario = document.getElementById('bairro').value;
    var numero_Usuario = document.getElementById('numero_casa').value;
    var telefone_Usuario = document.getElementById('telefone').value;
    var cep_Usuario = document.getElementById('cep').value;
    var rg_Usuario = document.getElementById('rg').value;
    var email_Usuario = document.getElementById('email').value;
    var senha_Usuario = document.getElementById('senha').value;
    var foto_Usuario = document.getElementById('foto_perfil').value;
    if((nome_Usuario != "") && (cpf_Usuario!="") && (rua_Usuario!="") && (data_Nasc_Usuario!="") && (bairro_Usuario!="")&&(numero_Usuario!="")&&(telefone_Usuario!="")&&(cep_Usuario!="")&&(rg_Usuario!="")&&(email_Usuario!="")&&(senha_Usuario!="")){
        armazenarDados(email_Usuario,senha_Usuario);
    }else{
        alert("Campos necessários não foram preenchidos");
    }
}

function armazenarDados(email_Usuario,senha_Usuario){
    var info = [email_Usuario,senha_Usuario];
    localStorage.setItem(email_Usuario,info);
    console.log(localStorage.getItem(email_Usuario));
}

function verificarChave(usuario){
    var senha = prompt("Digite sua senha");
    console.log(usuario);
    if(senha == usuario[1]){
        alert("Usuario logado");
    }else{
        alert("Senha incorreta");
        verificarChave(usuario);
    }
}

function login(){
    var chave = prompt("Digite seu email");
    var usuario = localStorage.getItem(chave);
    if(usuario!=null){
        usuario = usuario.split(',');        
        verificarChave(usuario);
    }else{
        alert("Usuario não cadastrado");
        login();
    }
}
  //imagem do formulário
$(function () {
            $(document).on("change", ".Upload", function(e) {
                showThumbnail(this.files);
    });
    
    function showThumbnail(files) {
        if (files && files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#thumbnail').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(files[0]);
        }
    }
});