package com.shantanu.courseproject.Services;

import com.shantanu.courseproject.Entites.Course;
import com.shantanu.courseproject.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MyServiceImpl implements MyService {

    @Autowired
    private CourseRepo courserepo ;

    public MyServiceImpl() {

    }

    @Override
    public List<Course> getCourse() {
        return  courserepo.findAll();
    }

    @Override
    public Course getCourseById(long courseId) {
        return courserepo.getOne(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        courserepo.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course , long courseId) {
        courserepo.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
        Course entity = courserepo.getOne(courseId);
        courserepo.delete(entity);
    }
}
