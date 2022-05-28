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

// let ubicacionTorneo=3;

// if (ubicacionTorneo ==1) {
//   console.log("Medalla de Oro")
// } else if (ubicacionTorneo == 2) {
//     console.log("Medalla de Plata");
//   } else if (ubicacionTorneo == 3){
//     console.log("Medalla de Bronce");
//   } else {
//     console.log("No ha conseguido medalla");
//   }


/* -------------------------------------------------------------------------- */

// let numero = 1;

// if (numero == 1) {
//   console.log("Uno");
// } else if (numero == 2) {
//   console.log("Dos");
// } else if (numero == 3) {
//   console.log("Tres");
// } else if (numero == 4) {
//   console.log("Cuatro");
// } else {
//   console.log("Número incorrecto");
// }


 /* -------------------------------------------------------------------------- */
 /*                             && -> Y   / || -> O                            */
 /* -------------------------------------------------------------------------- */

// let edad = prompt("Edad (sólo números)?");
// let genero = prompt("Género (M/F)?");

// if ((edad >= 60 && genero == 'F') || (edad >= 65 && genero == 'M')){
//     console.log("Puede jubilarse")
//     alert("Puede jubilarse")
// } else {
//     console.log("No puede jubilarse")
//     alert("No puede jubilarse")
// }


/* ---------------------- Operador condicional / ternario --------------------- */
/* ----------------------    condición ? expr1 : expr2    --------------------- */


// let mayor;
// let num1, num2;

// num1 = 6;
// num2 = 8;

// console.log("El número mayor es ");

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// mayor = num1 > num2 ? num1 : num2; //* operador ternario


/* --------------------------------- Ejemplo x -------------------------------- */

// let mayor; 
// let num1, num2;

// num1= 16;
// num2= 8;

// console.log("El mayor es ");

// if (num1 > num2){
//   mayor = num1;
// } else {
//   mayor = num2;
// }
// console.log (mayor);

/* -------------------------------- Ternario x -------------------------------- */

// let mayor; 
// let num1, num2;

// num1= 16;
// num2= 8;

// console.log("El mayor es ");

// mayor = num1 > num2 ? num1 : num2; //* operador ternario

// console.log (mayor);


/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */

// let numero=5

// switch (numero) {
//     case 1: console.log("Uno");
//             break;
//     case 2: console.log("Dos");
//             break;
//     case 3: console.log("Tres");
//             break;
//     case 4: console.log("Cuatro");
//             break;
//     default: console.log("Número incorrecto");
// }

// console.log("Despues del switch")


/* -------------------------------------------------------------------------- */

// let day;

// switch (new Date().getDay()) {
//     case 0:
//       day = "Domingo";
//       break;
//     case 1:
//       day = "Lunes";
//       break;
//     case 2:
//        day = "Martes";
//       break;
//     case 3:
//       day = "Miércoles";
//       break;
//     case 4:
//       day = "Jueves";
//       break;
//     case 5:
//       day = "Viernes";
//       break;
//     case 6:
//       day = "Sábado";
//       break;
//     default: day = "Inexistente"  
//   }
  
// console.log(day);


/* -------------------------------------------------------------------------- */
/*                        WHILE / Estructuras Cíclicas                       */
/* -------------------------------------------------------------------------- */

// let i = 1;

// console.log("Antes del While");

// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

// console.log("Después del While");

/* -------------------------------------------------------------------------- */

// let i = 1;

// do {
//   console.log(i);
//   i = i + 1;
// } while (i <= 3);

/* -------------------------------------------------------------------------- */

// let i = 0;

// do {
//   i = i + 1;
//   console.log(i);
// } while (i < 3);

/* -------------------------------------------------------------------------- */
/*                         FOR / Estructuras Cíclicas                         */
/* -------------------------------------------------------------------------- */

// for (let j=1; j <= 3; j=j+1){
//   console.log("J" + j);
// }

/* -------------------------------------------------------------------------- */
/*                                  Contador                                  */
/* -------------------------------------------------------------------------- */

let contador = 0;

contador = contador + 1;

contador ++;
contador --;
++contador;
--contador;

/* -------------------------------------------------------------------------- */





