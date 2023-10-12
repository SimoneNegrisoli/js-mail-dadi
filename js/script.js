



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



// Esercizio Email

    const dateEmail = document.getElementById('email');
    console.log(dateEmail)

    const authorizedEmailAddresses = [
        'prima@gmail.com',
        'seconda@gmail.com',
        'terza@gmail.com',
        'quarta@gmail.com',
        'quinta@gmail.com',
        'sesta@gmail.com',
        'settima@gmail.com'  
    ]
 
    const btnEmail = document.querySelector('button');
    const autorizzato = document.getElementById('autorizzato')
    const nonautorizzato = document.getElementById('nonautorizzato')

    btnEmail.addEventListener('click', function(){
        // mail inserita dall' utente 

        const userEnterEmail = dateEmail.value;
        console.log(userEnterEmail)
        
        if (authorizedEmailAddresses.includes(userEnterEmail)){
            autorizzato.classList.remove('d-none');
            nonautorizzato.classList.add('d-none');
        } else {
            nonautorizzato.classList.remove('d-none');
            autorizzato.classList.add('d-none');
        }
    }
    )

// Esercizio Dadi

    const dicegame = document.getElementById('dicegame')

    
