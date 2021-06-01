// -----------------------------------  JSnack1  ----------------------------------------//

/* L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
Se uguale lunghezza dire sono uguali e stamparle entrambe.*/

var firstWord = prompt('Inserisci una parola');

var secondWord = prompt('Inserisci un\'altra parola');

var lfirstWord = firstWord.length;

var lsecondWord = secondWord.length;

if (lfirstWord < lsecondWord) {
    document.getElementById('words').innerHTML= firstWord + '+' + secondWord;
} else if(lsecondWord < lfirstWord) {
    document.getElementById('words').innerHTML= secondWord + '+' + firstWord;
}
else{
    document.getElementById('words').innerHTML= 'the words have the same length';
}

// -----------------------------------  JSnack2  ----------------------------------------//

/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while. Variante: stampare solo i numeri pari */

// Parte 1

var sum = 0;

for (var i = 0; i < 5; i++) {
   var number = parseInt(prompt('inserisci un numero'));
   sum += number;
}

document.getElementById('sum1').innerHTML = sum;

// --------------------  Con WHILE ------------------------ //

// var i = 0;

// while (i < 5) {
//     var number = parseInt(prompt('inserisci un numero'));
//     sum += allNumbers[i];
//     i++;
// }

// -------------------------------------------------------- //


// Part 2 : Only even numbers

var sum = 0;

for (var i = 0; i <5; i++) {
    var number = parseInt(prompt('inserisci un numero'));
    if(number % 2 == 0){
        sum += number;
    }
}

document.getElementById('sum2').innerHTML = sum;

// --------------------  Con WHILE ------------------------ //

// var i = 0;

// while (i < 5) {
//     var number = parseInt(prompt('inserisci un numero'));
    // if(number % 2 == 0){
    //     sum += number;
    // }
//     i++;
// }

// -----------------------------------  JSnack3  ----------------------------------------//

/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array */

var array = [];

for (i = 0; i < 6; i++) {
    number = parseInt(prompt('inserisci un numero'));
    if(number % 2 != 0){
        array.push(number);
    }
}

document.getElementById('array').innerHTML = array;

// -----------------------------------  JSnack4  ----------------------------------------//

/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

var guests = ['Piero', 'Pippo', 'Pluto', 'Topolino', 'Paperino'];

var utente = prompt('Qual è il tuo nome?');

utente = utente.charAt(0).toUpperCase() + utente.slice(1).toLowerCase();

if (guests.includes(utente)) {
    document.getElementById('invited').innerHTML = 'Puoi partecipare alla festa';
} else {
    document.getElementById('invited').innerHTML = 'Non puoi partecipare alla festa';
}

// --------------------  Con WHILE ------------------------ //

// var invited = false;

// var i = 0;

// while (i < guests.length) {
//     if (utente == guests[i]) {
//         invited = true;
//     }
//     i++;
// }

// if (invited == true) {
//     document.getElementById('invited').innerHTML = 'Puoi partecipare alla festa';
// } else {
//     document.getElementById('invited').innerHTML = 'Non puoi partecipare alla festa'; 
// }