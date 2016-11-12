/**
 * Created by kristoffernoga on 01/11/2016.
 */

// A)
// Svaret kan ses i filen classDemo.js - godt nok med andre eksempler, men konceptet er det samme.
// Hvis vi gerne vil lave en async task (kan være crypto, kunne være http kald, kunne være hvad som helst) kan vi i ES2015
// gøre brug af Promises. En Promise er en 'placeholder' for et fremtidigt svar/objekt, eller hvad end man vil kalde det.
// Promises kan gøre brug af deres .then() metode, som bliver kørt, når en Promise har fået svar fra det den bedte om
// (kunne være et REST-kald eller andet, som er async). Det gode ved .then() er, at det også returnerer en Promise
// og vi kan derfor chaine vores kald, hvis vi vil have svarene i en bestemt rækkefølge. Først når vi har fået et bestemt svar
// kalder vi .then() hvori vi kalder på et nyt REST-kald osv. Det fede er, at man kan slutte med en .catch() og kun skrive
// sin error-handling et sted. Man kunne dog også kalde en .catch efter et specifikt .then() hvis man ville.
// Hvis man i stedet vil lave 100 random forespørgelser og er ligeglad med rækkefølgen kan man gøre brug af
// Promise.all, der ikke holder styr på rækkefølgen på ens promises, men venter på at alle Promises er fuldført, og derefter
// kan man kalde .then() metoden, og gøre noget med sine svar.


