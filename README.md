 # Mozi
 
 ## Feladat funkcionális követelményei
 
 ### Webes felhasználói felület
 
 - Főoldalon a legnépszerűbb filmek
 - Filmekre kattintva megtekinthető a film bemutatása
 - Moziműsor megtekintése egy hétre előre
 - Rá lehet szűrni a vetítésekre film, illetve dátum alapján
 - Időpontra kattintva lehetőség nyílik jegyeket foglalni
 - Meg kell adni, hogy hány főre és hogy diák vagy felnőtt jegy(ek)et szeretnénk foglalni
 - Végül tudunk választani a szabad ülőhelyek közül és az adataink megadásával érvénybe lép a foglalás 
 
 ### Grafikus adminisztrátori felület
 
 - Vetítések felvitele megfelelő időpontban
 - Filmek felvitele, módosítása és törlése
 - Foglalások megtekintése és kezelése
 
 ## Feladat nem funkcionális követelményei
 
 - H2 adatbáziskezelő használata
 - JPA
 - MVC architektúra a felhasználói funkciók biztosítására
 - A kliens biztosítja a megadott adatok megjelenítését és szerkesztését
 - JUnit tesztek
 
 ## Szakterületi fogalomjegyzék
 
 | Fogalom | Magyarázat |
 | ------ | ------ |
 | Szerver | Egy programot, ami egy, vagy több számítógépen fut, és kezeli a hálózat rendelkezésre álló erőforrásait és szolgáltatásait, miközben fogadja a különböző számítógépek hozzáférési kérelmeit az említett erőforrásokhoz. |
 | Kliens | Egy program, amely hozzáfér egy szolgáltatáshoz, melyet a szerver nyújt.|
 | * [h2] | Java SQL adatbáziskezelő. |
 | * [JPA] | Keretrendszer a JAVA programozási nyelvhez, fő feladata a relációs adatok kezelése. |
 | * [MVC] | (Model-View-Controller) Szerkezeti minta a felhasználói felület, az alkalmazás logikájának és a vezérlés szétválasztásához. |
 | * [JUnit] | Egységteszt keretrendszer a JAVA nyelvhez. |
 
 ## Szerepkörök
 
 ### Nézők:
 
 - Moziműsor megtekintése
 - Filmek leírásának megtekintése
 - Jegy(ek) rendelése
 - Jegy tulajdonságainak testreszabása (Felnőtt/Diák)
 - Tetszőleges hely kiválasztása (az adott moziterem kapacitásának, és az addig lefoglalt helyek figyelembe vételével)
 - Foglalás véglegesítése (név és e-mail cím megadásával)
 ### Alkalmazottak:
 
 - Előadások meghirdetése
 - Foglalások megtekintése és kezelése
 - Új film felvitele az adatai megadásával
 - Filmek módosítása, törlése
 - Új vetítés meghirdetése
 
 ## A fejlesztői környezet és eszközök bemutatása:
 
A project a NetBeans nevű fejlesztői környezetben készült a Maven Project, mely egy olyan fejlesztői eszköz, amivel könnyen lehet felhasználni más modulokat/plug-in-eket, és leszedi az ehhez szükséges dependencyket(függőségeket), valamint a Spring Boot felhasználásával, mely egy olyan eszköz, amellyel könnyen és gyorsan lehet prototípusokat létrehozni. Továbbá felhasználtuk a h2 adatbázis motort is a projectben, mely Java SQL adatbázist vezényel, illetve a Lombok nevű plug-in-t, aminek köszönhetően nem kell gettereket, settereket írni, valamint összehasonlító(equals) metódusokat.

 ## Adatbázis terv:
 
