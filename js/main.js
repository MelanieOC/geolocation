const app={
  map : {
      zoom: 7,
      center: {lat: -16.3988900, lng: -71.5350000},
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl:false
  },

  buscar: function (){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(app.funcionExito,app.funcionError);
      }
  },
  latitud:null,
  longitud: null,
  funcionExito : function(posicion){
      app.latitud = posicion.coords.latitude;
      app.longitud= posicion.coords.longitude;

      var miUbicacion = new google.maps.Marker({
          position: {lat:app.latitud, lng:app.longitud},
          animation: google.maps.Animation.DROP,
          map: app.map
      });

      app.map.zoom=17;
      app.map.centerr={lat:app.latitud,lng:app.longitud};
  },

  funcionError : function(error){
      alert("Tenemos un problema con encontrar tu ubicación");
  },
  iniciar: function () {
    var map = new google.maps.Map($("#map")[0],app.map);
    $("#encuentrame")[0].addEventListener("click",app.buscar);
  }


}
function initMap(){
    app.iniciar();

}
