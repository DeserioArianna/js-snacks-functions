/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali(word) {
    const vocali = ["a","e","i","o","u"];
    let count = 0;
    let vocaliTrovate = "";

    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i].toLowerCase())) {
            count++;
             if (vocaliTrovate) {
               vocaliTrovate += ", ";
            }
            vocaliTrovate += word[i].toLowerCase();
        }
    }
    return {count: count, vocaliTrovate: vocaliTrovate};
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = numeroVocali(word);
console.log(`${risultato.count} (${risultato.vocaliTrovate})`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)