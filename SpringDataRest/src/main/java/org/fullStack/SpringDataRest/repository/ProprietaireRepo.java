package org.fullStack.SpringDataRest.repository;

import org.fullStack.SpringDataRest.model.Proprietaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "proprietaires")
public interface ProprietaireRepo extends CrudRepository<Proprietaire, Long> {
}
