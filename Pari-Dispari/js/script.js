//L’utente sceglie pari o dispari e un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer. Sommiamo i due numeri e dichiariamo chi ha vinto.

//    prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
//    prompt ---> “Scegli un numero”         --------> ES: 5
//    creo un numero RANDOM                --------> ES: 10
//    10 + 5 = 15 è un numero DISPARI
//    log     -------->   Spiacente, hai scelto PARI, ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!

var numeroPc = randomNumber(1, 5);
console.log(numeroPc);


function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*== SCELTA PARI E DISPARI ==*/
do{
    var sceltaUtente = prompt('Scrivi pari o dispari');
    if (!isNaN (sceltaUtente) || (sceltaUtente != 'pari') && (sceltaUtente != 'dispari')){
        alert('ATTENZIONE: Devi scrivere \'pari\' o \'dispari\'!!! ')
    }
} while (!isNaN (sceltaUtente) || (sceltaUtente != 'pari') && (sceltaUtente != 'dispari'))
console.log(sceltaUtente);

/*== SCELTA NUMERO DA 1 A 5 ==*/
do{
    var numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 5'));
    if (isNaN(numeroUtente) || numeroUtente < 1 ||numeroUtente > 5){
        alert('ATTENZIONE: Devi inserire un numero da 1 a 5 !!!')
    }
} while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5)

var somma = numeroUtente + numeroPc;
console.log('la somma è ' + somma);

/*== ATTRIBUZIONE PARI / DISPARI ALLA SOMMA TRA NUMERO UTENTE E NUMERO PC ==*/
var sceltaPc = ''
if (somma % 2 == 0){
    sceltaPc = 'pari'
} else {
    sceltaPc = 'dispari'
}
console.log(sceltaPc);

if (sceltaUtente == 'pari' && sceltaPc == 'pari' || sceltaUtente == 'dispari' && sceltaPc == 'dispari' ){
    console.log('HAI VINTO!! Hai scelto: ' + sceltaUtente + ' - La somma tra il tuo numero e quello generato dal PC è: ' + somma + ' che è ' + sceltaPc);
} else {
    console.log('HAI PERSO!! Hai scelto: ' + sceltaUtente + ' - La somma tra il tuo numero e quello generato dal PC è: ' + somma + ' che è ' + sceltaPc);

}
