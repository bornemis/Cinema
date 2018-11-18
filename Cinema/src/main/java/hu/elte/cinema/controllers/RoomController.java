/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.controllers;

import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.Room;
import hu.elte.cinema.entities.Screening;
import hu.elte.cinema.entities.User;
import hu.elte.cinema.repositories.ChairRepository;
import hu.elte.cinema.repositories.MovieRepository;
import hu.elte.cinema.repositories.RoomRepository;
import hu.elte.cinema.repositories.ScreeningRepository;
import hu.elte.cinema.security.AuthenticatedUser;
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
@RequestMapping("/rooms")
public class RoomController {
    
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private ChairRepository chairRepository;
    @Autowired
    private ScreeningRepository screeningRepository;
    @Autowired
    private AuthenticatedUser authenticatedUser;
    @GetMapping("")
    public ResponseEntity<Iterable<Room>> getAll() {
        return ResponseEntity.ok(roomRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Room> get(@PathVariable Integer id) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return ResponseEntity.ok(room.get());
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Room> post(@RequestBody Room room) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Room savedRoom = roomRepository.save(room);
        return ResponseEntity.ok(savedRoom);
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
    public ResponseEntity<Room> update(@PathVariable Integer id, @RequestBody Room room){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> oRoom = roomRepository.findById(id);
        if (oRoom.isPresent()) {
            room.setId(id); //igy nem kell lekezelni, hogy a pathVariable és az issue variable-je egyenlő-e
            return ResponseEntity.ok(roomRepository.save(room));
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Room> delete(@PathVariable Integer id){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
    Optional<Room> oMovie = roomRepository.findById(id);
        if (oMovie.isPresent()) {
            roomRepository.deleteById(id);
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
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return ResponseEntity.ok(room.get().getChairs());
        } else {
            return ResponseEntity.notFound().build();
        }
            }else{
            return ResponseEntity.badRequest().build();
        }
    }
            
    @PostMapping("/{id}/chairs")
    public ResponseEntity<Chair> insertChair
            (@PathVariable Integer id,
             @RequestBody Chair chair) {
                 User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> oRoom = roomRepository.findById(id);
        if (oRoom.isPresent()) {
            Room room = oRoom.get();
            chair.setRoom(room);
            return ResponseEntity.ok(
                chairRepository.save(chair));
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
                 User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return ResponseEntity.ok(room.get().getScreenings());
        } else {
            return ResponseEntity.notFound().build();
        }
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    @PostMapping("/{id}/screenings")
    public ResponseEntity<Screening> insertScreening
            (@PathVariable Integer id,
             @RequestBody Screening screening) {
                 User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if(role.equals(User.Role.ADMIN)){
        Optional<Room> oRoom = roomRepository.findById(id);
        if (oRoom.isPresent()) {
            Room room = oRoom.get();
            screening.setRoom(room);
            return ResponseEntity.ok(
                screeningRepository.save(screening));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
         else{
            return ResponseEntity.badRequest().build();
        }
}
}

