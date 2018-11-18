package hu.elte.cinema.controllers;

import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.Movie;
import hu.elte.cinema.entities.Screening;
import hu.elte.cinema.entities.User;
import hu.elte.cinema.repositories.ChairRepository;
import hu.elte.cinema.repositories.MovieRepository;
import hu.elte.cinema.repositories.ScreeningRepository;
import hu.elte.cinema.security.AuthenticatedUser;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieController {
    
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private ScreeningRepository screeningRepository;
    @Autowired
    private ChairRepository chairRepository;
    @Autowired
    private AuthenticatedUser authenticatedUser;
    @GetMapping("")
    public ResponseEntity<Iterable<Movie>> getAll() {
        return ResponseEntity.ok(movieRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Movie> get(@PathVariable Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return ResponseEntity.ok(movie.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Movie> post(@RequestBody Movie movie) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
        Movie savedMovie = movieRepository.save(movie);
        return ResponseEntity.ok(savedMovie);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    /*
    modositas, mi alapjan modositunk, melyik vegponton leszek
    path-ból kiolvassa az id-t, a htttp uzenetből kiolvassa az issue objectuomot,
    beadandónál a pathVariable az egyenlő-e, mint az issue id-ja, ha nem, akk badrequest hiba
    */
    @PutMapping("/{id}")
    public ResponseEntity<Movie> update(@PathVariable Integer id, @RequestBody Movie movie){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
            movie.setId(id); //igy nem kell lekezelni, hogy a pathVariable és az issue variable-je egyenlő-e
            return ResponseEntity.ok(movieRepository.save(movie));
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Movie> delete(@PathVariable Integer id){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
    Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
            movieRepository.deleteById(id);
            return ResponseEntity.ok().build(); //ha az ok()-nak nincs paramétere, akkor build()-et kell utána írni!
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
}
    @GetMapping("/{id}/screenings")
    public ResponseEntity<Iterable<Screening>> screenings
            (@PathVariable Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return ResponseEntity.ok(movie.get().getScreenings());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
                @PostMapping("/{id}/screenings")
    public ResponseEntity<Screening> insertScreening
            (@PathVariable Integer id,
             @RequestBody Screening screening) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
            Movie movie = oMovie.get();
            screening.setMovie(movie);
            return ResponseEntity.ok(
                screeningRepository.save(screening));
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping("/{id}/chairs")
    public ResponseEntity<Iterable<Chair>> chairs
        (@PathVariable Integer id) {
            User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
                switch (role) {
                    case ADMIN:
                        return ResponseEntity.ok(oMovie.get().getChairs());
                    case USER:
                        List<Chair> possibleChairs=oMovie.get().getChairs();
                        List<Chair> appropriateChairs=new ArrayList<>();
                        for(Chair pChair: possibleChairs){
                            if(pChair.getUser().getUserName().equals(user.getUserName())){
                                appropriateChairs.add(pChair);
                            }
                        }
                        return ResponseEntity.ok(appropriateChairs);
                    default:
                        return ResponseEntity.badRequest().build();
                }
        } else {
            return ResponseEntity.notFound().build();
        }
        
    }
    @PostMapping("/{id}/chairs")
    public ResponseEntity<Chair> insertChair
        (@PathVariable Integer id, 
         @RequestBody Chair chair) {
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
            Movie movie = oMovie.get();
            Chair newChair = chairRepository.save(chair);
            movie.getChairs().add(newChair);
            chairRepository.save(chair);
            return ResponseEntity.ok(newChair);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{id}/chairs")
    public ResponseEntity<Iterable<Chair>> modifyChairs
        (@PathVariable Integer id,
         @RequestBody List<Chair> chairs) {
            User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Movie> oMovie = movieRepository.findById(id);
        if (oMovie.isPresent()) {
            Movie movie = oMovie.get();
            
            for (Chair chair: chairs) {
                if (chair.getId() == null) {
                    chairRepository.save(chair);
                }
            }
            
            movie.setChairs(chairs);
            movieRepository.save(movie);
            return ResponseEntity.ok(chairs);
        }else{
            return ResponseEntity.notFound().build();
        }
    }else{
            return ResponseEntity.badRequest().build();
        }
}
}
