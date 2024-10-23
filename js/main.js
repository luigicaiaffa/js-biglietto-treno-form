// # RACCOLTA DATI

// prendi input nome cognome passeggero
const fullNameInput = document.getElementById("input-fullname");
// prendi input km da percorrere
const kmInput = document.getElementById("input-km");
// prendi input fascia d'età passeggero
const ageInput = document.getElementById("input-age");
// prendi bottone calcola biglietto
const calcPriceButton = document.getElementById("calc-train-ticket-price");
// prendi bottone annulla
const resetButton = document.getElementById("reset-btn");

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
    // calcola prezzo biglietto
    // SE il valore età è minorenne
    if (condition) {
      // applica sconto 20%
    }
    // SE il valore età è over 65
    if (condition) {
      // applica sconto 40%
    }
  }

  // | debug console log
  console.log(`
    ticketPriceKm : ${ticketPriceKm}
    userKmNum : ${userKmNum}
    userAge : ${userAge}
    userFullName : ${userFullName}
    isUserKmNumValid : ${isUserKmNumValid}
    isUserFullNameValid : ${isUserFullNameValid}
`);
};

// # OUTPUT

calcPriceButton.addEventListener("click", ticketPriceCalc);
