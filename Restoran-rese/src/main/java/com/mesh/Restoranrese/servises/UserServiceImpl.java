package com.mesh.Restoranrese.servises;

import com.mesh.Restoranrese.User;
import com.mesh.Restoranrese.UserRole;

import com.mesh.Restoranrese.repositorys.UserRepository;
import com.mesh.Restoranrese.repositorys.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void registerUser(User user) {
        user.setRoles(UserRole.CUSTOMER);
        userRepository.save(user);
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

}
