let para = document.querySelector('#para');

para.style.color = "red";

console.log(para.textContent);

let laClasse = document.querySelectorAll('.laClasse');

laClasse.forEach(function (element) {
    element.style.fontSize = "30px";
});

let span = document.querySelector('p span');

span.textContent = 'inside para';

let h1 = document.querySelector('h1');

alert(h1.textContent);

let textResult = prompt('Can you give me a world');

let lastSpan = document.querySelector('section > span'); 
lastSpan.textContent = textResult;

let section = document.querySelector('section');
section.style.border = "solid 1px red";



/*

1) Changer la couleur du texte du paragraphe avec l'id para en rouge
 
2) Changer la taille du texte des éléments ayant la classe laClasse

3) Changer le texte des span contenus dans des paragraphe par "inside para"

4) Récupérer le texte du h1 et l'afficher en alert

5) faire un prompt qui demande un mot, et mettre ce mot comme texte d'un span contenu directement dans une section
 
6) Rajouter une bordure à la section

*/