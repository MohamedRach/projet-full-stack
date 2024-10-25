# Full-Stack Application with Spring Boot and React

This is a full-stack application with a **Spring Boot** backend and a **React** frontend. Both services are containerized with Docker, and you can start them together using `docker-compose`.

## Features

- **Backend**: Built with Spring Boot, providing RESTful APIs.
- **Frontend**: Built with React, providing a modern, responsive user interface.
- **Dockerized**: Easily deployable with Docker Compose.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Maven](https://maven.apache.org/install.html) installed for building the backend JAR file.

## Getting Started

### 1. Build the Backend JAR

In order to package the backend application into a JAR file, navigate to the backend directory `SpringDataRest` and run:

```bash
cd SpringDataRest
mvn clean package
cd ..
docker-compose up --build
```
## Monitoring and Metrics

The application includes monitoring setup with Prometheus and Grafana:

  - Prometheus collects application metrics exposed by the backend.
  -  Grafana provides a visualization dashboard to monitor the application's performance.

Access Grafana at: http://localhost:4000
