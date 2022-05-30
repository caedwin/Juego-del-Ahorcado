// ### VARIABLES ###
var palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];// Array de palabras
var palabra = "";// Palabra a averiguar
var rand;// Nº aleatorio
var oculta = [];// Palabra oculta
var hueco = document.getElementById("palabra");// Elemento html de la palabra
var cont = 9;// Contador de intentos
var buttons = document.getElementsByClassName('letra');// Botones de letras
var btnInicio = document.getElementById("btnReset");// Boton de reset
var btnSalir = document.getElementById("btnSalir"); // Boton Salir
var barraProgreso = document.getElementById('barraProgreso');//barra de progreso
var prendido = 'visible' ; apagado = 'hidden';
var piso = document.getElementById('imgPiso');
var btnAgregar = document.getElementById('btnAgregar');
var btnPista = document.getElementById("pista");

// ### FUNCIONES ###
var imgPortada = document.getElementById('imgPortada');
var btnCrearPalabras = document.getElementById('btnCrearPalabras');
var intenros = document.getElementById('intenros');
var btnPista = document.getElementById('btnPista');

function pantallaPrincipal(){
  imgPortada.style.visibility = prendido;
  btnCrearPalabras.style.visibility = prendido;
  btnInicioJuego.style.visibility = prendido;
}

btnInicioJuego.addEventListener('click',function(){

  inicio();
});

var textAgregarPalabra = document.getElementById('textAgregarPalabra');
var historialPalabras = document.getElementById('historialPalabras');

btnCrearPalabras.addEventListener('click', function(){
  textAgregarPalabra.style.visibility = prendido;
  historialPalabras.style.visibility = prendido;
  imgPortada.style.visibility = apagado;
  btnCrearPalabras.style.visibility = apagado;
  btnInicioJuego.style.visibility = apagado;
  btnSalir.style.visibility = prendido;
  btnAgregar.style.visibility = prendido;
  btnInicio.style.visibility = prendido;
  btnInicio.innerHTML = 'Jugar Partida'
  historialPalabras.value = palabras.join(' - ');
});

btnAgregar.addEventListener('click', function(){
  AgregarPalabra();
});



function AgregarPalabra(){
  if(textAgregarPalabra.value == ""){
    alert('El campo esta en blanco, agregue una nueva palabra')
    textAgregarPalabra.focus();
    return;
  }
  textoNuevo = textAgregarPalabra.value.toUpperCase();
  palabras.push(textoNuevo);
  historialPalabras.value = palabras.join(' - ');
  textAgregarPalabra.value = "";
  textAgregarPalabra.focus();
}

function juegoPreparado(){
  barraProgreso.style.visibility = prendido;
  barraProgreso.value = 100;
  btnSalir.style.visibility = prendido;
  piso.style.visibility = prendido;
  btnReset.style.visibility = prendido;
  intenros.style.visibility = prendido;
  intentos.style.visibility = prendido;
  palabraPista.innerHTML = ""
  btnPista.style.visibility = prendido;
  btnCrearPalabras.style.visibility = apagado;
  imgPortada.style.visibility = apagado;
  btnInicioJuego.style.visibility = apagado;
  cont = 9;
  intentos.innerHTML=cont;
}

// Escoger palabra al azar
function generaPalabra() {
  rand = (Math.random() * palabras.length).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  oculta = [];
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  };
  hueco.innerHTML = oculta.join("");
};

//Generar abecedario
tecladoVirtual = document.getElementById("abcdario");
function generaABC (a,z) {
  tecladoVirtual.innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    tecladoVirtual.innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      tecladoVirtual.innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    };
  };
};