![Tervezett adatbázis struktúra](https://github.com/bornemis/Cinema/blob/master/erDiagram.png)

## Alkalmazott könyvtárstruktúra bemutatása:

![Alkalmazott könyvtárstruktúra](https://github.com/bornemis/Cinema/blob/master/packageDiagram.png)
 A forrás fájlok a cinema nevű főkönyvtárban találhatók, mely több alkönyvtárra ágazik szét:
 - controllers
  - security
  - entities
  - repositories
  
 A fő könyvtárban található a CinemaApplication.java fájl mely a program belépési pontja (itt található a main metódus).
 
 ## Végpont-tervek és leírások:
 
 ### ChairController:
 
 | Végpont | Leírás |
 | ------ | ------ |
 | /chairs | Le lehet kérni az összes széket az adatbázisban, illetve új széket adhatunk hozzá. Ha a User admin, akkor az összeset, ha felhasználó, akkor pedig a hozzá tartozó székeket. |
 | /chairs/{id} | Azonosító szerint lehet lekérni az adott széket , lehet módosítani, illetve törölni. |
 
 ### MovieController:
 
 | Végpont | Leírás |
 | ------ | ------ |
 | /movies | Le lehet kérni az összes filmet az adatbázisban, illetve új filmet lehet hozzáaadni. |
 | /movies/{id} | Azonosító szerint lehet lekérni az adott filmet, lehet módosítani, illetve törölni. |
 | /movies/{id}/screenings | Le lehet kérni az adott filmhez tartozó összes vetítést, illetve hozzá lehet adni új vetítést az adott filmhez. |
 | /movies/{id}/chairs | Le lehet kérni az adott filmhez tartozó összes lefoglalt széket (tehát más szóval az összes foglalást az összes vetítésre), illetve hozzá lehet adni új széket (=foglalást) az adott filmhez, továbbá módosítani lehet a székeket (pl.: foglalt-ból eladott-at csinálni). |
 
 ### RoomController:
 
 | Végpont | Leírás |
 | ------ | ------ |
 | /rooms | Le lehet kérni az összes termet az adatbázisban, illetve hozzá lehet új termet adni. |
 | /rooms/{id} | Az adott azonosítójú termet kérhetjük le, módosíthatjuk, illetve törölhetjük. |
 | /rooms/{id}/chairs | Az adott azonosítójú teremnek kérhetjük le az összes székét (hogy foglalt-e/eladott és, hogy ki foglalta le stb.), illetve, ha lefoglalnak új széket, akkor itt is hozzá lehet adni. |
 | /rooms/{id}/screenings | Megkaphatjuk az összes vetítést az adott azonosítójú teremhez, illetve újabb vetítést adhatunk hozzá. |
 
 ### ScreeningController:
 
 | Végpont | Leírás |
 | ------ | ------ |
 | /screenings | Le lehet kérni az összes vetítést az adatbázisban, illetve hozzá lehet új vetítést adni. |
 | /screenings/{id} | Az adott azonosítójú vetítést kérhetjük le, módosíthatjuk, illetve törölhetjük. |
 | /screenings/{id}/chairs | Az adott azonosítójú vetÍtéshez kérhetjük le a székeket (foglalási adatok), illetve adhatunk hozzá székeket (új foglalást). |
 | /screenings/{id}/rooms | Az adott azonosítójú vetÍtéshez kérhetjük le a hozzá tartozó termet. |
 
 ### UserController:
 
 | Végpont | Leírás |
 | ------ | ------ |
 | /users/register | Új felhasználót tudunk hozzáadni. |
 | /users/login | Bejelentkezéssel azonosítani tudjuk a felhasználót. |
 
 ## 1db végpont működésének leírása:
 
 Vegyük például a MovieController osztályt, és az abban található „movies/{id}/screenings” végpontot. Ehhez 2 metódus tartozik a screenings (a vetítések listázása) és az insertScreening metódus.
 A „movies/{id]/screenings” végpontra érkezik a kérés, ezt a Controller elkapja, és a paraméterek alapján beazonosítja, hogy a screenings vagy az insertScreening metódust kell-e használnia.
 
### screenings metódus:
Megkeresi a filmet a film azonosítója (id) szerint, ha talált az adott azonosítóval filmet, akkor, a ResponseEntity ok metódusának segítségével visszaküldi a filmhez tartozó vetítéseket, ha nem, akkor pedig egy nem talált válasz entitást fog buildelni, amit visszaküld a ResponseEntity notFound metódusával.

![screenings végpont leírása](https://github.com/bornemis/Cinema/blob/master/screenings.png)

 ### insertScreening metódus:

Megkeresi a filmet a film azonosítója (id) szerint, ha talált az adott azonosítóval filmet, akkor a paraméterben kapott Screening objekutmnak beállítja az adott adott azonosítójú filmet, és a ResponseEntity ok metódusának segítségével elmenti a screeningRepository-ba (tehát a Screenings táblába) az adott vetítést, ha nincs az adott azonosítóval film, akkor pedig a ResponseEntity notFound metódusával egy nem talált válasz entitást fog buildelni.

![insertScreening végpont leírása](https://github.com/bornemis/Cinema/blob/master/insertScreening.png)

 ## Fontosabb Specifikumok:
 
A chairs táblában az összes adatot csak az admin tudja megnézni, movies táblába adatot felvinni, törölni és módosítani is csak az admin tud, illetve a screenings és a rooms táblába felvinni, módosítani és törölni is csak az admin tud. A guest csak meg tudja nézni a vetítések, illetve a filmek listáját, a user foglalni is tud, és le tudja kérni a saját foglalásainak adatait.

 ### Szerepkörök és funkciók kapcsolata
 
![Adminisztrátóri funkciók](https://github.com/bornemis/Cinema/blob/master/adminUseCase.png)
![Felhasználói funkciók](https://github.com/bornemis/Cinema/blob/master/userUseCase.png)
![Vendég funkciók](https://github.com/bornemis/Cinema/blob/master/guestUseCase.png)

 ## Kliens oldali fejlesztői környezet bemutatása
 Ezen projekt fejlesztéséhez az [Angular CLI](https://github.com/angular/angular-cli) nevű program 6.2.5 verziója lett használva.
 
 A kliens oldali fejlesztés Visual Studio Code környezetben történt. Felhasználtuk az AngularJS-t, amely egy struktúrális szerkezetet nyújt a dinamikus webes alkalmazásokhoz. Engedélyezi, hogy HTML-t lehessen használni a template-ek nyelvéhez, de ennek a kiterjesztését is, hogy a komponenseket árnyaltabban tudjuk leírni, továbbá a JavaScryptet és a TypeScyptet is, illetve a css-t is. A css a kinézetért felelős, a TypeScrypt, illetve a Javascrypt pedig a logikáért, a html pedig a különböző elemek elrendezéséért a megjelenő felületen.

## Fejlesztői szerver

Futtasuk le az `ng serve` parancsot. A böngésző címsorába másoljuk be a `http://localhost:4200/` szöveget. Ezen az oldalon az aplikáció folyamatosan frissül, ha a háttérben módosítunk valamit. Npm install-lal installálunk minden, a futáshoz kellő komponenst, és npm start-tal elindíthatuk az aplikációnkat.
## Kódolást segítő parancsok

Használjuk a `ng generate component component-name` parancsot új komponensek létrehozásához, tovább használhatuk az `ng generate directive|pipe|service|class|guard|interface|enum|module` parancsokat, a nevüknek megfelelő elemek létrehozásához.

## Build

Adjuk ki az `ng build` parancsot a parancssorban a proekt build-eléséhez. A build-elt elemek a `dist/` könyvtárba kerülnek. 

## További segítség
További segítséget az Angular CLI használatához az `ng help` parancs kiadásával kaphatunk, illetve, az [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md) elolvasásával.
 ### Kliens oldali könyvtárszerkezet
 
 ![Kliens oldali könyvtárszerkezet](https://github.com/bornemis/Cinema/blob/master/clientPackageDiagram.png)
 
 ### Felületi tervek, oldalvázlatok
 
![Tervezett főoldal](https://github.com/bornemis/Cinema/blob/master/mainPagePlan.png)
![Tervezett vetítések listája](https://github.com/bornemis/Cinema/blob/master/screeningListPlan.png)
![Tervezett vetítések listája felhasználóként belépve](https://github.com/bornemis/Cinema/blob/master/screeningListUserPlan.png)
![Tervezett filmek listája](https://github.com/bornemis/Cinema/blob/master/movieListPlan.png)
![Tervezett új foglalás megvalósítása](https://github.com/bornemis/Cinema/blob/master/createNewLendingPlan.png)

### Kliens oldali szolgáltatások

Autentikáció (auth.service.ts)
-Login eljárás: A UserControllerben található /users/login végponton POST-olja a username és password által generált tokent, ha a kapott válaszból érkező user admin, akkor adminként léptetjük be (this.isADmin=true), ha nem, akkor felhasználóként. Ha hiba keletkezik a bejelentkezés sikertelen és false-al tér vissza az eljárás.
-Logout eljárás: Egyszerűen kilépteti a usert, minden szükséges változót átállít.
-Register eljárás: A /users/register végpontra posztolja a kért felhasználónevet és jelszót, a controllerben létrejön a felhasználó az adott jelszóval. Kivétel keletkezhet, ha már létezik adott nevű felhasználó.

Foglalások (char.service.ts)
A kérések a /chairs végponton, vagy azon belül mennek végbe, a kezelésük a ChairsController osztályban található.
-getChairs(): egy get kérés az összes foglalásról, Chair[] az érték.e
-getChair(): paramétere egy id, /id végpontról lekéri az adott azonosítójú foglalást.
-modifyChair(): put kérés a /id végponton, ahol adminként a foglalást tudjuk módosítani.
-deleteChair(): szintén adott id alapján delete kérés, adminként lehetőségünk van foglalás törlésére.

Filmek (movie.service.ts)
A kérések a /movies végponton, vagy azon belül mennek végbe, a kezelésük a MovieController osztályban található.
-getMovies(): visszatérési értéke Movie[], vissza kapjuk az adatbázisban lévő filmeket.
-getMovie(): /id-n keresztül visszakapunk egy konkrét filmet.
-modifyMovie(): /id és PUT, admin tudja módosítani a film valamely paraméterét.
-deleteMovie(): /id DELETE, film törlése.
-getScreeningsToMovie(): /id/screenings, GET végponton megkapja a filmhez tartozó vetítéseket (Screening[]).
-addScreeningToMovie(): POST /id/screenings, a paraméterként átadott Screeninghez hozzáadja az adott id-val rendelkező filmet.
-getChairsToMovie(): GET /id/chairs, visszaadja a filmhez tartozó foglalásokat(Chair).

Termek (room.service.ts)
A kérések a /rooms végponton, vagy azon belül mennek végbe, kezelésük a RoomControllerben található.
-getRooms(): GET kérés, értéke Room[], az összes terem.
-getRoom(): /id alapján az adott terem.
-modifyRoom(): PUT /id, a terem azonosítóját lehet megváltoztatni.
-addRoom(): POST, létrehozza a paraméterben átadott Room-ot.
-deleteRoom(): DELETE, /id, törli az adott id-val rendelkező termet.
-getChairsToRoom(): GET, id/chairs, id alapján Chair[], a teremhez tartozó foglalások.
-getScreeningsToRoom(): GET, id/screenings, id alapján Screening[], a teremhez tartozó vetítések.





## Felhasználói dokumentáció

### Vendég felület

A vendég felhasználót az oldalra érkezést követően a a főoldalon moziban épp futó filmek listája fogadják.

A Filmek gombra kattintva kilistázódnak az éppen futó filmek. Megjelenítésre kerül a film címe, rendező, hossza és értékelése. Lehetőség van váltani a moziba érkező filmek megtekintésére, illetve minden film lekérdezésére. Az összes listázása esetén a kettő közti különbséget egy teli (már futó) és üres zöld csillag ábrázolja. Ha rákattintunk egy tetszőleges filmre, részletes leírást kapunk róla egy beágyazott trailer-videóval együtt.

Vetítésre navigálva listázásra kerülnek a vetítések. Ezekre kattintva megjelenek plusz információk arról, hogy melyik teremben lesz és milyen hosszú a film. Megjelenik egy jegy foglalás gomb is, amire vendégként kattintva az oldal elirányít minket a bejelentkező felületre, mivel jegyvásárláshoz be kell jelentkeznünk.

Regisztrálatlan felhasználónak itt van lehetősége regisztrálni. A regisztrációra kattintva csak a felhasználónevét és kétszer a jelszavát kell megadnia.

### Felhasználó felület

Ez a felület annyiban több, hogy a felhasználó már tud jegyet foglalni, illetve megjelenik 3 plusz új menüelem. Az egyik, csak egy személyes üdvözlőüzenet. A másik kijelentkezés gomb, amire kattintva a felhasználót kilépteti a rendszer. A harmadik, Foglalások gombbal ki lehet listázni minden eddigi foglalást, ezekre kattintva pedig plusz információk jelennek meg erre vonatkozóan, mint például pontos ülőhely, felnőtt/diák, stb..A vetítésekre kattintva lehetőségünk lesz lefoglalni illetve "megvásárolni" jegyet egy form-on keresztül.

Vetítésre jegyet foglalni többféleképp lehetésges. A filmek kilistázásánál ha egy filmre kattintunk, a lap alján a Vetítések listája gombra kattintva megjelennek az adott filmhez tartozó vetítések, erre, majd a Jegy foglalására kattintva megjelenik a kitöltendő form, előre beillesztve a film címével és a terem nevével. Itt az adatok megadása után létrejön a foglalás. A másik módja, hogy kilistázzuk az összes vetítést és utána megyünk a jegyfoglalásra.

### Admin felület

Az admin ugyanazon az utakon tudja elérni a login felületet, mint a felhasználó, itt tud belépni az adott admin név-jelszó párossal, hogy el tudja érni az adminisztrátori menüpontokat. Filmek menüpontra kattintva lehetősége van új filmet hozzááadni, itt egy form-on keresztül kell felvinni minden a filmre vonatkozó adatot. A legtöbb mező kitöltése kötelező, ezek nélkül nem engedi a rendszer elmenteni a filmet. 

Vetítések menüpontnál ugyanúgy van lehetőség hozzáadásra. Itt egy film-terem kapcsolatot kell megadni legördülő menüből, illetve időpontot, nyelvet és feliratot kell választani. 

Foglalások listázásánál az összes felhasználó foglalása megjelenik. El lehet különíteni a foglalt illetve a már kifizetett jegyeket egymástól.

Ki lehet listázni a termeket egy plusz menü elemmel, hozzá is lehet adni.


[h2]: <http://www.h2database.com/html/main.html>
[JPA]: <https://www.tutorialspoint.com/jpa/>
[MVC]: <http://web.progtanulo.hu/web-programozas-alapismeretek/3-szerver-oldali-mukodes/310-tervezesi-mintak/3103-mvc>
[JUnit]: <https://junit.org/junit4/>
