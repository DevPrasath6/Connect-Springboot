package com.insta.backend.service;

import com.insta.backend.Model.Posts;
import com.insta.backend.Model.Users;
import com.insta.backend.Repo.PostRepo;
import com.insta.backend.Repo.UserRepo;
import com.insta.backend.DTO.PostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserRepo userRepo;

    public PostDTO createPost(String username, String caption, String imageUrl) {
        Users user = userRepo.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        Posts post = new Posts();
        post.setUser(user);
        post.setCaption(caption);
        post.setImageUrl(imageUrl);

        Posts savedPost = postRepo.save(post);
        return convertToDTO(savedPost);
    }

    public List<PostDTO> getAllPosts() {
        return postRepo.findAllOrderByCreatedAtDesc()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<PostDTO> getUserPosts(String username) {
        Users user = userRepo.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        return postRepo.findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private PostDTO convertToDTO(Posts post) {
        return new PostDTO(
                post.getId(),
                post.getUser().getUsername(),
                post.getCaption(),
                post.getImageUrl(),
                post.getCreatedAt()
        );
    }
}
