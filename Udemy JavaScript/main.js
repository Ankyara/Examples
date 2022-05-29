// /* -------------------------------------------------------------------------- */
// /*                    Variables y tipos de datos  - Typeof                    */
// /* -------------------------------------------------------------------------- */

// //* STRING
// var nombre = "Romina";
// console.log(nombre);
// console.log(typeof(nombre));

// //* NUMBER
// var edad = 40;
// console.log(edad);
// console.log(typeof(edad));

// //* NUMBER
// var sueldo = 1900.99;
// console.log(sueldo);
// console.log(typeof(sueldo));

// //* BOOLEAN
// var TieneTrabajo = false;
// console.log(TieneTrabajo);
// console.log(typeof(TieneTrabajo));

// //* UNDEFINED
// var puestoDeTrabajo;
// console.log(puestoDeTrabajo);

// //* NULL
// puestoDeTrabajo = null;
// console.log(puestoDeTrabajo);


// /* -------------------------------------------------------------------------- */
// /*                    OPERADORES MATEMÁTICOS  +  -  *  /  %                   */
// /* -------------------------------------------------------------------------- */

// var edadAna, edadMaria, diferenciaEdad;
// var sumaEdades, yearAna, yearMaria, yearActual;

// edadAna = 34;
// edadMaria = 28;
// yearActual = 2022;

// diferenciaEdad = edadAna - edadMaria;
// sumaEdades = edadAna + edadMaria;

// yearAna = yearActual - edadAna;
// yearMaria = yearActual - edadMaria;

// console.log(diferenciaEdad);
// console.log(sumaEdades);
// console.log('Año en que nació Ana ' + yearAna);
// console.log('Año en que nació María ' + yearMaria);
// console.log(yearActual * 5);
// console.log(yearActual / 2);


// /* -------------------------------------------------------------------------- */
// /*                 OPERADORES LÓGICOS, UNARIOS Y DE ASIGNACIÓN                */
// /* -------------------------------------------------------------------------- */

// //* ------------------------- Lógicos < > <= >= == ! ------------------------ */

// var edadAna, edadMaria, diferenciaEdad;
// edadAna = 34;
// edadMaria = 28;

// //Ejemplos
// var mayorAna = edadAna > edadMaria;
// var mayorAna = edadAna == edadMaria;
// var mayorAna = !(edadAna == edadMaria);
// console.log(mayorAna);

// //* ------------------- Unarios, ++Incremento, --Decremento ----------------- */

// //edadAna++;
// console.log(edadAna++);
// console.log(++edadAna);
// console.log(edadAna);

// //* --------------------- Asignación, +=, -=, *=, /=, %= -------------------- */

// var a = 12;
// var b = 5;

// var c = a % 5; //*Residuo o resto de una división
// console.log(c);

// a += b; // a = a + b;
// console.log(a);


// /* -------------------------------------------------------------------------- */
// /*                     SENTENCIAS Y ESTRUCTURAS DE CONTROL                    */
// /* -------------------------------------------------------------------------- */

// //* -------------------------------- IF...ELSE ------------------------------ */

// /*Ejecuta una sentencia si una condición específicada es evaluada como verdadera. 
// Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.
// Es opcional..."puede ser" ejecutada */

// var nombre = "Romina";
// var esCasado = true; // false;

// if (esCasado == true){
//     console.log(nombre + " es casada");
// } else {
//     console.log(nombre + " es soltera");
// }


//* ------------------------------- IF anidados ----------------------------- */

// si edad < 12, es un niño
// si edad > 11 y es < 18, es un adolscente
// si edad > 17 y es < 60, es un adulto
// si edad >60, es un anciano

// var nombre = "Manuel";
// var edad = 35;

// if (edad < 12) {
//     console.log(nombre + " es un niño");
// } else if ((edad > 11) && (edad < 18)) {
//     console.log(nombre + " es un adolescente");
// } else if((edad > 17) && (edad < 60)) {
//     console.log(nombre + " es un adulto");
// } else {
//     console.log(nombre + " es un anciano");
// }


//* --------------------------------- Switch -------------------------------- */

/* Evalúa una expresión/variable, comparando el valor de esa expresión con una 
 instancia "case", y ejecuta declaraciones asociadas a ese "case", así como las 
 declaraciones en los "case" que siguen */


// var mes = 3;

// switch(mes){
//     case 1:
//         console.log("Enero");
//         break;
//     case 2:
//         console.log("Febrero");
//         break;
//      case 3:
//         console.log("Marzo");
//         break;
//      case 4:
//         console.log("Abril");
//         break;
//      default:
//         console.log("Mes no encontado");//Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión

//  }

 //Default -> Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión

 

//* --------------------- FOR - Sentencias Condicionales -------------------- */

