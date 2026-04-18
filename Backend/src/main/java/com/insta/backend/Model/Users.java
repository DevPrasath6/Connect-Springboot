package com.insta.backend.Model;

import lombok.*;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class Users
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Setter
    @Getter
    @Column(nullable = false, unique = true)
    private String username;
    @Setter
    @Getter
    @Column(nullable = false)
    private String password;
}
