package com.example.restoranrese.servises;

import com.example.restoranrese.Reservation;
import com.example.restoranrese.repositorys.ReservationService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {
    private final List<Reservation> reservationList = new ArrayList<>();

    @Override
    public List<Reservation> getAllReservations() {
        return reservationList;
    }

    @Override
    public Reservation getReservationById(Long id) {
        return reservationList.stream()
                .filter(reservation -> reservation.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void createReservation(Reservation reservation) {
        // Логіка створення резервації
        reservationList.add(reservation);
    }

    @Override
    public void updateReservation(Long id, Reservation updatedReservation) {
        // Логіка оновлення резервації
        Reservation existingReservation = getReservationById(id);
        if (existingReservation != null) {
            existingReservation.setDateTime(updatedReservation.getDateTime());
            existingReservation.setNumberOfGuests(updatedReservation.getNumberOfGuests());
        }
    }

    @Override
    public void deleteReservation(Long id) {
        // Логіка видалення резервації
        reservationList.removeIf(reservation -> reservation.getId().equals(id));
    }
}
