



# API-Dylan
## Dag 1 (1 april)
### Werkzaamheden
Vandaag ben ik thuisgebleven want ik voelde me helemaal niet lekker. Helaas geen goed begin van het vak want ik heb veel uitleg gemist. Melvin heeft me wel op de hoogte gehouden van wat we met dit vak gaan doen, maar ik sta wel al gelijk een stap achter aangezien ik geen workshops/voorbeelden heb gezien.
De opdracht is: Maak een server side rendered (SSR) website die gebruik maakt van web- en content APIs.

Ik ben vandaag vooral bezig geweest met kijken wat ik gemist heb, de opdracht proberen te snappen en ik ben vooral bezig geweest met Node installeren en Astro werkend maken. Ik heb een tijdje vast gezeten maar uiteindelijk is het gelukt.

### Checkout met Melvin
Melvin voelde zich net als ik niet zo lekker en was eerder naar huis gegaan. Ik heb samen met hem de checkout gedaan. Verder heeft hij me geholpen met Astro waar ik nog vast liep. 

### Week Overzicht:
Op donderdag heb ik gesprek gehad met mijn clubje + Cyd. Ik heb 3 concepten
1 - Video Game Trivia - Je krijgt vragen uit een API op basis van moeilijkheidsgraad en over spellen die je wel/niet kent. Je antwoorden worden opgeslagen met LocalStorage en je maakt gebruik van pointer events om 

Content API: Open Trivia Database (OpenTDB)
Web API #1: Localstorage
Web API #2: 

Multiplayer quiz: websocket api

2 - Interactief pokemon spel. Je kunt pokemon vinden op basis van verschillende factoren, zoals tijd en locatie en kunt een team samen stellen. Verder kun je met een controller rondbewegen in een wereld weergegeven op een canvas.
Content API: PokeAPI
Web API #1: Gamepad
Web API #2: Canvas

3 - Levels uit een API. Er worden verschillende levels uit een API opgehaald die je kunt spelen. Ik heb nog geen concreet plan. Denk aan verschillende platformer levels, doolhoven, puzzels etc.
Content API: ?
Web API #1: ?
Web API #2: ?

Formule 1 Kaarten


Ik heb uiteindelijk na feedback van Cyd en mijn clubje gekozen voor het pokemon idee met de nadruk op het kunnen lopen in een wereld met een canvas en daarin op verschillende plekken, verschillende pokemon tegenkomen.





## Dag 2 (8 april)
Vandaag hebben we in de ochtend een college gehad over de indeling van Astro, over layouts, components etc. Hier heb ik wel veel aan gehad. Ik heb nu in mijn eigen website ook een index, een main layout met daarin de content, een header en een footer. Daarnaast zitten er in de index nog kaarten voor alle pokemon. Deze worden ook uit een component gehaald. Verder heb ik nog een global.css voor de globale stylings.

Op mijn index heb ik nu een overzicht van alle pokemon. Het zijn er 493 want dat is generatie 1 t/m 4. Verder kun je op alle kaarten klikken en op een detail pagina komen. Elke pokemon heeft een detail pagina. De pagina heet [name].astro waarin de naam wordt vervangen met de naam van de pokemon. Momenteel laadt ik de API op zowel de index als de detailpagina, dus ik moet daar nog een oplossing voor vinden, want nu heb ik 2x dezelfde code wat ik uiteraard liever niet heb.


### Checkout met Sabrina
Vandaag ben ik gerandomized met Sabrina. Zij heeft een idee over Harry Potter spells en heeft nu een canvas waarop je kunt tekenen. Ik heb laten zien wat ik nu heb. Morgen ben ik van plan om een random pokemon te laten spawnen en deze te kunnen filteren met knoppen.




## Dag 3 (9 april)
### Werkzaamheden
Vandaag ben ik in de ochtend bezig geweest met de detailpagina. Ik heb ervoor gezorgd dat dat deze nu iets meer styling heeft. Ik wil nog wat meer doen maar voor nu is het een goede basis. Daarnaast wilde ik dat ik niet de API op 2 aparte paginas moest inladen. Ik heb met hulp van Jad een shared.ts bestand gemaakt die dan wordt geimporteerd op elke pagina. Nu is mijn code iets meer DRY en als ik het aantal pokemon wil aanpassen hoef ik nu op maar 1 pagina code aan te passen.

