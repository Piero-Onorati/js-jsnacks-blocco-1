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