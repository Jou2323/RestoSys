package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.Personnel;
import com.mesh.Restoranrese.Table;
import com.mesh.Restoranrese.repositorys.PersonnelRepository;
import com.mesh.Restoranrese.repositorys.PersonnelService;
import com.mesh.Restoranrese.repositorys.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonnelServiceImpl implements PersonnelService {
    private final PersonnelRepository personnelRepository;

    public PersonnelServiceImpl(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    @Override
    public List<Personnel> getAllPersonnel() {
        return personnelRepository.findAll();
    }

    @Override
    public Personnel getPersonnelById(String id) {
        return personnelRepository.findById(id).orElse(null);
    }

    @Override
    public void addPersonnel(Personnel personnel) {
        // Логіка додавання персоналу
        personnelRepository.save(personnel);
    }

    @Override
    public void updatePersonnel(String id, Personnel updatedPersonnel) {
        // Логіка оновлення інформації про персонал
        Personnel existingPersonnel = getPersonnelById(id);
        if (existingPersonnel != null) {
            existingPersonnel.setName(updatedPersonnel.getName());
            existingPersonnel.setEmail(updatedPersonnel.getEmail());
            existingPersonnel.setStatus(updatedPersonnel.getStatus());
            existingPersonnel.setRole(updatedPersonnel.getRole());
        }
    }

    @Override
    public void deletePersonnel(String id) {
        personnelRepository.deleteById(id);
    }
}
