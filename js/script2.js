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