Verder heb ik een nieuwe pagina toegevoegd. Voor nu heet deze de randomizer. Op deze pagina heb je een knop en daarmee komt een willekeurige pokemon. Wat leuk! Daarna heb ik ervoor gezorgd dat je kan filteren op types. Bijvoorbeeld als je filtert op FIRE, kun je alleen maar vuur pokemon tegenkomen zoals Charmander, Ponyta etc. 

Daarnaast wilde ik slider hebben waarmee je de "sterkte" van de pokemon kon bepalen. Als de slider laag staat kom je waarschijnlijk een zwakke pokemon tegen en als de slider hoog staat kom je een sterke pokemon tegen. Ik bedoel hiermee niet alleen de ATK stats, maar de gecombineerde stats van ze allemaal. Ik heb wel even moeten sleutelen om dit goed te doen. Er zijn namelijk pokemon, zoals bv. Geodude, met hoge DEF maar slechte andere stats. Als je het gemiddelde van alle stats calculeert zou Geodude juist heel hoog plaatsen ondanks hij een van de lagere hoort te zijn. Ik heb ervoor gezorgd dat als maar 1 stat hoog zit en de rest niet dat deze dan minder telt. Ik heb nu een systeem die wel prima is, niet perfect maar goed genoeg. Zolang ik niet individuele pokemon hoef te filteren is dit al best goed.

In de tussentijd heb ik zowel de overzichts, als de detailpagina in de header gezet. Je kan nu van de ene pagina naar de ander. Detail staat er natuurlijk niet in want die is voor elke pokemon uniek.

Nog 2 dingen die ik aan de randomizerpagina heb toegevoegd. Ten eerste heb ik 4 willekeurige moves die de pokemon kan leren toegevoegd. Deze zullen random bepaald worden. De moves worden uit de API gehaald. Daarnaast heb ik een vang systeem toegevoegd. Elke pokemon heeft een eigen catch rate wanneer ze met een pokeball gevangen worden. Deze wordt toegepast. Als je probeert te vangen dan heb je een bepaalde kans dat je de pokemon krijgt of hij breekt los. Als hij los breekt, komt er een tekst in beeld. Als je hem vangt wordt de pokemon aan een lijst toegevoegd. Ik heb ervoor gezorgd dat de lijst te zien is in de footer. De footer wordt alleen nog niet geupdatet per pagina. Hier wil ik localstorage voor gebruiken. 


### Checkout met Maja
Vandaag werd ik gerandomized met Maja. Zij is bezig met een DND Character builder. Afhankelijk van keuzes die je maakt heeft het karakter verschillende stats, best wel nice. Ik ben zelf van plan om volgende week mijn idee met het canvas uit te werken aangezien het daar wel tijd voor wordt.

## Week 2 Overzicht

Astro werkend, layouts, components etc

Pokemon Overzicht

<img src="public/readme-img/Week2-overzichtspagina" alt="Afbeelding van het week 2 overzichtspagina" height=400px>

<img src="img/readme-img/Week2-overzichtspagina" alt="Afbeelding van het week 2 overzichtspagina" height=400px>

Pokemon Detail

<img src="img/readme-img/Week2-detailpagina" alt="Afbeelding van het week 2 detailspagina" height=400px>



Verder had ik vrijdag nog het gesprek met mijn clubje + Cyd, hiervan de aantekeningen:
- Hover state moet weg als er geen klik is, grote pet peeve van Cyd
- Pokemon trading card styling voor detailpagina, wel een leuk idee. 
- Localstorage voor pokemon lijst.
- Focus op de wereld maken, mijn unieke functie moet ik nu wel echt aan beginnen, dus volgende week gaan we canvas doen.




## Dag 4 (15 april)
### Werkzaamheden
Vandaag ben ik thuisgebleven aangezien ik dacht dat er vandaag geen docenten aanwezig zouden zijn. Blijkbaar had Jad vandaag lesgegeven, maar dat had ik zelf niet gezien. In de planning staat deze hele week leeg, dus dat had ik niet echt kunnen weten. Morgen ben ik van plan om wel te komen.

