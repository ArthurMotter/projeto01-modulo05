package com.abutua.agenda_backend.services;

import com.abutua.agenda_backend.dtos.ClientResponseDTO;
import com.abutua.agenda_backend.models.Client;
import com.abutua.agenda_backend.repositories.ClientRepository;
import com.abutua.agenda_backend.services.mappers.AreaMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

}