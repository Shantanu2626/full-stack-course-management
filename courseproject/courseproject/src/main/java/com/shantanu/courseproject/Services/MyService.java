package com.shantanu.courseproject.Services;

import com.shantanu.courseproject.Entites.Course;

import java.util.List;


public interface MyService {

    public List<Course> getCourse();

    public Course getCourseById(long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course , long courseId);

    public void deleteCourse(long courseId);

}

