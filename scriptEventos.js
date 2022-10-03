// SINTAXIS DE  css utilizando el SELECTOR querySelector 
// Etiqueta=  h1 {color:red}    o  ("h1")
//Clase=     .parrafo2  { }  o     (".parrafo2 ")
// Id=       #parrafo3 {  }   o  ("#parrafo3")


//event.preventDefault();   ---- METODO para prevenir eventos por defecto como el submit del ultimo button del formulario el cual se envia la info del ultimo boton como un submit por defecto
// event es el parametro de una funcion



// SELECION DE ETIQUETAS

const h1 = document.querySelector ("h1")

const input1 = document.querySelector ("#number1")
const input2 = document.querySelector ("#number2")
const btn = document.getElementById ("btn")
let resultado = document.getElementById ("resultado")

btn.addEventListener ("onclick", suma )
function suma (){

   let sumar = parseInt(input1.value)  + parseInt(input2.value)   //.parseInt - pasar de tipo string a tipo numerico el valor   // .value es importante para sacar los valore y sumarlos y no los objetos tipo input
   let resultadoFinal= ( "Resultado:  " + sumar)
   resultado.innerHTML =  resultadoFinal
}


input1.addEventListener("copy", myFunction);

function myFunction() {
  alert("You copied text!");
}