package com.example.restoranrese.repositorys;

import com.example.restoranrese.Reservation;

import java.util.List;

public interface ReservationService {
    List<Reservation> getAllReservations();
    Reservation getReservationById(Long id);
    void createReservation(Reservation reservation);
    void updateReservation(Long id, Reservation updatedReservation);
    void deleteReservation(Long id);
}
