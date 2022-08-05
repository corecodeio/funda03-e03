//var -> Scope global
//let -> Scope funcional

var i = 5;
for (var i = 0; i < 10; i++) {
  console.log(i); //0 - 9
}

console.log(i); //10

let y = 5;
for (let y = 0; y < 10; y++) {
  //codigo
}

console.log(y); //5

let x = 5;
for (var x = 5; x < 10; x++) {
  //codigo
}

let z = 5;
for (let z = 0; z < 10; z++) {
  //codigo
}

//break -> Nos saca por completo del bucle
//continue -> Pasa a la siguiente iteracion

for (let a = 0; a < 10; a++) {
  if (a == 2) {
    continue;
  }
  if (a == 8) {
    break;
  }
  console.log(a);
}

//0 1 3 4 5 6 7
