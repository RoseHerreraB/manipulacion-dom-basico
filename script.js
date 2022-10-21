// En css
// Etiqueta=  h1 {color:red}
//Clase=     .parrafo2  { }
// Id=       #parrafo3 {  }

const h1 = document.querySelector ("h1")
const p = document.querySelector ("p")
const parrafo2 = document.querySelector (".parrafo2")
const parrafo3 = document.querySelector ("#parrafo3")
const input = document.querySelector ("input")

//crear objeto con etiquetas html
console.log({
    h1,             
    p,
    parrafo2,
    parrafo3,
    input
})

h1.innerHTML= "hola mundo </br> esto es manipulacion del DOM"  // se muestra solo el texto y NO las etiquetas HTML
h1.innerText= "hola mundo </br> esto es manipulacion del DOM"  // se muestra en la pagina todo como un texto incluyendo las etiquetas

//console.log(h1.getAttribute("class"))  // el GET se encarga de recibir un valor en este caso el valor de la clase del h1
//h1.setAttribute('class','rojo')  // cambiar el atributo de la clase actual por el nombre de rojo

h1.classList.add('rojo')  // classList hace referencia a la clase y .add = agrega otra clase llamada rojo sin eliminar la anterior
h1.classList.remove('titulo1')   //.remove elimina la clase indicada
//h1.classList.toggle('titulo1')    // grega otra clase llamada rojo sin eliminar la anterior BUSCAR MAS INFO
//h1.classList.contains('titulo1') //?

input.value="123"


// ------- CREAR ELEMENTO --- ETIQUETAS NUEVAS DE HTML 

const img= document.createElement("img")  // crar el elemnto y guardarlo en una variable
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png')

parrafo3.innerHTML=  " "      // TRUCO- Para eliminar lo que estaba en el parrafo3 , dejarlo en blanco y luego poder agregar la imagen
parrafo3.appendChild(img)