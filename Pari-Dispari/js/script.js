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

/*== SCELTA NUMERO DA 1 A 5 ==*/
do{
    var numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 5'));
    if (isNaN(numeroUtente) || numeroUtente < 1 ||numeroUtente > 5){
        alert('ATTENZIONE: Devi inserire un numero da 1 a 5 !!!')
    }
} while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5)

/*== ATTRIBUZIONE PARI / DISPARI ALLA SOMMA TRA NUMERO UTENTE E NUMERO PC ==*/
var sceltaPc = ''
if ((numeroUtente + numeroPc) % 2 == 0){
    sceltaPc = 'pari'
} else if ((numeroUtente + numeroPc) % 2 != 0){
    sceltaPc = 'dispari'
}

if ((sceltaUtente == 'pari') && (sceltaPc == 'pari')){
    console.log('HAI VINTO!! hai scelto: ' + numeroUtente + ' che è PARI. la somma del tuo numero con il  numero random ha restituito: ' + numeroPc + ' che è un numero PARI !!!');
} else if ((sceltaUtente == 'dispari') && (sceltaPc == 'dispari')){
    console.log('HAI VINTO!! hai scelto: ' + numeroUtente + ' che è DISPARI. la somma del tuo numero con il  numero random ha restituito: ' + numeroPc + ' che è un numero DISPARI !!!');
} else{
    alert('HAI PERSO')
}
