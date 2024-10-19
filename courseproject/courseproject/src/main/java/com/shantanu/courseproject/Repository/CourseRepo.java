package com.shantanu.courseproject.Repository;
import com.shantanu.courseproject.Entites.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepo extends JpaRepository<Course , Long> {

}
