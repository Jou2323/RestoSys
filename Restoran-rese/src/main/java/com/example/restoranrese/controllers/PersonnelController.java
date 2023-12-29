package com.example.restoranrese.controllers;

import com.example.restoranrese.Personnel;
import com.example.restoranrese.repositorys.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personnel")
public class PersonnelController {

    private final PersonnelService personnelService;

    @Autowired
    public PersonnelController(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }

    @GetMapping
    public List<Personnel> getAllPersonnel() {
        return personnelService.getAllPersonnel();
    }

    @GetMapping("/{id}")
    public Personnel getPersonnelById(@PathVariable Long id) {
        return personnelService.getPersonnelById(id);
    }

    @PostMapping
    public void addPersonnel(@RequestBody Personnel personnel) {
        personnelService.addPersonnel(personnel);
    }

    @PutMapping("/{id}")
    public void updatePersonnel(@PathVariable Long id, @RequestBody Personnel updatedPersonnel) {
        personnelService.updatePersonnel(id, updatedPersonnel);
    }

    @DeleteMapping("/{id}")
    public void deletePersonnel(@PathVariable Long id) {
        personnelService.deletePersonnel(id);
    }
}
