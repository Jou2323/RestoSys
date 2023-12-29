package com.example.restoranrese.controllers;

import com.example.restoranrese.Reservation;
import com.example.restoranrese.repositorys.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/{id}")
    public Reservation getReservationById(@PathVariable Long id) {
        return reservationService.getReservationById(id);
    }

    @PostMapping
    public void createReservation(@RequestBody Reservation reservation) {
        reservationService.createReservation(reservation);
    }

    @PutMapping("/{id}")
    public void updateReservation(@PathVariable Long id, @RequestBody Reservation updatedReservation) {
        reservationService.updateReservation(id, updatedReservation);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
    }
}
