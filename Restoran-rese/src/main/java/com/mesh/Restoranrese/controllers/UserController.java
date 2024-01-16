package com.mesh.Restoranrese.controllers;

import com.mesh.Restoranrese.User;
import com.mesh.Restoranrese.servises.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;
    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("Реєстрація успішна");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestParam String email, @RequestParam String password) {
        try {
            boolean isAuthenticated = userService.authenticateUser(email, password);
            if (isAuthenticated) {
                return ResponseEntity.ok("Аутентифікація успішна");
            } else {
                return ResponseEntity.badRequest().body("Не вдалося аутентифікувати користувача");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Помилка під час аутентифікації");
        }
    }
}
