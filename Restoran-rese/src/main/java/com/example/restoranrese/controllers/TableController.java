package com.example.restoranrese.controllers;

import com.example.restoranrese.Table;
import com.example.restoranrese.TableStatus;
import com.example.restoranrese.repositorys.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tables")
public class TableController {

    private final TableService tableService;

    @Autowired
    public TableController(TableService tableService) {
        this.tableService = tableService;
    }

    @GetMapping
    public List<Table> getAllTables() {
        return tableService.getAllTables();
    }

    @GetMapping("/{id}")
    public Table getTableById(@PathVariable Long id) {
        return tableService.getTableById(id);
    }

    @PostMapping
    public void createTable(@RequestBody Table table) {
        tableService.createTable(table);
    }

    @PutMapping("/{id}/status")
    public void updateTableStatus(@PathVariable Long id, @RequestParam TableStatus newStatus) {
        tableService.updateTableStatus(id, newStatus);
    }

    @PutMapping("/{id}/location")
    public void updateTableLocation(@PathVariable Long id, @RequestParam String newLocation) {
        tableService.updateTableLocation(id, newLocation);
    }
}
