// Una funzione per capire se la parola è palindroma

// 1. Chiedo all'utente di inserire una parola
// 2. Creo una funzione che mi permetta di creare il palindromo della parola inserita
// 3. Confronto la parola inserita con la funzione
// 4. Stampo il risultato

var parola = prompt('Inserisci un parola:');     // L'utente inserisce la parola
var palindromo = specchio(parola)               //  variabile palindromo

if (parola == parola.toLowerCase()){            //check case sensitive
    if (palindromo == parola){                      //confronto palindromo con parola inserita
        console.log('Complimenti: ' + parola + ' è un palindromo');
    } else {
        console.log('Mi spiace! ' + parola + ' non è un palindromo');
    }
} else{
    alert('ATTENZIONE: Inserire solo lettere minuscole')
}

/*===FUNZIONE===*/
function specchio(parola){                       //creo funzione palidromo
    var parolaContraria = [];
    for (var i = parola.length -1; i >= 0; i--) {
        parolaContraria += parola[i]
    }
    return parolaContraria;
}

// function specchio(parola){                       //creo funzione palidromo (con while)
//     var parolaContraria = [];
//     var i = parola.length -1;
//     while (i >= 0){
//         parolaContraria += parola[i]
//         i--;
//     }
//     return parolaContraria;
// }