Ik kreeg vorige week als feedback om echt te gaan beginnen met mijn unieke functie, dus dat ben ik gaan doen. Ik heb vandaag (en deels vorige week vrijdag) mijn canvas werkend gekregen. Ik had hier al ervaring mee in Sprint0 en vorige jaren dus dit ging me al best goed af. Ik heb een gebied gemaakt waarin je rond kunt lopen met WASD. Verder als je bij de rand van het scherm komt, dan stopt de camera met bewegen.

Ik heb een tilemap gevonden online. Bron staat in de bronnenlijst. Deze lijkt me wel geschikt aangezien er veel graspaden zijn, oftewel veel verschillende pokemon mogelijkheden. Het liefst had ik wel meer variatie in de wereld, maar ik wil niet te veel tijd besteden aan een hele map zelf maken, dus we zullen het hiermee doen. Misschien ga ik de PNG nog een beetje met kleur aanpassen om meer typings aan te duiden.

Ik heb veel tijd besteed aan collisions. Aangezien de hele map een PNG is, inclusief de bomen en stenen, moet ik alle collision er handmatig inzetten. Ik heb dus overal onzichtbare (of voor nu roodgekleurde) muren neergezet om ervoor te zorgen dat de speler niet door bomen heen kan lopen en buiten bounds heen kan. 

Als laatste heb ik nog een speler sprite toegevoegd. Deze staat ook in de bronnenlijst. Het zijn 16 sprites, 4 voor elke zijde inclusief staan en lopen. 


### Checkout met Melvin
Omdat we allebei vanuit huis zijn wezen werken, hebben we wederom samen checkout gedaan. Ik heb nu een canvas waarin je kunt rondlopen met toegevoegde hitboxes voor collision met muren en hij is bezig met AR waarmee hij pokemon op zijn camera zichtbaar kan maken die met je mee bewegen aan de hand van de positie van je gezicht. Best tof. Morgen ga ik proberen om het gras in de wereld werkend te maken en dan pokemon te laten spawnen. Ik moet mijn scripts gaan combineren. Verder wil ik localstorage gaan gebruiken voor de pokemon die je vangt. Ook moet ik nog even code toevoegen om een vaste framerate in te stellen, zodat het spel niet te snel/langzaam loopt op bepaalde devices. 


## Dag 5 (16 april)
### Werkzaamheden
Vandaag ben ik wel naar school gegaan. Het lokaal was bezet maar aan de andere kant van de gang was het vrij, dus kon ik daar werken. Ik heb vandaag de collisions afgemaakt, alle muren staan nu goed. Ik heb een hoop gepriegeld met de coordinaten totdat ik er tevreden mee was. Vervolgens heb ik gras toegevoegd. Hier heb ik ook alle hitboxes voor ingezet met alle coordinaten. Ik heb losse bestanden gemaakt voor alle locaties van de muren/het gras. Als je door het gras loopt, heb je kans dat je wordt doorgestuurd naar de randomizer pagina. Dit werkt door een random waarde te geven wanneer je het gras aanraakt die steeds meer omlaag gaat als je erin loopt. Ik moet even goed gaan nadenken over hoe ik het er precies uit wil laten zien. Moet de randomizer code op de canvas? Blijven het meerdere pagina's. Wat ga ik met de header doen? Dit zijn de keuzes die ik moet maken. Ik zit er aan te denken om de header gewoon een paar fixed buttons maken die in de hoeken te zien zijn, zodat je de hele canvas full screen kan gebruiken.

### Checkout met Melvin
Wederom heb ik mijn checkout met Melvin gedaan. Hij heeft meer progressie gemaakt aan zijn AR idee en heeft meer styling erin zitten. Ik moet zelf ook aan de bak met mijn styling. Ik wil voor de detailpagina Pokemon trading card styling toepassen. Verder moet ook de overzichts, randomizer en canvas pagina gedaan worden.

## Week 3 Overzicht

Alles over Canvas



Foto van de wereld

Foto van hitboxes

## Dag 6 (22 april)
### Werkzaamheden
Vandaag hebben we een college gehad over onze site online zetten op onrender. Dit ging wel goed, ik had na wat hulp van Jad hem succesvol online gekregen. Wel waren mijn canvas en mijn randomizer gesloopt. Dit kwam omdat de canvas images niet werden opgehaald aangezien deze niet te bereiken waren door de renderer. Ditzelfde geldt voor het script voor de localstorage. Toen ik eenmaal alles verplaatst had deed alles het weer goed.