// Chequear intento
var intentos =  document.getElementById("intentos");
var mensaje = document.getElementById("acierto");
var btnReset =  document.getElementById("btnReset");
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    };
    hueco.innerHTML = oculta.join("");
    mensaje.innerHTML = "Bien!";
    mensaje.className += "acierto verde";
  }else{
    cont--;
    if(cont == 8){
      mastil.style.visibility = prendido;
      piso.style.visibility = prendido;
    };
    if(cont == 7){
      mastilCompleto.style.visibility = prendido;
      mastil.style.visibility = apagado;
    };
    if(cont == 6){
      mastilCompleto.style.visibility = apagado;
      soga.style.visibility = prendido;
    };
    if(cont == 5){
      cabeza.style.visibility = prendido;
      soga.style.visibility = apagado;
    };
    if(cont == 4){
      cabeza.style.visibility = apagado;
      cuerpo.style.visibility = prendido;
    };
    if(cont == 3){
      bDerecho.style.visibility = prendido;
      cuerpo.style.visibility = apagado;
    };
    if(cont == 2){
      bDerecho.style.visibility = apagado;
      bIzquierdo.style.visibility = prendido;
    };
    if(cont == 1){
      pDerecha.style.visibility = prendido;
      bIzquierdo.style.visibility = apagado;
    };
    if(cont == 0){
      
      pDerecha.style.visibility = apagado;
      pIzquierda.style.visibility = prendido;
      intentos.innerHTML=0;
      barraProgreso.value = 100;
      fondoFinJuego.style.visibility = prendido;
      fondoMensaje.style.visibility = prendido;
      imgPerdedor.style.visibility = prendido;
      textoPerdedor.style.visibility = prendido;
      textoPerdedor2.style.visibility = prendido;
      palabraPista.innerHTML = 'la palabra correcta era: ' + palabra;
    
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      };
      btnReset.innerHTML = "Seguir Jugando";
      
      
      return;
    };
    
    if (cont <=9){
      contador = cont*10;
      barraProgreso.value = contador;

    };
    intentos.innerHTML = cont;
    mensaje.innerHTML = "Fallo!";
    mensaje.className += "acierto rojo"; 
  };
  compruebaFin();
  setTimeout(function () { 
    mensaje.className = ""; 
  }, 800);
};

// Obtener pista
var palabraPista = document.getElementById("hueco-pista");
function pista() {
  palabraPista.innerHTML = palabras[rand][1];
};

var fondoFinJuego = document.getElementById('fondo');
var fondoMensaje = document.getElementById('fondoMensaje');
var imgGanador = document.getElementById('imgGanador');
var textoGanador = document.getElementById('texto-Ganador');
var textoGanador2 = document.getElementById('texto-Ganador2');
var imgPerdedor = document.getElementById('imgPerdedor');
var textoPerdedor = document.getElementById('texto-Perdedor');
var textoPerdedor2 = document.getElementById('texto-Perdedor2');

// Compruba si ha finalizado
function compruebaFin() {
  
  if( oculta.indexOf("_") == -1 ) {
    
    fondoFinJuego.style.visibility = prendido;
    fondoMensaje.style.visibility = prendido;
    imgGanador.style.visibility = prendido;
    textoGanador.style.visibility = prendido;
    textoGanador2.style.visibility = prendido;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    btnInicio.innerHTML = "Nuevo Juego";
    
    
  }; 
  
};

function limpiar(){
  textAgregarPalabra.style.visibility = apagado;
  historialPalabras.style.visibility = apagado;
  btnAgregar.style.visibility = apagado;
  fondoFinJuego.style.visibility = apagado;
  fondoMensaje.style.visibility = apagado;
  textoGanador.style.visibility = apagado;
  textoGanador2.style.visibility = apagado;
  imgGanador.style.visibility = apagado;
  imgPerdedor.style.visibility = apagado;
  textoPerdedor.style.visibility = apagado;
  textoPerdedor2.style.visibility = apagado;
  mastil.style.visibility = apagado;
  mastilCompleto.style.visibility = apagado;
  soga.style.visibility = apagado;
  cabeza.style.visibility = apagado;
  cuerpo.style.visibility = apagado;
  bDerecho.style.visibility = apagado;
  bIzquierdo.style.visibility = apagado;
  pDerecha.style.visibility = apagado;
  pIzquierda.style.visibility = apagado;
  btnInicio.innerHTML = 'Otra Palabra';


}

// Restablecer juego
function inicio() {
  juegoPreparado();
  generaPalabra();
  pintarGuiones(palabra.length);
  generaABC("a","z");
  limpiar(); 
}

btnSalir.addEventListener('click',function(){
location.reload();
})

// Iniciar
window.onload = pantallaPrincipal();