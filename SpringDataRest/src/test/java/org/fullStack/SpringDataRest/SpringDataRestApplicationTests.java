package org.fullStack.SpringDataRest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.fullStack.SpringDataRest.model.Voiture;
import org.fullStack.SpringDataRest.repository.VoitureRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpringDataRestApplicationTests {
	/*
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private VoitureRepo voitureRepo;
	@Autowired
	ObjectMapper objectMapper;

	private final static List<Voiture> voitures = new ArrayList<>();
	@Container
	private static final PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres")
			.withDatabaseName("integration-tests-db").withUsername("admin").withPassword("admin");

	static {
		postgreSQLContainer.start();
	}

	static {

		Voiture voiture1 = Voiture.builder().marque("renault").modele("clio").couleur("rouge").immatricule("A-2-42342").annee(2019).prix(290000).build();
		Voiture voiture2 = Voiture.builder().marque("citroen").modele("c3").couleur("beige").immatricule("A-2-42672").annee(2019).prix(290000).build();
		Voiture voiture3 = Voiture.builder().marque("opel").modele("corsa").couleur("noire").immatricule("C-37-42342").annee(2021).prix(200000).build();
		Voiture voiture4 = Voiture.builder().marque("mercedes").modele("class A").couleur("blanc").immatricule("D-44-73663").annee(2023).prix(400000).build();

		voitures.add(voiture1);
		voitures.add(voiture2);
		voitures.add(voiture3);
		voitures.add(voiture4);

	}

	@DynamicPropertySource
	static void setProperties(DynamicPropertyRegistry dynamicPropertyRegistry) {
		dynamicPropertyRegistry.add("spring.datasource.url", postgreSQLContainer::getJdbcUrl);
		dynamicPropertyRegistry.add("spring.datasource.username", postgreSQLContainer::getUsername);
		dynamicPropertyRegistry.add("spring.datasource.password", postgreSQLContainer::getPassword);
	}

	@Test
	@Order(value = 1)
	void testConnectionToDatabase() {
		Assertions.assertNotNull(voitureRepo);

	}

	@Test
	@Order(value = 2)
	@WithMockUser(username = "admin@gmail.com")
	void testAddVoitures() throws Exception {
		for (Voiture voiture : voitures) {
			String emp = objectMapper.writeValueAsString(voiture);
			mockMvc.perform(MockMvcRequestBuilders.post("/api/voitures")
							.contentType(MediaType.APPLICATION_JSON_VALUE)  // Use MediaType.APPLICATION_JSON directly
							.content(emp))
					.andExpect(status().isCreated());
		}
		AtomicInteger size = new AtomicInteger();
		voitureRepo.findAll().forEach(voiture -> {
			size.addAndGet(1);
		});
		Assertions.assertEquals(4, size.get());
	}
	*/
}
