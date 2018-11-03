/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.repositories;

import org.springframework.data.repository.CrudRepository;
import hu.elte.cinema.entities.Chair;
import hu.elte.cinema.entities.User;

/**
 *
 * @author Barby
 */
public interface ChairRepository extends CrudRepository<Chair, Integer> {    
    public Iterable<Chair> findAllByUser(User user);
}
