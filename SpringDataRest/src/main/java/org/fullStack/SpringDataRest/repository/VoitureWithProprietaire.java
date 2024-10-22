package org.fullStack.SpringDataRest.repository;

import org.fullStack.SpringDataRest.model.Proprietaire;
import org.fullStack.SpringDataRest.model.Voiture;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "withProprietaire", types = { Voiture.class })
public interface VoitureWithProprietaire {
    String getMarque();
    String getModele();
    String getCouleur();
    Proprietaire getProprietaire();
}
