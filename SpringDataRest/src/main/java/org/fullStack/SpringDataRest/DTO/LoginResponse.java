package org.fullStack.SpringDataRest.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
    private String token;

    private long expiresIn;



    // Getters and setters...
}
