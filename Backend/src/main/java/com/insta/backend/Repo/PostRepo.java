package com.insta.backend.Repo;

import com.insta.backend.Model.Posts;
import com.insta.backend.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface PostRepo extends JpaRepository<Posts, Long> {
    List<Posts> findByUserOrderByCreatedAtDesc(Users user);

    @Query("SELECT p FROM Posts p ORDER BY p.createdAt DESC")
    List<Posts> findAllOrderByCreatedAtDesc();

    @Query("SELECT p FROM Posts p WHERE p.user = :user ORDER BY p.createdAt DESC LIMIT :limit")
    List<Posts> findRecentPostsByUser(@Param("user") Users user, @Param("limit") int limit);
}