/* Crea un bucle que consiste en 3 expresiones opcionales, encerradas en () y 
separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle */ 
//* for ([expresion-inicial]; [condicion]; [expresion-final])sentencia


// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(var i = 1; i <= 10; i += 2){
//     console.log(i);
// }

// for(var i = 5; i <= 25; i+=5){
//     console.log(i);
// }


// //* Bucle For reverso
// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }



//* --------------------------------- WHILE --------------------------------- */
/* Crea un bucle que ejecuta una sentencia especificada mientras cierta 
condición se evalúe como verdadera. Dicha condición es evaluada antes de 
ejecutar la sentencia */ 

/* while (condicion)
  sentencia */


// var i =1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// console.log(i); // la variable va a valer 11


// //* While Reverso
// var i =10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// console.log(i); 


//*Ejemplo  de que si no se cumple la condición no se ejecuta (a diferencia del do...while)
// var i =0;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// console.log(i); 



//* ------------------------------ DO...WHILE ------------------------------- */
/* La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia 
especificada, hasta que la condición de comprobación se evalúa como falsa. 
La condición se evalúa después de ejecutar la sentencia, dando como resultado 
que la sentencia especificada se ejecute al menos una vez. 
La evaluación de la condición está al final de la instrucción */

/*do
   sentencia
while (condición); */ 


// var i = 1;
// do{
//    console.log(i);
//    i++;
// } while (i <= 10);
//   console.log(i);


//* se ejecuta al menos una vez
// var i = 11;
// do{
//    console.log(i);
//    i++;
// } while (i <= 10);
//   console.log(i);



/* -------------------------------------------------------------------------- */
/*                            FUNCTIONS / FUNCIONES                           */
/* -------------------------------------------------------------------------- */

//* ------- Cuando llamamos la funcion directamente (variable interna) ------- */

// function mensaje () {
//     console.log("Mensaje desde la función");
// }

// mensaje(); 

//* -------------------- Cuando la llamamos como argumento ------------------- */

// function mensaje (msj) {
//     console.log(msj);
// }

// var msj = "Mensaje como argumento de la función";
// mensaje(msj); 


//* -------- Función que devuelve un mensaje (nos retorna algun valor) ------- */

// function mensaje(){
//     return "Mensaje como devolución de la función";
// }

// var msj = mensaje();
// console.log(msj);
 
//* defino una variable "msj", que va a llamr a la función "mensaje" y esta función 
 //* devuelve un valor "Mensaje como devolución de la función"


 /* -------------------------------------------------------------------------- */
 /*                         Argumentos de una function                         */
 /* -------------------------------------------------------------------------- */

//* --------------------------- Recibe 3 argumentos -------------------------- */
// function sumar (a, b, c) {
//     return a + b + c;
// }

// var result = sumar (4,5,8);
// console.log (result);


//* -------------------------- Argumentos opcionales ------------------------- */
// function sumar (a, b , c=3) {
//     return a + b + c;
// }

// var result = sumar(4, 5, 8);
// var restul1 = sumar(3, 7); 
// console.log(result);
// console.log(restul1);

/* al no enviarle un 3° argumento, JS entiende  que este argumento es opcional, 
pero al ser opcional, también tiene un valor por default (c=3)


//* --------------------------- Argumentos anónimos -------------------------- */
// var sumar = function (a, b, c=3) {
//     return a + b + c;
// }

// var result = sumar(4, 5, 8);
// var restul1 = sumar(3, 7); 
// console.log(result);
// console.log(restul1);


/* -------------------------------------------------------------------------- */
/*                            Funciones Recursivas                            */
/* -------------------------------------------------------------------------- */
//* Una función se puede referir y llamarse a sí misma


// Factoreo --> 4 = 1 * 2 * 3 * 4 = 24
// Factoreo --> 5 = 1 * 2 * 3 * 4 * 5 = 120

// var factorial = function (n) {
//     if ((n == 0) || (n == 1))
//     return 1;
// else    
//     return (n * factorial(n - 1)); // llamamos a la misma function
// }

// console.log(factorial(5));
// console.log(factorial(4));

// factorial(5) = 5 * factorial(4) = 5 * 24 * factorial(3)....y asi sucesivamente 


/* -------------------------------------------------------------------------- */
/*                           Funciones Predefinidas                           */
/* -------------------------------------------------------------------------- */

//* Funciones de nivel superior (ya las trae Java Script) 
//* --> eval(), uneval(), isFinite(), isNaN(), parseFloat(), parseInt(), etc 
//* --> Number, String 



/* -------------------------------------------------------------------------- */
/*                              ARRAYS - ARREGLOS                             */
/* -------------------------------------------------------------------------- */
//* Objetos de tipo lista



