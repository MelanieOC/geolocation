function initMap(){
    var map = new google.maps.Map($("#map")[0],{
        zoom: 7,
        center: {lat: -16.3988900, lng: -71.5350000},
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl:false
    });

    function buscar(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
        }
    }

    $("#encuentrame")[0].addEventListener("click",buscar);
    var latitud,longitud;

    var funcionExito = function(posicion){
        latitud = posicion.coords.latitude;
        longitud= posicion.coords.longitude;

        var miUbicacion = new google.maps.Marker({
            position: {lat:latitud, lng:longitud},
            animation: google.maps.Animation.DROP,
            map: map
        });

        map.setZoom(17);
        map.setCenter({lat:latitud,lng:longitud});
    }
    
    var funcionError = function(error){
        alert("Tenemos un problema con encontrar tu ubicación");
    }
}


