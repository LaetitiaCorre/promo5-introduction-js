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