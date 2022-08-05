const alumnos = ["Luis", "Jorge", "Carlos", "Walther"];

console.log(alumnos.length); //4 -> Obtener la cantidad de elementos en un arreglo
console.log(alumnos[0]); //Luis -> Obtener el primer elemento del arreglo
console.log(alumnos[3]); //Walther
console.log(alumnos[alumnos.length - 1]); //Walther -> Obtener el ultimo elemento de un arreglo

//For Loop
//for(sentencia1; sentencia2; sentencia3){
//  codigo a ser ejecutado
//}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//0
//1
//2
//...
//9

for (let i = 0; i < alumnos.length; i++) {
  const alumno = "El alumno se llama: " + alumnos[i];
  console.log(alumno);
}

//El alumno se llama: Luis
//El alumno se llama: Jorge
//El alumno se llama: Carlos
//El alumno se llama: Walther

//m+=2 -> m = m +2
//for(m = 3; m > 0; m--)
for (let m = alumnos.length - 1; m >= 0; m--) {
  console.log(alumnos[m]);
}
//Walther Carlos Jorge Luis

//While
//while(condicion){
// codigo a ejecutar
//}

//While primero verifica la condicion y despues ejecuta codigo
let n = 0;
while (n < 4) {
  console.log(n);
  console.log(alumnos[n]);
  n++;
}
//0 1 2 3

//NO HACER ESTO, BUCLE INFINITO
while (true) {
  console.log("Hola");
}

//Do While primero ejecuta codigo y despues verifica la condicion
do {
  //codigo
} while (n < 4);

//Condicionales

// == verifica que el valor de ambos sean iguales
// === verifica que el valor y el tipo de ambos sean iguales

if (alumnos.length == 6) {
  //codigo
} else {
  //codigo
}

//if anidado
if (alumnos.length === 6) {
  //codigo
} else if (alumnos.length === 5) {
  //codigo
} else if (alumnos.length == 4) {
  //codigo
} else {
  //codigo
}

if (alumnos.length === 6) {
}

if (alumnos.length === 5) {
}

if (alumnos.length === 4) {
}
