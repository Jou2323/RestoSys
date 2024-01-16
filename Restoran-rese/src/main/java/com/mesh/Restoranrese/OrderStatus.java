package com.mesh.Restoranrese;

import org.springframework.data.mongodb.core.mapping.Document;


public enum OrderStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
    CANCELLED
}
