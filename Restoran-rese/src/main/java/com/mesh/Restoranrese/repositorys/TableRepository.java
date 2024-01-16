package com.mesh.Restoranrese.repositorys;

import com.mesh.Restoranrese.Table;
import com.mesh.Restoranrese.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TableRepository extends MongoRepository<Table, String> {
}
