package com.example.restoranrese.servises;

import com.example.restoranrese.Personnel;
import com.example.restoranrese.repositorys.PersonnelService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonnelServiceImpl implements PersonnelService {
    private final List<Personnel> personnelList = new ArrayList<>();

    @Override
    public List<Personnel> getAllPersonnel() {
        return personnelList;
    }

    @Override
    public Personnel getPersonnelById(Long id) {
        return personnelList.stream()
                .filter(personnel -> personnel.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void addPersonnel(Personnel personnel) {
        // Логіка додавання персоналу
        personnelList.add(personnel);
    }

    @Override
    public void updatePersonnel(Long id, Personnel updatedPersonnel) {
        // Логіка оновлення інформації про персонал
        Personnel existingPersonnel = getPersonnelById(id);
        if (existingPersonnel != null) {
            existingPersonnel.setName(updatedPersonnel.getName());
            existingPersonnel.setContactInfo(updatedPersonnel.getContactInfo());
            existingPersonnel.setRole(updatedPersonnel.getRole());
        }
    }

    @Override
    public void deletePersonnel(Long id) {
        // Логіка видалення персоналу
        personnelList.removeIf(personnel -> personnel.getId().equals(id));
    }
}
