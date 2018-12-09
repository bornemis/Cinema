package hu.elte.cinema.repositories;


import hu.elte.cinema.entities.Movie;
import hu.elte.cinema.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {  
}