package com.shantanu.courseproject.Controller;
import com.shantanu.courseproject.Entites.Course;
import com.shantanu.courseproject.Services.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins =  "*")
@RestController
public class MyController {

    @Autowired
    private MyService myService;

    @GetMapping("/health")
    public String getHealth() {
        return "Health is ok";
    }

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return myService.getCourse();
    }

    @GetMapping("/courses/{courseId}")
    public Course getCourseById(@PathVariable long courseId) {
        return myService.getCourseById(courseId);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return this.myService.addCourse(course);
    }

    @PutMapping("/courses/{courseId}")
    public Course updateCourse(@RequestBody Course course, @PathVariable long courseId){
        return myService.updateCourse( course , courseId);
    }

    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable long courseId) {
        try {
            myService.deleteCourse(courseId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
