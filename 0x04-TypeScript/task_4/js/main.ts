import { Subjects } from './subjects';

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Exporting the teacher object
export { cTeacher };

// Working with Cpp subject
console.log('C++');
Subjects.cpp.setTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// Working with Java subject
console.log('Java');
Subjects.java.setTeacher(cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// Working with React subject
console.log('React');
Subjects.react.setTeacher(cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
