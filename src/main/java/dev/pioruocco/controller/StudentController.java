package dev.pioruocco.controller;

import dev.pioruocco.model.entity.Student;
import dev.pioruocco.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/student")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    //DI constructor
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping(path = "/add")
    public String createStudent(@RequestBody Student student){
        studentService.addStudent(student);

        return "New student added!";
    }

    @GetMapping(path = "/all")
    public List<Student> findAllStudents(){
        return studentService.getAllStudents();
    }
}
