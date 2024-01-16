package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Personnel;
import com.mesh.Restoranrese.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonnelRepository extends MongoRepository<Personnel, String> {

}

