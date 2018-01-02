//Exo 1
/*for (number = 1; number<=10; number++) {
    console.log(number);
}
*/

/*
for (let number = 1; number <= 10; number++) {
    console.log(count);
}
*/
//


/*for (toto=0; toto<=10; toto=toto+2) {
    console.log(toto)
}
*/

//exo 3

/*for (chocolat=1; chocolat<=20; chocolat=chocolat+3) {
    console.log(chocolat)
}
*/
//or
/*
const step = 5

for (chocolat=1; chocolat<=20; chocolat += step) {
    console.log(chocolat)
}
*/


//exo 4
/*
let x=0, y=1;

for ( fibo=0; fibo<=100; fibo++) {
    fibo = x + y;
    x = y;
    y = fibo;
    console.log(fibo)
}
*/
//or
/*
let fibo =[0,1];

for ( let count = 2; count < 100; count += 1) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
// 1) Ecrire dans la console tous les chiffres de 1 à 10
for (let count = 1; count <= 10; count++) {
  console.log(count);
}

// avec un while
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

// 2) Ecrire dans la console tous les chiffres pairs de 1 à 10
for (let count = 2; count <= 10; count += 2) {
  console.log(count);
}

// 3) Ecrire dans la console tous les chiffres avec choix de l'incrémentation de x à y
const step = 5;

for (let count = 1; count <= 10; count += step) {
  console.log(count);
}

// 4) Ecrire dans la console les 100 premiers membres de la suite de Fibonacci

let fibo = [0,1];

for (let count = 2; count < 100; count += 1) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
}

console.log(fibo);

//exo 5
/*
let supposition = prompt ('A quel nombre penses-tu?');
while (true){
    if (supposition<16){
    supposition = prompt('cest moins');
    }
    else if (supposition>16){
    supposition = prompt('cest plus');
    }
    else if (supposition == 16) {
        alert('bravo');
        break;
    }
}
*/
//or
/*

function demanderSupposition() {
	const supposition = prompt('A quel nombre penses-tu ?');

  if (supposition == nombreSecret) {
  	alert('Bravo !');
  } else if (supposition > nombreSecret) {
  	alert('Mon nombre est plus petit !');
    demanderSupposition();
  } else if (supposition < nombreSecret) {
  	alert('Mon nombre est plus grand !');
    demanderSupposition();
  }
}

demanderSupposition();

*/

// function stars(stars = 1) {
    let stars = [];

for (let count = 1; count < stars; count =+2 ) {
    if (stars.length == 1) {
      stars.push(count);
    }

}

/*
return stars;
}

console.log(stars[]);
*/

/*
let stars =('*')
for (count = 1; count < stars; count ++) {
    console.log(stars[]);
}
*/
/*

/*
let stars = ['¤', '¤', '¤',];

for (row= 0; row < stars.length; row++) {
    console.log(stars[row]);
}

*/

/*
let stars = '*';

for (row = 0; row < 6; row = stars);

*/
// bonus : en faire une fonction

function fibonacci(toto = 0) {
  let results = [];

  for (let count = 0; count < toto; count += 1) {
    if (results.length < 2) {
      results.push(count);
    } else {
      results.push(results[results.length - 1] + results[results.length - 2]);
    }
  }

  return results;
}

console.log(fibonacci(50));

// 5) Faire deviner un nombre donné avec des prompt dans lequel l'utilisateur doit entrer le nombre qu'il suppose, et selon la supposition de l'utilisateur, lui ré-afficher un prompt avec "c'est plus" ou "c'est moins" ou alors lui afficher une alert "bravo" s'il tombe juste

const number = 451;
let guessedNumber = prompt("Entrez un nombre");

while (true) {

  if (guessedNumber < number) {
    guessedNumber = prompt("C'est plus !");
  } else if (guessedNumber > number) {
    guessedNumber = prompt("C'est moins !");
  } else if (guessedNumber == number) {
    alert("Bravo !");
    break;
  } else {
    guessedNumber = prompt("Veuillez rentrer un nombre !");
  }
  
}

