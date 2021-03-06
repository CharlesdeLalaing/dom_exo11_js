// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide


// //exo1
// let exo1 = document.querySelector('h1');
// exo1.setAttribute('class', '');
// exo1.setAttribute('id', '');
// console.log(exo1.attributes);

// //exo2
// let exo2 = document.querySelector('h2');
// exo2.innerText = 'Exercice 2 partie A';
// console.log(exo2);

// //exo3
// let exo3 = document.querySelectorAll('h2')[1];
// exo3.innerText = 'Exercice 2 partie B';
// console.log(exo3);

// //exo4
// let exo4 = document.querySelector('p');
// exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";
// console.log(exo4);

// //exo5
// let exo5 = document.querySelectorAll('p')[1];
// exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";
// console.log(exo5);


// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

//exo6
// let exo6 = document.querySelector('h1');
// exo6.setAttribute('id', 'bigTitle');
// console.log(exo6);

// //exo7
// let exo7 = document.querySelector('div');
// exo7.setAttribute('class', 'container');
// console.log(exo7);

// //exo8
// let exo8 = document.querySelectorAll('h2');
// exo8.forEach(element => {
//     element.setAttribute('class', 'title');
// });
// console.log(exo8);

// //exo9
// let exo9 = document.querySelectorAll('p');
// exo9.forEach(element => {
//     element.setAttribute('class', 'text');
// })
// console.log(exo9);


// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

// let exo10 = document.querySelector('section');
// exo10.setAttribute('class', 'margin-bottom border-black padding');
// console.log(exo10);

// let exo11 = document.querySelectorAll('section')[1];
// exo11.setAttribute('class', 'margin-top border-black padding');
// console.log(exo11);

// let exo12 = document.querySelectorAll('div')[1];
// exo12.setAttribute('style', 'background-color:grey; border:orange; border-width:5px; border-style:solid; height:20px; width:20px')

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

// let exo1 = document.querySelector('h1');
// exo1.innerText = "Les attributs class et id";

// let exo2 = document.querySelector('h2');
// exo2.innerText = "Exercice 2 partie A";

// let exo3 = document.querySelectorAll('h2')[1];
// exo3.innerText = "Exercice 2 partie B";

// let exo4 = document.querySelector('p');
// exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ";

// let exo5 = document.querySelectorAll('p')[1];
// exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

// exo1.setAttribute('id', 'bigTitle');

// let exo7 = document.querySelector('div');
// exo7.setAttribute('class', 'container');

// let exo8 = document.querySelectorAll('h2');
// exo8.forEach(element => {
//     element.setAttribute('class', 'title');
// });

// let exo9 = document.querySelectorAll('p');
// exo9.forEach(element => {
//     element.setAttribute('class', 'text');
// });


// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

// let exo10 = document.querySelector('section');
// exo10.setAttribute('class', 'margin-bottom border-black padding');

// let exo11 = exo10.nextElementSibling;
// exo11.setAttribute('class', 'margin-top border-black padding');

// let exo12 = exo11.lastElementChild;
// exo12.setAttribute('style', ('background-color:blue; border:orange ; border-width:5px ; border-style:solid ; height:20px ; width:20px'));

//CORRECTION

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide



// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"


// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px


