let btn = document.querySelector('button');
let counter = 0;

btn.addEventListener('click', function() {
    counter++;
    console.log('bloup');
    console.log(counter);
});

//exo 2

let minbtn = document.querySelector('.minbutton');

let plusbtn = document.querySelector('.plusbutton');
let pluscounter = 0;

let countspan = document.querySelector('span');
plusbtn.addEventListener('click', function() {
    pluscounter++;
    console.log(pluscounter);
    countspan.textContent = pluscounter; 
});

minbtn.addEventListener('click', function() {
    pluscounter--;
    console.log(pluscounter);
    countspan.textContent = pluscounter;
});



