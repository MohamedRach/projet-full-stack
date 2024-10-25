FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY target/*.jar app.jar
COPY src/main/resources/application.properties application.properties

# Add actuator-specific environment variables
ENV MANAGEMENT_ENDPOINTS_WEB_EXPOSURE_INCLUDE=health,info,metrics,prometheus \
    MANAGEMENT_ENDPOINTS_WEB_BASE-PATH=/actuator \
    MANAGEMENT_ENDPOINT_HEALTH_SHOW-DETAILS=always \
    SPRING_PROFILES_ACTIVE=prod

EXPOSE 8080

# Modified ENTRYPOINT to use the copied properties file
ENTRYPOINT ["java", \
    "-Dspring.config.location=classpath:/application.properties,file:/app/application.properties", \
    "-jar", \
    "app.jar"]