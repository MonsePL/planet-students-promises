function getJSON(url){
  return new Promise (function(resolve, reject){
    var ajax = new XMLHttpRequest();
    ajax.open ("GET", url);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4){
        resolve (JSON.parse(ajax.responseText))
      }

    }
  })
}
var plantilla =   '<div class="row">'+
                    '<div class="col s12 m7">'+
                      '<div class="card">'+
                        '<div class="card-image">'+
                          '<img src="assets/img/__nombreplaneta__.jpg">'+
                          '<span class="card-title">__CardTitle__</span>'+
                        '</div>'+
                        '<div class="card-content">'+
                          '<a>__link__</a>'+
                          '<p>__telescope__</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>';

function imprimirplantilla() {

}
imprimirplantilla();

getJSON("data/earth-like-results.json")
.then(function(mensaje){return(getJSON(mensaje.results[0]))})
.then(function(resultado){
  var plantillaFinal = plantilla.replace('__nombreplaneta__', "planeta").replace('__CardTitle__', resultado.pl_name).replace('__link__', resultado.pl_pelink).replace('__telescope__', resultado.pl_telescope);
  var contenedor = $("#cajaplanetas");
  contenedor.html(plantillaFinal)
})
