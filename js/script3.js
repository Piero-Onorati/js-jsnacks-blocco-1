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