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

// prendi il div in cui stampare il biglietto
const ticketElement = document.getElementById("generate-ticket");

// assegno il prezzo del biglietto per km
const ticketPriceKm = 0.21;

// dichiara variabili per prezzo e sconti applicati
let standardPrice = 0;
let appliedSale = 0;
let ticketPrice = 0;
let offerUsed = "Biglietto Standard";

// # ELABORAZIONE

// funzione annulla form
const resetForm = () => {
  fullNameInput.value = "";
  kmInput.value = "";
  ageInput.value = "";
};

// dichiaro una funzione per calcolare il prezzo dei biglietti
const ticketPriceCalc = () => {
  // valore inserito dall'utente km
  const userKmNum = parseInt(kmInput.value);
  // valore inserito dall'utente età
  const userAge = ageInput.value;
  // valore inserito dall'utente nome cognome
  const userFullName = fullNameInput.value;
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
      offerUsed = "Under 18";
    }

    // SE il valore età è over 65
    else if (isOverSaleApplied) {
      // applica sconto 40%
      appliedSale = (standardPrice * 40) / 100;
      offerUsed = "Over 65";
    }

    // ALTRIMENTI
    else {
      offerUsed = "Biglietto Standard";
    }

    // prezzo finale biglietto
    ticketPrice = (standardPrice - appliedSale).toFixed(2) + " €";

    // stampa biglietto
    const ticketStamp = `
    <h1 class="text-center text-light fw-bold py-4">IL TUO BIGLIETTO</h1>
    <div class="card px-4 pb-2">
      <div class="card-body">
        <h5 class="fw-bold">DETTAGLIO PASSEGGERI</h5>
        <div class="row">
          <div class="bg-secondary text-light fw-bold col-4 pb-5">
            <h5 class="fw-bold my-2">NOME PASSEGGERO</h5>
            <div class="fs-5">${userFullName}</div>
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
                  <td>${offerUsed}</td>
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
    `;

    // # OUTPUT
    ticketElement.innerHTML = ticketStamp;
  }

  // ALRTRIMENTI
  else {
    alert("dati inseriti invalidi");
  }

  // | debug console log
  console.log(`
    userFullName : ${userFullName}
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
calcPriceButton.addEventListener("click", resetForm);
resetButton.addEventListener("click", resetForm);
