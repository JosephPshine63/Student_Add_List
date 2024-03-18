package dev.pioruocco.service;

import dev.pioruocco.model.entity.Student;

import java.util.List;

public interface StudentService {

    Student addStudent(Student student);

    List<Student> getAllStudents();
}
