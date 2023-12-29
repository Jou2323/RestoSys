package com.example.restoranrese.repositorys;

import com.example.restoranrese.Personnel;

import java.util.List;

public interface PersonnelService {
    List<Personnel> getAllPersonnel();
    Personnel getPersonnelById(Long id);
    void addPersonnel(Personnel personnel);
    void updatePersonnel(Long id, Personnel updatedPersonnel);
    void deletePersonnel(Long id);
}
