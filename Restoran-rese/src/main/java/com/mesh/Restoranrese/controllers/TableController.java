package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.Table;
import com.mesh.Restoranrese.TableStatus;
import com.mesh.Restoranrese.repositorys.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
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
    public Table getTableById(@PathVariable String id) {
        return tableService.getTableById(id);
    }

    @PostMapping
    public void createTable(@RequestBody Table table) {
        tableService.createTable(table);
    }

    @PutMapping("/{id}/status")
    public void updateTableStatus(@PathVariable String id, @RequestParam TableStatus newStatus) {
        tableService.updateTableStatus(id, newStatus);
    }

    @PutMapping("/{id}/location")
    public void updateTableLocation(@PathVariable String id, @RequestParam String newLocation) {
        tableService.updateTableLocation(id, newLocation);
    }
}
