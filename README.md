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
	 
   [h2]: <http://www.h2database.com/html/main.html>
   [JPA]: <https://www.tutorialspoint.com/jpa/>
   [MVC]: <http://web.progtanulo.hu/web-programozas-alapismeretek/3-szerver-oldali-mukodes/310-tervezesi-mintak/3103-mvc>
   [JUnit]: <https://junit.org/junit4/>
	
 
