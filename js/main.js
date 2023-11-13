/*************** 
    CODE COST TICKET
***************/

const kilometres = prompt('Quanti KM devi percorrere?'); //dichiarazione variabile dei KM da percorrere
//console.log('KM da percorrere:', kilometres);
const age = prompt('Quanti anni hai?'); //dichiarazione variabile per gli anni del passeggero
//console.log('Anni selezionati:', age);

/*
* Il prezzo finale va scritto in "forma umana", quindi con massimo
* due decimali, per indicare centesimi sul prezzo { toFixed(n) }
*/


const ticketPrice = (kilometres * 0.21).toFixed(2); //dichiarazione variabile per calcolare il prezzo del biglietto (0.21€ al km)
//console.log('Prezzo biglietto:', ticketPrice);
const ticket20 = ((ticketPrice * 20) / 100).toFixed(2); //dichiarazione variabile per calcolare il 20% del prezzo originale
const ticket40 = ((ticketPrice * 40) / 100).toFixed(2); //dichiarazione variabile per calcolare il 40% del prezzo originale

/*
* Applicare il 20% di sconto per le persone minorenni
* ed applicare il 40% di sconto per le persone over 65
*/

if (age < 18) { //se minore di 18 allora..
    document.querySelector('.price-allert').innerHTML = `Prezzo biglietto ${ticket20}`;
} else if ((age >= 18) && (age <= 65)) { //se maggiore o uguale a 18 E se minore o uguale a 65 allora..
    document.querySelector('.price-allert').innerHTML = `Prezzo biglietto ${ticketPrice}`;
} else if (age > 65) { //se maggiore a 65 allora..
    document.querySelector('.price-allert').innerHTML = `Prezzo biglietto ${ticket40}`;
} else { //tutti gli altri casi
    document.querySelector('.price-allert').innerHTML = `Error, riprovare`;
}