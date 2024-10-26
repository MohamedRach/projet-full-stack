package org.fullStack.SpringDataRest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @NonNull
    private String marque;
    @NonNull
    private String modele;
    @NonNull
    private String couleur;
    @NonNull
    private String immatricule;
    @NonNull
    private int annee;
    @NonNull
    private int prix;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "proprietaire_id")
    private Proprietaire proprietaire;

    public Voiture(String toyota, String corolla, String grise, String s, int i, int i1, Proprietaire proprietaire) {
        this.marque = toyota;
        this.modele = corolla;
        this.couleur = grise;
        this.immatricule = s;
        this.annee = i;
        this.prix = i1;
        this.proprietaire = proprietaire;
    }
}

