package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.Personnel;
import com.mesh.Restoranrese.repositorys.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personnel")
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
    public Personnel getPersonnelById(@PathVariable String id) {
        return personnelService.getPersonnelById(id);
    }

    @PostMapping
    public void addPersonnel(@RequestBody Personnel personnel) {
        personnelService.addPersonnel(personnel);
    }

    @PutMapping("/{id}")
    public void updatePersonnel(@PathVariable String id, @RequestBody Personnel updatedPersonnel) {
        personnelService.updatePersonnel(id, updatedPersonnel);
    }

    @DeleteMapping("/{id}")
    public void deletePersonnel(@PathVariable String id) {
        personnelService.deletePersonnel(id);
    }
}
