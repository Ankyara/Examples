// //* --------------------- Variables --> var / const / let -------------------- *//

// /* -------------------------------------------------------------------------- */
// /*                                   Strings                                  */
// /* -------------------------------------------------------------------------- */

// let nombre= "Romina";
// let apellido= "Doval";

// let nombreCompleto= nombre + " " + apellido;

// console.log (nombreCompleto)
// console.log (nombre, apellido)

// //* Concatenar
// console.log("Mi nombre es " + nombre + " y mi apellido es " + apellido);

// console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);

// /* -------------------------------------------------------------------------- */
// /*                                   Números                                  */
// /* -------------------------------------------------------------------------- */

// var numero1 = 6;
// var numero2 = 8;
// let suma = numero1 + numero2;

// console.log(suma)

// //* Aparece en el documento (página web)
// document.write("La suma de numero1 y numero2 es" + " " + suma)

/* -------------------------------------------------------------------------- */
/*                     Sentencias Condicionales - If/Else                     */
/* -------------------------------------------------------------------------- */

// let edad;
// let genero;

// edad = prompt("Ingrese su edad");
// genero = prompt("Ingrese su género");

// if(edad >= 18){
//     console.log("Es mayor de edad");
// }else{
//     console.log("Es menor de edad");
// }

/* -------------------------------------------------------------------------- */

// let edad=18;

// if (edad > 0 && edad < 18) {
//     console.log("Es menor de edad");
// } else if (edad >= 18 && edad < 110){
//     console.log("Es mayor de edad");
// } else {
//     console.log("Edad inexistente");
// }

/* -------------------------------------------------------------------------- */

//* && -> Y   / || -> O

// let edad=65;
// let genero='M';

// if ((edad >= 60 && genero == 'F') || (edad >= 65 && genero == 'M')){
//     console.log("Puede jubilarse")
//     alert("Puede jubilarse")
// } else {
//     console.log("No puede jubilarse")
//     alert("No puede jubilarse")
// }

/* -------------------------------------------------------------------------- */

let mayor;
console.log("El número mayor es ");

let num3 = 25, num4 = 18;

if (num3 > num4) {
  mayor = num3;
} else {
  mayor = num4;
}
