package com.example.restoranrese.repositorys;


import com.example.restoranrese.User;
import com.example.restoranrese.UserRole;
public interface UserService {
    void registerUser(User user);
    boolean authenticateUser(String name, String email, String password);
    void assignRole(User user, UserRole role);
    // Інші методи, які можуть знадобитися
}
