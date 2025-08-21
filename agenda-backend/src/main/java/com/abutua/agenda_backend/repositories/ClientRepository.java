package com.abutua.agenda_backend.repositories;

import com.abutua.agenda_backend.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
