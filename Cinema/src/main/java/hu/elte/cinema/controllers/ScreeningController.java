/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.controllers;

import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.Screening;
import hu.elte.cinema.entities.User;
import hu.elte.cinema.repositories.ScreeningRepository;
import hu.elte.cinema.repositories.ChairRepository;
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

/**
 *
 * @author Barby
 */
@RestController
@RequestMapping("/screenings")
public class ScreeningController {
    
    @Autowired
    private ScreeningRepository screeningRepository;
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
            Screening savedScreening = screeningRepository.save(screening);
            return ResponseEntity.ok(savedScreening);
        }else{
            return ResponseEntity.notFound().build();
        }
        
    }
    /*
    modositas, mi alapjan modositunk, melyik vegponton leszek
    path-ból kiolvassa az id-t, a htttp uzenetből kiolvassa az issue objectuomot,
    beadandónál a pathVariable az egyenlő-e, mint az issue id-ja, ha nem, akk badrequest hiba
    */
    @PutMapping("/{id}")
    public ResponseEntity<Screening> update(@PathVariable Integer id, @RequestBody Screening room){
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)){
            Optional<Screening> oScreening = screeningRepository.findById(id);
            if (oScreening.isPresent()) {
                room.setId(id); //igy nem kell lekezelni, hogy a pathVariable és az issue variable-je egyenlő-e
                return ResponseEntity.ok(screeningRepository.save(room));
            } else {
                return ResponseEntity.notFound().build();
            }
        }else{
            return ResponseEntity.notFound().build();
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
            return ResponseEntity.notFound().build();
        }
}
    @GetMapping("/{id}/chairs")
    public ResponseEntity<Iterable<Chair>> chairs
            (@PathVariable Integer id) {
        Optional<Screening> screening = screeningRepository.findById(id);
        if (screening.isPresent()) {
            return ResponseEntity.ok(screening.get().getChairs());
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
        if (role.equals(User.Role.ADMIN)){
        Optional<Screening> oScreening = screeningRepository.findById(id);
        if (oScreening.isPresent()) {
            Screening screening = oScreening.get();
            chair.setScreening(screening);
            return ResponseEntity.ok(
                chairRepository.save(chair));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            else{
    return ResponseEntity.notFound().build();
}
            }
}
