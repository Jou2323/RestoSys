package com.mesh.Restoranrese.repositorys;


import com.mesh.Restoranrese.User;
import com.mesh.Restoranrese.UserRole;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void registerUser(User user);
    boolean authenticateUser(String email, String password);

    // Інші методи, які можуть знадобитися
}
