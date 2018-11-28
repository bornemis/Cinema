import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:8080/movies';
  movies: Movie[] = [
    {
      id: 1,
      title: "Micsoda nő",
      director: "Garry Marshall",
      movieType: ['Romantikus', 'Vígjáték'],
      ageLimit: '12',
      plot: "A jóképű és sikeres Edward Lewis üzleti ügyben Los Angelesben tartózkodik, amikor egyik este szórakozásképpen felcsípi az utcán sétáló csinos, de kezdő örömlányt, Viviant. Az este kellemesen telik, s másnap a férfi különös ajánlatot tesz a nőnek: megkéri, vegye át partnere szerepét egy igen fontos üzleti héten. Viviannek tetszik az ajánlat, bár gyakran nehéz feladatok elé kerül, ám varázslatos természetességgel és különös megérzéseivel oldja meg a kihívásokat. A különleges és izgalmas lánynak még végül a jégszívű üzletember sem állhat ellen. ",
      releaseDate: '2018-11-11',
      durationInMin: 125,
      status: "ACTUAL",
      posterLink: "./img/posters/prettywoman.jpg",
      trailerLink: "https://www.youtube.com/embed/T3Y16is7DNA",
      rating: '8.9/10'
    },
    {
      id: 2,
      title: "A Keresztapa",
      director: "Francis Ford Coppola",
      movieType: ['Gengszter', 'Dráma'],
      ageLimit: '16',
      plot: "A gengszterfilmek legnagyobbika, világhírű színészek és rendező munkája, minden idők egyik legnagyobb szabású maffiafilmje, a Keresztapa. A történet bemutatja azokat az embereket és azt a gépezetet, ami az olasz maffiában gyökerezve, a világ leghatalmasabb és legrettegettebb hatalmává vált az Egyesült Államokban. Figyelemmel követhetjük a kegyetlen, gyilkos módszereket, amivel a Corleone család feje dolgozik. Tanúi lehetünk a hihetetlen összetartásnak, az érdekek és a félelem összetartó erejének, ami ezt a világot jellemzi. Emberek sorsa, élet és halál kérdése dől el Don Vito Corleone dolgozószobájában. Egyesek védelemért fordulnak a nagyúrhoz, mások hadüzenettel érkeznek. A rivális maffia, a Tattaglia család ugyanis végső leszámolásra szólította fel a Corleone családot. S a hadüzenet után az egész város lángba borul. ",
      releaseDate: '2018-10-09',
      durationInMin: 125,
      status: "ACTUAL",
      posterLink: "./img/posters/godfather.jpg",
      trailerLink: "https://www.youtube.com/watch?v=HNWB7M6QkeM",
      rating: '9.5/10'
    },{
        id: 3,
        title: "Peppermint: A bosszú angyala",
        director: "Pierre Morel",
        movieType: ['Akció', 'Thriller', 'Dráma'],
        ageLimit: '16',
        plot: "Riley North (Jennifer Garner), szerető anya és feleség élete egy pillanat alatt összeomlik, mikor férjét és kislányát egy brutális támadásban megölik. A kómából felébredt nő igazságot akar, de az elkövetőket – egy befolyásos kartell tagjait – a korrupt bíróság felmenti. Riley nem nyugszik, amíg le nem számol a tettesekkel: vérbeli harcossá képezi ki magát, hogy egytől-egyig kiiktassa a családja haláláért felelős bűnözőket. A mindenre elszánt magányos harcosnak nem csak az alvilág felbőszült embereit, de a rendőrséget, és az FBI ügynökeit is ki kell játszania, hogy kíméletlen bosszúhadjáratát beteljesítse. Pierre Morel ikonikus akciósztárrá tette Liam Neesont a 2008-as nagy sikerű Elrabolva filmmel. A francia rendező egy évtized után egy kemény, mindenre elszánt anyával, azaz Jennifer Garnerrel tér vissza a zsánerhez. Az Alias-sorozaton edzett Golden Globe-díjas színésznő a bosszú angyalaként végre megmutatja mennyire jól áll neki a vérbeli akcióhős szerepe. ",
        releaseDate: '2018-11-13',
        durationInMin: 101,
        status: "ACTUAL",
        posterLink: "./img/posters/peppermint.jpg",
        trailerLink: "https://www.youtube.com/watch?v=FeKe1HaQOE0",
        rating: '8.5/10'
    },{
        id: 4,
        title: "Aquaman",
        director: "James Wan",
        movieType: ['Akció', 'Kaland', 'Fantasy'],
        ageLimit: '12',
        plot: "Ő az igazság ligája legerősebb tagja. Arthur Curry megtudja, hogy Atlantis, a víz alatti királyság trónja rá vár. Mint törvényes örökösnek, neki kell elfogadnia a koronát, hogy csatába vezesse a népét – mert a világ bajban van, és nincs, más, aki kiálljon érte. A DC-univerzum magasabb fokozatra kapcsol: Batman, Superman és a tavalyi év legnagyobb filmes meglepetéssikerét hozó Wonder Woman után az igazság ligájának új tagja válhat egy látványos, különösen izgalmas film főszereplőjévé. És Aquaman mellet ott lesz az összes régi ismerős – a legkeményebb szuperhősök csapata! ",
        releaseDate: '2018-12-13',
        durationInMin: 125,
        status: "COMING",
        posterLink: "./img/posters/aquaman.jpg",
        trailerLink: "https://www.youtube.com/watch?v=l-Z3kH-h3F4",
        rating: 'Még nem értékelt.'
    }
  ]
  constructor(private http: HttpClient) { }
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(
      this.movieUrl,
      httpOptions
    ).toPromise();
  }

  getMovie(id: number): Promise<Movie> {
    return this.http.get<Movie>(
      `${this.movieUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyMovie(id: number, movie: Movie):Promise<Movie> {
    return this.http.put<Movie>(
      `${this.movieUrl}/${id}`,
      movie,
      httpOptions
    ).toPromise();
  }
  addMovie(movie: Movie): Promise<Movie> {
    return this.http.post<Movie>(
      this.movieUrl,
      movie,
      httpOptions
    ).toPromise();
  }
  deleteMovie(id:number){
    return this.http.delete<Movie>(
      `${this.movieUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
}
