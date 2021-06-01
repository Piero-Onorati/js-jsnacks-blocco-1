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