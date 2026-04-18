package com.insta.backend;

import com.insta.backend.Model.Users;
import com.insta.backend.security.UserService;
import com.insta.backend.service.PostService;
import com.insta.backend.DTO.PostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class Controller {
    @Autowired
    private UserService userService;

    @Autowired
    private PostService postService;

    private boolean isInvalidUserRequest(Users user) {
        return user == null
                || user.getUsername() == null
                || user.getPassword() == null
                || user.getUsername().isBlank()
                || user.getPassword().isBlank();
    }

    @PostMapping("/register")
    ResponseEntity<?> registerUser(@RequestBody Users user) {
        if (isInvalidUserRequest(user)) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username and password are required"));
        }

        String result = userService.registerUser(user);
        if ("username_exists".equals(result)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", "Username already exists"));
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "User registered successfully"));
    }

    @PostMapping("/login")
    ResponseEntity<?> loginUser(@RequestBody Users user) {
        if (isInvalidUserRequest(user)) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username and password are required"));
        }

        boolean isAuthenticated = userService.loginUser(user);
        if (!isAuthenticated) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
        }

        return ResponseEntity.ok(Map.of("message", "Login successful", "username", user.getUsername()));
    }

    @PostMapping("/posts/create")
    ResponseEntity<?> createPost(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String caption = request.get("caption");
        String imageUrl = request.get("imageUrl");

        if (username == null || username.isBlank() ||
            imageUrl == null || imageUrl.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username and image URL are required"));
        }

        try {
            PostDTO post = postService.createPost(username, caption != null ? caption : "", imageUrl);
            return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                    "message", "Post created successfully",
                    "post", post
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", e.getMessage()));
        }
    }

    @GetMapping("/posts/feed")
    ResponseEntity<?> getFeed() {
        try {
            List<PostDTO> posts = postService.getAllPosts();
            return ResponseEntity.ok(Map.of(
                    "message", "Feed fetched successfully",
                    "posts", posts
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", e.getMessage()));
        }
    }

    @GetMapping("/posts/user/{username}")
    ResponseEntity<?> getUserPosts(@PathVariable String username) {
        try {
            List<PostDTO> posts = postService.getUserPosts(username);
            return ResponseEntity.ok(Map.of(
                    "message", "User posts fetched successfully",
                    "posts", posts
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", e.getMessage()));
        }
    }
}
