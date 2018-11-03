/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.cinema.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
public class Chair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="ROOM_NAME")
    @NotNull
    private String roomName;
    @Column(name="MOVIE_TITLE")
    @NotNull
    private String movieTitle;
    @Column(name="ROW_NUMBER")
    @NotNull
    private int rowNumber;
    @Column(name="COLUMN_NUMBER")
    @NotNull
    private int columnNumber;
    @Column(name="CUSTOMER_NAME")
    @NotNull
    private String customerName;
    @Column(name="CUSTOMER_EMAIL")
    @NotNull
    private String customerEmail;
    @Column(name="TICKET_TYPE")
    @NotNull
    @Enumerated(EnumType.STRING)
    private TicketType ticketType;
    @Column(columnDefinition="varchar(10) default 'RENTED'")
    @Enumerated(EnumType.STRING)
    private Status status=Status.RENTED;
    public enum Status {
        RENTED, PAYED;
    }
    public enum TicketType{
        STUDENT, ADULT;
    }
    @ManyToMany(mappedBy="chairs") //rám az issue-knál mire hivatkoznak
    @JsonIgnore //label lekerdezesnel nem fogja megjeleniteni a hozza tartozo issue-kat
    private List<Movie> movies;
    @ManyToOne
    //2 tábla közötti kapcsolatot biztosítja
    @JoinColumn
    @JsonIgnore //issue oldalról, ha lekérem a dolgokat, akkor az issue-hoz tartozó message-ek is jönnek, fordítva viszont nem!
    private Room room;
    @ManyToOne
    //2 tábla közötti kapcsolatot biztosítja
    @JoinColumn
    @JsonIgnore //issue oldalról, ha lekérem a dolgokat, akkor az issue-hoz tartozó message-ek is jönnek, fordítva viszont nem!
    private Screening screening;
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private User user;
}
