insert into user (user_name, password, enabled, role) values ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true, 'ADMIN');
insert into user (user_name,  enabled, role) values ('guest', true, 'GUEST');
insert into user (user_name,  password, enabled, role) values ('user1', '$2a$10$8VTK71JiOs1XHGbkc4SyMug17zOFhFg5qgBikxsOklPtNFN2mBcSm', true, 'USER'); 
insert into user (user_name,  password, enabled, role) values ('user2', '$2a$10$/D8sPKC/AlxDWcgEMD0SS.v9gW3hbCevJFh6ZGNmIFX67AQP4eJ2C', true, 'USER'); 

insert into movie (title, director, movie_type, age_limit, plot, release_date, duration_in_min, poster, rating, status) values('Peppermint: A bosszu angyala', 'Pierre Morel', 'Akcio, Thriller, Drama', '16', 'Riley North (Jennifer Garner), szereto anya és feleseg elete egy pillanat alatt osszeomlik, mikor ferjet es kislanyat egy brutalis tamadasban megolik. A komabol felebredt no igazsagot akar, de az elkovetoket – egy befolyasos kartell tagjait – a korrupt birosag felmenti. Riley nem nyugszik, amíg le nem szamol a tettesekkel: verbeli harcossa kepezi ki magat, hogy egytol-egyig kiiktassa a csaladja halalaert felelos bunozoket. A mindenre elszant maganyos harcosnak nem csak az alvilag felboszult embereit, de a rendorseget, es az FBI ugynokeit is ki kell jatszania, hogy kimeletlen bosszuhadjaratat beteljesitse. Pierre Morel ikonikus akciosztarra tette Liam Neesont a 2008-as nagy sikeru Elrabolva filmmel. A francia rendezo egy evtized utan egy kemeny, mindenre elszant anyaval, azaz Jennifer Garnerrel ter vissza a zsanerhez. Az Alias-sorozaton edzett Golden Globe-dijas szineszno a bosszu angyalakent vegre megmutatja mennyire jol all neki a verbeli akciohos szerepe. ',  CURRENT_TIMESTAMP(), 101, './img/posters/peppermint.jpg', '8.5/10','ACTUAL');
insert into movie (title, director, movie_type, age_limit, plot, release_date, duration_in_min, poster, status) values('Aquaman', 'James Wan', 'Akcio, Kaland, Fantasy', '12', 'O az igazsag ligaja legerosebb tagja. Arthur Curry megtudja, hogy Atlantis, a viz alatti kiralysag tronja ra var. Mint törvényes orokosnek, neki kell elfogadnia a koronát, hogy csatába vezesse a nepet – mert a vilag bajban van, es nincs, mas, aki kialljon erte. A DC-univerzum magasabb fokozatra kapcsol: Batman, Superman es a tavalyi ev legnagyobb filmes meglepetes sikeret hozo Wonder Woman utan az igazsag ligajanak uj tagja valhat egy latvanyos, kulonosen izgalmas film foszereplojeve. Es Aquaman mellet ott lesz az osszes regi ismeros – a legkemenyebb szuperhosok csapata! ',  CURRENT_TIMESTAMP(), 125, './img/posters/aquaman.jpg', 'COMING');
insert into movie (title, director, movie_type, age_limit, plot, release_date, duration_in_min, poster, rating, status) values('A Keresztapa', 'Francis Ford Coppola', 'Gengszter, Dráma', '16', 'A gengszterfilmek legnagyobbika, vilaghiru szineszek és rendezo munkaja, minden idok egyik legnagyobb szabasu maffiafilmje, a Keresztapa. A tortenet bemutatja azokat az embereket és azt a gepezetet, ami az olasz maffiaban gyokerezve, a vilag leghatalmasabb es legrettegettebb hatalmava valt az Egyesult Allamokban. Figyelemmel kovethetjuk a kegyetlen, gyilkos modszereket, amivel a Corleone csalad feje dolgozik. Tanui lehetunk a hihetetlen osszetartasnak, az erdekek es a felelem osszetarto erejenek, ami ezt a vilagot jellemzi. Emberek sorsa, elet es halal kerdese dol el Don Vito Corleone dolgozoszobajaban. Egyesek védelemert fordulnak a nagyurhoz, masok haduzenettel erkeznek. A rivalis maffia, a Tattaglia csalad ugyanis vegso leszamolasra szolitotta fel a Corleone csaladot. S a haduzenet utan az egesz varos langba borul.',  CURRENT_TIMESTAMP(), 125, './img/posters/godfather.jpg', '9.5/10', 'ACTUAL');
insert into movie (title, director, movie_type, age_limit, plot, release_date, duration_in_min, poster, trailer, rating, status) values('Micsoda nő', 'Garry Marshall', 'Romantikus, Vígjáték', '12', 'A jokepu es sikeres Edward Lewis uzleti ugyben Los Angelesben tartozkodik, amikor egyik este szorakozaskeppen felcsipi az utcan setalo csinos, de kezdo oromlanyt, Viviant. Az este kellemesen telik, s masnap a ferfi kulonos ajanlatot tesz a nonek: megkeri, vegye at partnere szerepet egy igen fontos uzleti heten. Viviannek tetszik az ajanlat, bar gyakran nehez feladatok ele kerul, am varazslatos termeszetesseggel es kulonos megerzeseivel oldja meg a kihivasokat. A kulonleges es izgalmas lanynak meg vegul a jegszivu uzletember sem allhat ellen.',  CURRENT_TIMESTAMP(), 125, './img/posters/prettywoman.jpg','https://www.youtube.com/embed/T3Y16is7DNA', '8.9/10', 'ACTUAL');

insert into room (room_name, number_of_rows, number_of_columns, available_places) values('16', 8, 10, 79);
insert into room (room_name, number_of_rows, number_of_columns, available_places) values('20', 5, 8, 20);

insert into screening (movie_title, room_name, start_time, movie_duration_in_min, d_type, screening_language, subscription, room_id) values ('Peppermint: A bosszu angyala', '20', CURRENT_TIMESTAMP(), 101, '3D', 'HUN', 'NONE', 2);

insert into chair (user_id, room_name, movie_title, row_number, column_number, customer_name, customer_email, ticket_type) values(2, '20', 'Peppermint: A bosszu angyala', 3, 4, 'Kiss Zoltan', 'zoltan.kiss@gmail.com', 'STUDENT');
insert into chair (user_id, room_name, movie_title, row_number, column_number, customer_name, customer_email, ticket_type) values(2, '20', 'Peppermint: A bosszu angyala', 3, 5, 'Kiss Zoltan', 'zoltan.kiss@gmail.com', 'ADULT');

insert into movie_chairs (movies_id, chairs_id) values(2, 1);
insert into movie_chairs (movies_id, chairs_id) values(2, 2);
