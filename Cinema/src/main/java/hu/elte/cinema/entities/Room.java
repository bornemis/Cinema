/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.entities;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 *
 * @author Barby
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="ROOM_NAME")
    @NotNull
    private String roomName;
    @Column(name="NUMBER_OF_ROWS")
    @NotNull
    private int numberOfRows;
    @Column(name="NUMBER_OF_COLUMNS")
    @NotNull
    private int numberOfColumns;
    @Column(name="AVAILABLE_PLACES")
    @NotNull
    private int availablePlaces;
    @OneToMany(mappedBy = "room")
    private List<Chair> chairs;
   /* @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roomName")
    private Screening screening;*/
}
