package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Personnel;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PersonnelService {
    List<Personnel> getAllPersonnel();
    Personnel getPersonnelById(String id);
    void addPersonnel(Personnel personnel);
    void updatePersonnel(String id, Personnel updatedPersonnel);
    void deletePersonnel(String id);
}
