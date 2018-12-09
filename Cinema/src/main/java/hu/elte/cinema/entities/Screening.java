/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

/**
 *
 * @author Barby
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Screening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="MOVIE_TITLE")
    @NotNull
    private String movieTitle;
    @Column(name="ROOM_NAME")
    @NotNull
    private String roomName;
    @Column(name="START_TIME")
    @NotNull
    private LocalTime startTime;
    @Column(name="MOVIE_DURATION_IN_MIN")
    @NotNull
    private int movieDurationInMin;
    @ManyToOne
    //2 tábla közötti kapcsolatot biztosítja
    @JoinColumn
    @JsonIgnore //issue oldalról, ha lekérem a dolgokat, akkor az issue-hoz tartozó message-ek is jönnek, fordítva viszont nem!
    private Movie movie;
    @OneToMany(mappedBy = "screening")
    private List<Chair> chairs;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Room room;
}