/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraLetteraConParola(array, lettera) {
    return array.filter(parola => parola.charAt(0).toLowerCase() === lettera.toLowerCase());
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtraLetteraConParola(names, "a"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]