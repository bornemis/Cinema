/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.controllers;

import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.Movie;
import hu.elte.cinema.entities.Room;
import hu.elte.cinema.entities.Screening;
import hu.elte.cinema.entities.User;
import hu.elte.cinema.repositories.ScreeningRepository;
import hu.elte.cinema.repositories.ChairRepository;
import hu.elte.cinema.repositories.MovieRepository;
import hu.elte.cinema.repositories.RoomRepository;
import hu.elte.cinema.security.AuthenticatedUser;
import java.util.ArrayList;
import java.util.Iterator;
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
import org.springframework.web.bind.annotation.CrossOrigin;
/**
 *
 * @author Barby
 */
@CrossOrigin
@RestController
@RequestMapping("/screenings")
public class ScreeningController {
    
    @Autowired
    private ScreeningRepository screeningRepository;
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private ChairRepository chairRepository;
    @Autowired
    private AuthenticatedUser authenticatedUser;
    @GetMapping("")
    public ResponseEntity<Iterable<Screening>> getAll() {
        
        return ResponseEntity.ok(screeningRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Screening> get(@PathVariable Integer id) {
        Optional<Screening> screening = screeningRepository.findById(id);
        if (screening.isPresent()) {
            return ResponseEntity.ok(screening.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Screening> post(@RequestBody Screening screening) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)){
            Room room=findRoomByName(screening.getRoomName());
            if(room!=null){
                screening.setRoom(room);
            }
            Movie movie=findMovieByName(screening.getMovieTitle());
            if(movie!=null){
                screening.setMovie(movie);
            }
            Screening savedScreening = screeningRepository.save(screening);
            return ResponseEntity.ok(savedScreening);
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
    public ResponseEntity<Screening> update(@PathVariable Integer id, @RequestBody Screening screening){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)){
            Optional<Screening> oScreening = screeningRepository.findById(id);
            if (oScreening.isPresent()) {
                screening.setId(id); //igy nem kell lekezelni, hogy a pathVariable és az issue variable-je egyenlő-e
                Room room=findRoomByName(screening.getRoomName());
                if(room!=null){
                    screening.setRoom(room);
                }
                Movie movie=findMovieByName(screening.getMovieTitle());
                if(movie!=null){
                    screening.setMovie(movie);
                }
                return ResponseEntity.ok(screeningRepository.save(screening));
            } else {
                return ResponseEntity.notFound().build();
            }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Screening> delete(@PathVariable Integer id){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)){
        Optional<Screening> oMovie = screeningRepository.findById(id);
        if (oMovie.isPresent()) {
            screeningRepository.deleteById(id);
            return ResponseEntity.ok().build(); //ha az ok()-nak nincs paramétere, akkor build()-et kell utána írni!
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
        Optional<Screening> screening = screeningRepository.findById(id);
        if (screening.isPresent()) {
            if(role.equals(User.Role.ADMIN) || role.equals(User.Role.USER)){
            if(role.equals(User.Role.ADMIN)){
            return ResponseEntity.ok(screening.get().getChairs());
            }else{
                List<Chair> possibleChairs=screening.get().getChairs();
                List<Chair> appropriateChairs=new ArrayList<>();
                for(Chair pChair: possibleChairs){
                    if(pChair.getUser().getUserName().equals(user.getUserName())){
                        appropriateChairs.add(pChair);
                    }
                }
                return ResponseEntity.ok(appropriateChairs);
            }
            }else{
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
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        Optional<Screening> oScreening = screeningRepository.findById(id);
        if (oScreening.isPresent()) {
            if(role.equals(User.Role.ADMIN) || role.equals(User.Role.USER)){
            Screening screening = oScreening.get();
            chair.setUser(user);
            chair.setScreening(screening);
            Room room=findRoomByName(chair.getRoomName());
            if(room!=null){
            chair.setRoom(room);
            }
            return ResponseEntity.ok(
                chairRepository.save(chair));
            }else{
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            private Movie findMovieByName(String movieTitle){
                Iterable<Movie> movies=movieRepository.findAll();
                Iterator<Movie> it=movies.iterator();
                boolean l=true;
                Movie movie=null;
                while(it.hasNext() && l){
                    movie=it.next();
                    l=!movie.getTitle().equals(movieTitle);
                }
                if(l){
                    movie=null;
                }
                return movie;
            }
        private Room findRoomByName(String roomName){
        Iterable<Room> rooms=roomRepository.findAll();
        Iterator<Room> it=rooms.iterator();
        int i=0;
        Room room=null;
        boolean l=true;
        while(it.hasNext() && l){
            room=it.next();
            l=!(room.getRoomName()).equals(roomName);
        }
        if(l){
            room=null;
        }
        return room;
    }
    @GetMapping("/{id}/rooms")
    public ResponseEntity<Room> rooms
            (@PathVariable Integer id) {
                 User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Screening> screening = screeningRepository.findById(id);
        if (screening.isPresent()) {
            return ResponseEntity.ok(screening.get().getRoom());
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
 
}
