/* -------------------------------------------------------------------------- */
/*                           Validación Formularios                           */
/* -------------------------------------------------------------------------- */
console.clear();

let nombre = document.getElementById("nombre");
let form = document.getElementById("formulario");

let regex;

// no se ejecuta hasta que no se haga click/ejecute submit. Evento del formulario

form.addEventListener("submit", (evento) => {

    evento.preventDefault(); // cancela lo que hace el submit automáticamente

    regex= /@/;

    if(regex.test(nombre.value)) {
        console.log("Enviando el Formulario");
    } else {
        console.log("Dato inválido")};


    });



// evento / e / ev
// expresion regular -> de búsqueda -> / /

/* -------------------------------------------------------------------------- */

// if(nombre.value.includes("@")){
//     console.log("Enviando el Formulario");
// } else {
//     console.log("Dato inválido")
// };


if(/@/.test(valor)) {
    console.log("Enviando el Formulario");
} else {
    console.log("Dato inválido")
};