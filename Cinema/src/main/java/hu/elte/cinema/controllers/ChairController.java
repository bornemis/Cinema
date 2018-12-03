/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.controllers;

import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.User;
import hu.elte.cinema.security.AuthenticatedUser;
import hu.elte.cinema.repositories.ChairRepository;
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
@CrossOrigin
@RestController
@RequestMapping("/chairs")
public class ChairController {

    @Autowired
    private ChairRepository chairRepository;
    @Autowired
    private AuthenticatedUser authenticatedUser;

    @GetMapping("")
    public ResponseEntity<Iterable<Chair>> getAll() {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
            return ResponseEntity.ok(chairRepository.findAll());
        } else {
            return ResponseEntity.ok(chairRepository.findAllByUser(user));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chair> get(@PathVariable Integer id) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN) || role.equals(User.Role.USER)) {
            Optional<Chair> chair = chairRepository.findById(id);
            if (chair.isPresent()) {
                if(role.equals(User.Role.ADMIN)){
                return ResponseEntity.ok(chair.get());
                }else{
                    if(chair.get().getUser().getUserName().equals(user.getUserName())){
                        return ResponseEntity.ok(chair.get());
                    }else{
                        return ResponseEntity.badRequest().build();
                    }
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Chair> post(@RequestBody Chair chair) {
        User user = authenticatedUser.getUser();
        chair.setUser(user);
        Chair savedMovie = chairRepository.save(chair);
        return ResponseEntity.ok(savedMovie);
    }

    /*
    modositas, mi alapjan modositunk, melyik vegponton leszek
    path-ból kiolvassa az id-t, a htttp uzenetből kiolvassa az issue objectuomot,
    beadandónál a pathVariable az egyenlő-e, mint az issue id-ja, ha nem, akk badrequest hiba
     */
    @PutMapping("/{id}")
    public ResponseEntity<Chair> update(@PathVariable Integer id, @RequestBody Chair chair) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
            Optional<Chair> oChair = chairRepository.findById(id);
            if (oChair.isPresent()) {
                chair.setId(id); //igy nem kell lekezelni, hogy a pathVariable és az issue variable-je egyenlő-e
                return ResponseEntity.ok(chairRepository.save(chair));
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Chair> delete(@PathVariable Integer id) {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ADMIN)) {
            Optional<Chair> oChair = chairRepository.findById(id);
            if (oChair.isPresent()) {
                chairRepository.deleteById(id);
                return ResponseEntity.ok().build(); //ha az ok()-nak nincs paramétere, akkor build()-et kell utána írni!
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
