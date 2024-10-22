package org.fullStack.SpringDataRest;

import org.fullStack.SpringDataRest.model.Proprietaire;
import org.fullStack.SpringDataRest.model.Voiture;
import org.fullStack.SpringDataRest.repository.ProprietaireRepo;
import org.fullStack.SpringDataRest.repository.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringDataRestApplication.class, args);
	}


}
