// # RACCOLTA DATI

// prendi input nome cognome passeggero
const fullNameInput = document.getElementById("input-fullname");
// prendi input km da percorrere
const kmInput = document.getElementById("input-km");
// prendi input fascia d'età passeggero
const ageInput = document.getElementById("input-age");

// assegno il prezzo del biglietto per km
const ticketPriceKm = 0.21;

// # ELABORAZIONE
// funzione per sconti
const calcUnderSale = () => {};

const calcOverSale = () => {};

// dichiaro una funzione per calcolare il prezzo dei bigliett
const ticketPriceCalc = () => {
  // valore inserito dall'utente nome
  const userFullName = fullNameInput.value;
  // valore inserito dall'utente km
  const userKmNum = kmInput.value;
  // valore inserito dall'utente età
  const userAge = ageInput.value;

  // verifica dati inseriti correttamente
  const isUserKmNumValid = !isNaN(userKmNum) && !userKmNum <= 0;
  const isUserFullNameValid = userFullName.lenght > 3;

  // SE i dati inseriti sono validi
  if (isUserKmNumValid && isUserFullNameValid) {
    
  }

  // controllo che il numero di chilometri inserito sia valido
};

// # OUTPUT

// | debug console log
