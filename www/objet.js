let person = {
    name : 'John',
    surname : 'Do',
    age : 26,
    isDeveloper : true,
    presentation : function (){
    console.log(`Hello, I'm `);
    },
    address : {
        street : 18,
        codezip : 45600,
        city : villeurbanne
    }
    
}; 
person.presentation();
console.log(`this is ${person.name} ${person.surname}, he is ${person.age} years old`);

person.surname = 'promo5';
person.age++;

console.log(`this is ${person.name} ${person.surname}, he is ${person.age} years old`);


if (person.isDeveloper === true){
    console.log("I'm a Developer");
} else { 
    console.log("I'm your father");
}


