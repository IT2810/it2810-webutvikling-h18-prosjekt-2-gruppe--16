This is the second project of group 16 in the course IT2810 at NTNU.

Documentation:

Node.js og NPM 

For å starte aplikasjonen lokalt kjør npm install og npm start

Git 

Vi har brukt git og github til å organisere og arbeide med koden. Alle jobber i en branch ut fra dev og når vi skal merge bruker vi pull request funksjonen i github, slik at andre i gruppen kan se over koden.


Arkitetkur 

Måten vi har valgt å bygge SPAen vår er basert på konseptene som React legger opp til. Vi setter sammen mindre komponenter til større komponenter som igjen settes sammen til å lage en fullstendig nettside. 

Øverst i treet har vi app.js som representerer hele nettsiden. Den gennererer kompnenter av 3 kategorier; mediaDisplayArea, tab og category. I disse komponentene behandler vi det som skal skje i de forskjellige områdene, i tilfellene hvor områdene deles opp igjen lager vi flere child komponenter. Når det kommer til oppbyggningen så startet vi med en oppbyggning der vi statisk hadde hardkodet inn alle pathene til alle filer i systemet, og manglet passing av data i begge retninger. Dette er nok det største valget vi gjorde, at vi bygde om nesten alt av arkitektur i applikasjonen fra bunnen i den siste uken. I versjon 2 la vi ekstra vekt på at vi skulle ha gjenbrukbarhet og utvidbarhet, slik at applikasjonen lett skulle kunne tilpasses annet innhold. Dette er da det som er nevnt om at komponentene våre skulle bruke data fra foreldrekomponenter.

Dataflyt

All data går opp og ned gjennom trestrukturen i applikasjonen. Vi har implementert det slik at all data går gjennom app.js siden den har childs som trenger data fra hverandre. Videre så sender vi data gjennom childs til grandchilds der det er hensiktsmessing. Hovedsaklig så vi slipper å gjennbruke kode. 

Testing

Når det kommer til testing har vi som foreslått brukt opptil 4 enheter til å sjekke at det responsive designet fungerte. Gjennom hele utviklingsprosessen så ble hele applikasjoner og deler testet i 4 forskjellige størrelser og format.  Siden det ikke var satt store krav til testing har vi ikke gjennomført større testing av selve koden, men mest om den oppfyller kravene til responsivitet.

Responsive web design

Vi implementerte CSS grid tidlig i prosessen og har hatt en responseve web applikasjon siden det. Vi fulgte prinsippet med å starte å utvikle til mobil for så å gå over til desktop. Vi har velgt å gjøre hoveddelene av applikasjonen responsive med mediaquary. Det er catagorier og content som blir plasert oppå hverandre når skjermen blir liten. Viewport er en del av create app prosessen og ble automatisk generert den finnes i index.html. 


AJAX

Måten vi implementerte AJAX i denne applikasjonene var ved at vi brukte den innbygde fetch funksjonen i React til å asykront laste inn data i applikasjonen. Fetch har oppfylt alle kravene vi hadde. Dette skjer i text.js og i picture.js. Dette gjør vi for å ha kontroll på all funksjonalitet til den kompnenten. Med untak av caching har vi implementert alle AJAX krav. 
Vi har gjort forsøk på å implementere caching, men har ikke fått det til å fungere uten å fororsake fatale bugs. Som for eksempel å laste svg elementer uendlig mange ganger i en infinate loop. Denne koden er derfor ikke med i koden som leveres inn. 
Her er hvordan vi prøvde å få det til i pseudo code. 
Funksjon som handler alt av henting av data, om det er fetch eller local. 
Sjekker som nåværende path ligger i local storage med - localStorage.getItem(path)
Hvis ja, hent ut data og lagre i state. Returner og avslutt funksjon.
Hvis nei, fetch data via en funksjon setResultat.
slutt funksjon 1
setResultat aktiveres av fetch og tar inn data som blir hentet som argument
bruker localStorage.setItem(path, data) til å lagre data i local storage.
setter staten til kompnenten til data. slik som det allerede står i koden. 

Bilder

Måten vi løste bildene var gjennom en veldig enkel mappestruktur, der bildene lå fordelt nedover slik som det ble anvist i oppgaveteksten. Hovedsaklig ble bildene valgt gjennom en path state som var satt av data som ble passert fra MediaCategory og Tab. Sammen så lagde dette en path som videre ble brukt til å sende data om hvilken svg fetch funksjonen vår skulle hente. Dette var en relativt enkel og direkte løsning på problemet.


Det er et krav vi ikke har innfridd og det er kravet om lokallagring, grunnet blant annet utlandsopphold og noe sykdom i gruppen så ble den siste funksjonen aldri fullført. Grunnen til at dette ble den funksjonen som ikke ble fullført var fordi den ble ansatt som ikke-essensiell for de andre funksjonene i systemet. Dermed kunne den bli "utsatt" til slutten av prosjektet. Skulle vi gjennomført den vil vi anvendt localStorage.x funksjonene til å bygge et enkelt system for å lagre til lokalminnnet.  


