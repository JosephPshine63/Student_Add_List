package dev.pioruocco.service;

import dev.pioruocco.model.entity.Student;
import dev.pioruocco.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StudentServiceImpl implements StudentService{

    private  final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    //insert of a student
    @Override
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    //returns all students
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
