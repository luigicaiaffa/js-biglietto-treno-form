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

// dichiara variabili per prezzo e sconti applicati
let standardPrice = 0;
let appliedSale = 0;
let ticketPrice = 0;

// # ELABORAZIONE

// dichiaro una funzione per calcolare il prezzo dei biglietti
const ticketPriceCalc = () => {
  // valore inserito dall'utente km
  const userKmNum = kmInput.value;
  // valore inserito dall'utente età
  const userAge = ageInput.value;

  // verifica dati inseriti correttamente
  const isUserKmNumValid = !isNaN(userKmNum) && !userKmNum <= 0;
  // verifica età per sconti
  const isUnderSaleApplied = userAge === "Minorenne";
  const isOverSaleApplied = userAge === "Over 65";

  // SE i dati inseriti sono validi
  if (isUserKmNumValid) {
    // calcola prezzo standard biglietto
    standardPrice = userKmNum * ticketPriceKm;

    // SE il valore età è minorenne
    if (isUnderSaleApplied) {
      // applica sconto 20%
      appliedSale = (standardPrice * 20) / 100;
    }

    // SE il valore età è over 65
    if (isOverSaleApplied) {
      // applica sconto 40%
      appliedSale = (standardPrice * 40) / 100;
    }

    // prezzo finale biglietto
    ticketPrice = (standardPrice - appliedSale).toFixed(2) + " €";
  }

  // ALRTRIMENTI
  else {
    alert("dati inseriti invalidi");
  }

  // | debug console log
  console.log(`
    userKmNum : ${userKmNum}
    userAge : ${userAge}
    isUserKmNumValid : ${isUserKmNumValid}
    isUnderSaleApplied : ${isUnderSaleApplied}
    isOverSaleApplied : ${isOverSaleApplied}
    standardPrice : ${standardPrice}
    appliedSale : ${appliedSale}
    ticketPrice : ${ticketPrice}
    `);
};

// attiva funzione di calcolo al click del bottone
calcPriceButton.addEventListener("click", ticketPriceCalc);

// # OUTPUT

`
<h1 class="text-center text-light fw-bold py-4">IL TUO BIGLIETTO</h1>
<div class="card px-4">
  <div class="card-body">
    <h5 class="fw-bold">DETTAGLIO PASSEGGERI</h5>
    <div class="row">
      <div class="bg-secondary fw-bold col-4 pb-5">
        <h5 class="fw-bold m-0">NOME PASSEGGERO</h5>
        <div>${}</div>
      </div>
      <div class="col-8 border-top border-bottom">
        <table class="table">
          <thead>
            <tr>
              <th>Offerta</th>
              <th>Carrozza</th>
              <th>Codice CP</th>
              <th>Costo Biglietto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${}</td>
              <td>5</td>
              <td>92911</td>
              <td>${ticketPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
`