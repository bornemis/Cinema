package hu.elte.cinema.entities;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

/**
 *
 * @author Barby
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    @NotNull
    private String title;
    @Column
    @NotNull
    private String director;
    @Column
    @NotNull
    private String plot;
    @Column(name="DATE_OF_REGISTRATION", updatable=false)
    @CreationTimestamp
    private LocalDateTime dateOfRegistration;
    @Column(name="DURATION_IN_MIN")
    @NotNull
    private int durationInMin;
    @Column(name="POSTER_LINK", columnDefinition="varchar(100) default ''")
    private String posterLink="";
    @Column(name="TRAILER_LINK", columnDefinition="varchar(100) default ''")
    private String trailerLink="";
    @Column(columnDefinition="varchar(20) default 'Meg nem ertekelt.'")
    private String rating="Meg nem ertekelt."; 
    @OneToMany(mappedBy = "movie")
    private List<Screening> screenings;
    @ManyToMany
    @JoinTable
    private List<Chair> chairs;
}
