This is a group project in IT2810 at NTNU.


Måten vi har valgt å bygge SPAen vår er basert på konseptene som React legger opp til. Vi setter sammen mindre komponenter til større komponenter som igjen settes sammen til å lage en fullstendig nettside. De grunnleggende komponentene våre er ment i så stor grad som mulig å være bygget av data som blir gitt til dem fra foreldrene sine, slik at appen i så stor grad som mulig skal kunne økes i omfang dynamisk etter behov. Foreldrekompontene er i så stor grad som mulig igjen da bygget av sammensetninger av mindre komponenter.

Arkitetkur
Når det kommer til oppbyggningen så startet vi med en oppbyggning der vi statisk hadde hardkodet inn alle pathene til alle filer i systemet, og manglet passing av data i begge retninger. Dette er nok det største valget vi gjorde, at vi bygde om nesten alt av arkitektur i applikasjonen fra bunnen i den siste uken. I versjon 2 la vi ekstra vekt på at vi skulle ha gjenbrukbarhet og utvidbarhet, slik at applikasjonen lett skulle kunne tilpasses annet innhold. Dette er da det som er nevnt om at komponentene våre skulle bruke data fra foreldrekomponenter.

Testing
Når det kommer til testing har vi som foreslått brukt opptil 4 enheter til å sjekke at det responsive designet fungerte. Gjennom hele utviklingsprosessen så ble hele applikasjoner og deler testet i 4 forskjellige størrelser og format.  Siden det ikke var satt store krav til testing har vi ikke gjennomført større testing av selve koden, men mest om den oppfyller kravene til responsivitet.


Når det kommer til responsivt design valgte vi å starte med det, applikasjonen skifter format når skjermen er på et gitt antall piksler. Dette skal være det eneste som er nødvendig for en applikasjon av denne typen.

AJAX

Måten vi implementerte AJAX i denne applikasjonene var ved at vi brukte den innbygde fetch funksjonen i React til å asykront laste inn det forskjellige komponentene våre.
Vi valgte dette over et tredjepartsbiblotek fordi vi ikke så noe behov for mer avanserte funksjonaliteter enn det fetch kunne tilby. Fetch har oppfylt alle kravene vi hadde, og med begrenset tid, så hadde vi ikke mulighet til å lære oss flere nye teknologier, siden vi jevnt over ikke var sterke i React på forhånd, så det allerede krevde en del å få satt seg inn i de teknologiene vi skulle bruke.


Viewport:

Denne teknologien ble primært brukt for å gjennomføre kravet om responsivt design. Med den dynamiske skaleringen, så ga dette oss en enkel måte å innfri kravet om repsonsivt design.


Bilder

Måten vi løste bildene var gjennom en veldig enkel mappestruktur, der bildene lå fordelt nedover slik som det ble anvist i oppgaveteksten. Hovedsaklig ble bildene valgt gjennom en path state som var satt av data som ble passert fra MediaCategory og Tab. Sammen så lagde dette en path som videre ble brukt til å sende data om hvilken svg fetch funksjonen vår skulle hente. Dette var en relativt enkel og direkte løsning på problemet.


Det er et krav vi ikke har innfridd og det er kravet om lokallagring, grunnet blant annet utlandsopphold og noe sykdom i gruppen så ble den siste funksjonen aldri fullført. Grunnen til at dette ble den funksjonen som ikke ble fullført var fordi den ble ansatt som ikke-essensiell for de andre funksjonene i systemet. Dermed kunne den bli "utsatt" til slutten av prosjektet. Skulle vi gjennomført den vil vi anvendt localStorage.x funksjonene til å bygge et enkelt system for å lagre til lokalminnnet.  




Link to hours worked: https://docs.google.com/spreadsheets/d/1p9pLlhXYHj3e3FnndWveyQrbDi2-RuWTf4lVoRMdHQ4/edit#gid=0
