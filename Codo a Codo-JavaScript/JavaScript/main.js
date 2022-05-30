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

// for (let j=1; j <= 3; j++){
//     console.log(j);
//   }

// let contador = 0; // 0

// contador = contador + 1; // 1

// contador ++; // 2
// contador --;

// ++contador;
// --contador;


/* -------------------------------------------------------------------------- */
/*                                 Acumulador                                 */
/* -------------------------------------------------------------------------- */

// let totalVentas = 0;

// totalVentas = totalVentas + 30;
// totalVentas = totalVentas + 56;
// totalVentas = totalVentas + 10;

// totalVentas += 30;
// totalVentas += 56;
// totalVentas += 10;

/* -------------------------------------------------------------------------- */

// let totalSuma = 100;
// totalSuma -= 30; // 100 - 30
// totalSuma = totalSuma - 30;  // 70 - 30

/* -------------------------------------------------------------------------- */

// valor = 10;

// valor = valor * 3;
// valor *= 3;

// valor = valor / 9;
// valor /= 2;


//* ------------------------------------------------------------------------- */
//*                             Arrays - Arreglos                             */
//* ------------------------------------------------------------------------- */

// let numeros = [10,2,50,26,78];
// console.log(numeros[0])

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar"];

// let varios =[1, true, "Juan"]; // puede tener elementos de distinto tipo

// const array = ["a", "b", "c"];


/* ------------------------------- Push - Pop ------------------------------- */

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar"];

// nombres.push("Marcela");
// nombres.push("Pedro", "Paula");

// nombres.pop() // elimina el último elemento que agrege y lo guarda

// let ultimoEliminado = nombres.pop();


/* ----------------------------- Unshift - Shift ---------------------------- */

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar", "Marcela"];

// nombres.unshift("Silvina");
// nombres.shift()

/* --------------------------------- Concat --------------------------------- */
//* concatena elementos pasados por parámetro

// let array = [1, 2, 3];
// array = array.concat(4,5,6);
// array = array.concat([7, 8, 9]);

/* ----------------------------- Slice - Splice ----------------------------- */
/*devuelve los elementos del array desde la posición ini hasta la posición end, 
permitiendo crear un nuevo array más pequeño con ese grupo de elementos. 
Recuerda que las posiciones empiezan a contar desde 0. 
En el caso de que no se proporcione el parámetro end, se devuelven todos los 
elementos desde la posición ini hasta el final del array. */


// let nombres = ["Fernando", "Nancy", "Ana", "Oscar", "Marcela"];

// let nombresEspeciales = nombres.slice(2,4); //devuelve "Ana" y "Oscar" 

// let nombresEliminados = nombres.splice(2, 2); 
// toma "Ana" y "Oscar", los elminina del Array original, y los guarda

/* ---------------------------------- Join ---------------------------------- */
/* Con join() podemos crear un  con todos los elementos del array, separándolo 
por el texto que le pasemos por parámetro: */

// let nombres = ["Fernando", "Nancy", "Marcela"];
// nombres.join(" - "); //ponemos directamente en la consola

// nombres = nombres.join(" - "); //para que aparezca el cambio en la consola
//  //* devuelve una cadena de strings

// ['G', 'a', 'b', 'r', 'i', 'e', 'l'].join("");//ponemos en la consola

// let nombreG = ['G', 'a', 'b', 'r', 'i', 'e', 'l'].join("");


 /* ---------------------------------- Split --------------------------------- */
 // Con split() es posible crear un  a partir de un string

//  let probando = "5.4.3.2.1".split(".");
//  let probando2 = "Gabriel".split("");



/* -------------------------------------------------------------------------- */
/*                                   OBJETOS                                  */
/* -------------------------------------------------------------------------- */
//* objetos -> {} / propiedad : valor

let persona1 = {
    nombre: "Manuel",
    apellido: "Alen",
    edad: 35,
    correo: "manuel.alen@gmail.com",
}

let persona2 = {
    nombre: "Romina",
    apellido: "Doval",
    edad: 40,
    correo: "romina.doval@gmail.com",
}

let producto1 = {
    id: 4,
    nombre: "Peine",
    precio: 600
}

/* -------------------------------------------------------------------------- */
let personas = [
    {legajo: 1, nombre: "Natalia", apellido: "Perez"},
    {legajo: 2, nombre: "Matias", apellido: "Ramirez"},
    {legajo: 3, nombre: "Delia", apellido: "Lopez"},
]

/* consola 

personas
personas[0]
personas[2]
*/

 /* -------------------------------------------------------------------------- */

 let persona4 = {
    nombre: "Ana",
    apellido: "Salcedo",
    edad: 35,
    correo: "ana.salcedo@gmail.com",
    //hobbie: "tenis"
    hobbies: ["tenis", "ajedrez", "guitarra"],

    mascota: {
        nombre: "Junior",
        tipoMascota: "Perro",
        raza: "Caniche"
    }
}

/* consola

persona4
persona4.hobbie
persona4.hobbies
persona4.mascota
*/


/* -------------------------------------------------------------------------- */


















