



// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:



// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// Bonus
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
//   2.   Grafica per il gioco dei dadi


// Esercio Email

    const dateEmail = document.getElementById('email');

    const authorizedEmailAddresses = [
    'prima@gmail.com', // 0
    'seconda@gmail.com',// 1
    'terza@gmail.com', // 2
    'quarta@gmail.com', // 3
    'quinta@gmail.com', // 4
    'sesta@gmail.com', // 5
    'settima@gmail.com' // 6
];
    const btnEmail = document.querySelector('button');
    const autorizzato = document.getElementById('autorizzato')
    const nonautorizzato = document.getElementById('nonautorizzato')

    btnEmail.addEventListener('click', function(){
        const userEnterEmail = dateEmail.value;
        let authorized = false;

        for(let i = 0; i < authorizedEmailAddresses.length; i++ ){
            if(userEnterEmail.toLocaleLowerCase() === authorizedEmailAddresses[i].toLocaleLowerCase()){
                authorized = true;
            }
        }
        if(authorized){
            autorizzato.classList.remove('d-none');
            nonautorizzato.classList.add('d-none');
        }else{
            nonautorizzato.classList.remove('d-none');
            autorizzato.classList.add('d-none');
        }

    })

// // Esercizio Dadi

    // utility
    function getRndInteg (min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const dicegameEl = document.getElementById('dicegame')
    const number = [1, 2, 3, 4, 5, 6]

    let userNumber = getRndInteg(0 , number.length -1);
    let computerNumber = getRndInteg(0 , number.length -1);
    number[userNumber]
    number[computerNumber]
    
    console.log(number[computerNumber])
    console.log(number[userNumber])

    for(x = 0; x < number.length; x++){
        // console.log(number[x])
    }