Verder ben ik vandaag vooral bezig geweest met styling. Vooral aan de detailpagina heb ik veel gewerkt. Ik had het idee gekregen om de detailpagina te baseren op pokemon kaarten. Ik heb de styling van de pokemon TCG toegpepast op de detailpagina met de informatie die ik uit de API kan halen.

Verder heb ik de overzichtspagina en de header beter gestyled. Ik heb verschillende dingen geprobeerd, veel waren of te saai of hadden te veel felle kleuren. Uiteindelijk heb ik gekozen voor een soort laboratorium gevoel. Dit heb ik toegepast op de header, overzichts- en detailpagina.

Dit ging allemaal wel goed, maar ik moet vaak mijn site opnieuw opstarten zodat de styling wordt toegepast.

### Checkout met Melvin
vandaag werd ik gerandomized met Aya A. Maar omdat ze niet in het lokaal was heb ik hem wederom gedaan met Melvin. Hij is bezig geweest met styling voor zijn knoppen, heeft hij zijn code schoner gemaakt en ook zijn repo online gezet. Hij gaat morgen aan detailpagina en UI werken. Ik ga morgen mijn randomizer combineren met mijn canvas. Verder wil ik de styling voor allebei die pagina's dan gaan fixen.

## Dag 7 (23 april)
### Werkzaamheden

Detailpagina vorige volgende

Canvas battle image

Front sprites enemies

Back sprites jezelf

Localstorage

Canvas laadt soms niet in render.

### Checkout met Romy
Vandaag werd ik gerandomized met Thije, maar hij was er niet. Zij heeft een Spotify API en daarin kun je liedjes genereren en opslaan. Zij had moeite met nieuwe liedjes genereren via de API die ze gebruikt, dus heeft ze voor nu wat dummy songs in een JSON staan. Ik heb laten zien wat ik heb. Ik heb vandaag veel in het canvas gewerkt. Vandaag was de laatste les, ik zou het leuk vinden om nog een swap functie toe te voegen en heel graag als het kan een battle functie. Maar er werd wel aangeraden om dat alleen te doen als dat echt kan aangezien dat wel een complex project is.

## Week 4 overzicht

Fotos



### Gesprek met Cyd & clubje
Design:
- Overzichtspagina moet beter
- Navigatie moet beter of er helemaal uit
- Randomizer hoeft niet in de navigatie  
- Detailpagina achtergrond plaatje
- Detailpagina View transitiions 
- Canvas groter maken
- Footer als side panel

Canvas Logica:
- Verschillende pokemon in elk gras
- Pokemon swappen
- Muren boven/onder
- Minder pokemon, kijken of dat sneller laadt
- Starter Pokemon
- Vechten? :D
- Muziek / SFX
- Betere knoppen tijdens encounter

## Bronnenlijst
Video over Astro
Link: https://www.youtube.com/watch?v=dsTXcSeAZq8

Lijst met Web API's
Link: https://developer.mozilla.org/en-US/docs/Web/API

Lijst met content API's 
Link: https://github.com/public-apis/public-apis?utm_source=chatgpt.com

Tilemap
Link: https://projectpokemon.org/home/forums/topic/54669-ndsmm-how-to-map-in-pokemon-gen-4/

Tilemap (degene die ik gebruikt heb)
Link PNG: https://www.rebornevo.com/uploads/monthly_2023_03/Route1.png.f760ee448af075e4c51d29b7d6307e08.png
Link Post: https://www.rebornevo.com/forums/topic/16872-mapscreenshotsprite-showcase/

Unused Pokemon maps
Link: https://tcrf.net/Pok%C3%A9mon_Gold_and_Silver/Unused_Maps

Trainer spritesheet
Link: https://www.deviantart.com/scizorbytes/art/Battle-Legend-Red-Gen-4-Overworld-Sprites-917367151

Cyd's View Transitions
Link: https://www.youtube.com/watch?v=Bq5GVrXO6jE&t=579s

Battle Achtergrond
Link PNG: https://i.imgur.com/lhu26US.png
Link Post: https://www.pokecommunity.com/threads/inserting-battle-backgrounds.302401/ 
























# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
