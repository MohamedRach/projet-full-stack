package org.fullStack.SpringDataRest.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RegisterUserDto {
    private String email;

    private String password;

    private String fullName;

}