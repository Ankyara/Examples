// let document = window.document;

/* -------------------------------------------------------------------------- */
/*                                   DOOM 1                                   */
/* -------------------------------------------------------------------------- */

// let boton1 = document.getElementById("botonUno"); // () -> va el id en gral

// function uno(){
//     console.log("Hice click en Uno");
// }

// boton1.addEventListener("click", uno); 

// boton1.addEventListener("mouseenter", () => console.log("Ingrese al boton"))


/* funcion addEventListener -> aplica a todos los obj del DOOM (pag HTML)
2 parámetros -> evento posible (click) / función asociada (nombre de la función)
-> cuando se haga click...pasa esto
callback -> nomre de la funcion - recibe como parámetro una función

() => console.log("Ingrese al boton")) -> es la definición de la función */


/* -------------------------------------------------------------------------- */
/*                          Elementos dentro del DOOM                         */
/* -------------------------------------------------------------------------- */

// let cuerpoDocumento = document.body;
// cuerpoDocumento.style.backgroundColor = "lightgreen";

// let lis = document.getElementsByTagName("li"); // seleccionar por name

// //* item de lista 2 / lis -> HTMLCollection
// lis[2].style.border = "black solid 3px";
// lis[2].style.padding = "2%";
// lis[2].style.listStyleType = "none";
// lis[2].style.backgroundColor = "orange";


// let arreglo = Array.from(lis); // convertir en array

// arreglo.forEach(element => {
//     element.style.color = "white";
//     element.style.listStyleType = "none";
// });


// //* destacados -> HTMLCollection / seleccionar x class
// let destacados = document.getElementsByClassName("destacado");

// //* inputs-> NodeList / seleccionar x selector
// let inputs = document.querySelectorAll("input");

// //* nombre -> NodeList / seleccionar x name
// let nombre = document.getElementsByName("nombre"); 

// //* nom -> / ?
// let nom = document.querySelector('input[name="nombre"]');

// //* titulo / seleccionar x id #
// let titulo = document.querySelector("#titulo"); 

// //* cambiar el texto del titulo
// titulo.textContent = "Cambiando el titulo";


/* -------------------------------------------------------------------------- */
/*                         Botón Azul - cambiar fondo                         */
/* -------------------------------------------------------------------------- */


// let botonAzul = document.getElementById("botonAzul");
// let cuerpoDocumento = document.body;


// botonAzul.addEventListener("click",() => cuerpoDocumento.style.backgroundColor = "Blue");


/* -------------------------------------------------------------------------- */
/*                            Crear elementos DOOM                            */
/* -------------------------------------------------------------------------- */

// let cuerpo = document.body;

// let div = document.createElement("div");

// div.style.padding = "10px";
// div.style.backgroundColor = "red";
// div.style.textAlign = "center";

// div.id  = "divUno";

/* -------------------------------------------------------------------------- */

// let titulo = document.createElement("h1");

// titulo.innerText = "Titulo de la Aplicación";

// cuerpo.appendChild(div);

// div.appendChild(titulo);

// let prueba = document.getElementById("divUno");


/* -------------------------------------------------------------------------- */
/*                           Validación Formularios                           */
/* -------------------------------------------------------------------------- */
console.clear();


let nombre = document.getElementById("nombre");
let form = document.getElementById("formulario");

let regex;

/* -------------------------------- Ejemplo1 -------------------------------- */
//* no se ejecuta hasta que no se haga click/ejecute submit. Evento del formulario

/* form.addEventListener("submit", (evento) => {

    evento.preventDefault(); // cancela lo que hace el submit automáticamente

    regex= /@/;

    if(regex.test(nombre.value)) {
        console.log("Enviando el Formulario");
    } else {
        console.log("Dato inválido")};
    });
*/

/* --------------- Ejemplo2 (lo mismo pero de distinta forma) --------------- */

// form.addEventListener("submit", (evento)=>{

//     evento.preventDefault();

//     regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/gi;

//     // if(nombre.value.includes("@")){
//     //     console.log("Enviando el Formulario");
//     // } else {
//     //     console.log("Dato inválido");
//     // }

//     let valor = nombre.value;

//     if(regex.test(valor)){
//         console.log("Enviando el Formulario");
//     } else {
//         console.log("Dato inválido");
//     }
// } )


// evento / e / ev
// expresion regular -> de búsqueda -> / /



/* -------------------------------------------------------------------------- */
/*                     ASINCRONÍA - EJECUCIÓN EN 2° PLANO                     */
/* -------------------------------------------------------------------------- */

console.clear()

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log("Hola")

/* -------------------------------------------------------------------------- */
// console.log(1)
// console.log(2)

// window.setTimeout(function() {
//     console.log("Hola")
// }, 3000)

// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)


// el "hola" se ejecuta después de 3 segundos, ejecución en segundo plano
// el código se sigue ejecutando y después de los 3 seg, se ejecuta el "hola"

/* -------------------------------------------------------------------------- */

// var xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

// xhr.open("get", "archivo.txt");
// console.log(xhr.readyState);

// xhr.send();
// console.log(xhr.readyState);

// // setTimeout(() =>{
// //     console.log("Texto recibido: " + xhr.responseText)
// // }, 5000);

// xhr.addEventListener("readystatechange", () => {
//     if(xhr.readyState ==4){
//         console.log("Texto recibido: " + xhr.responseText);
//     }
// })

//open -> que quiero hacer y donde lo busque (dirección)
// send -> donde lo mando

/* -------------------------------------------------------------------------- */

var xhr = new XMLHttpRequest();
xhr.open("get", "archivo.txt");

console.log(xhr.readyState);

xhr.addEventListener("readystatechange", () => {
    console.log(xhr.readyState);
    if(xhr.readyState ==4){
        console.log("Texto recibido: " + xhr.responseText);
    }
})

xhr.send();

/* -------------------------------------------------------------------------- */

