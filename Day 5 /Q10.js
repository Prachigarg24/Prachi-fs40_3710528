// Q 10. Base class User
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
   
    getDetails = () => {
      console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
  }
  
  
  class Student extends User {
    constructor(name, email, studentId) {
      super(name, email);
      this.studentId = studentId;
    }
  
   
    enroll = () => {
      console.log(`Student ${this.name} enrolled.`);
    }
  }
  
  class Instructor extends User {
    constructor(name, email, instructorId) {
      super(name, email);
      this.instructorId = instructorId;
    }
  
  
    assignGrade = (student) => {
      console.log(`Instructor ${this.name} assigned a grade to ${student.name}.`);
    }
  }
  


  const student = new Student('Prachi', 'Prachi@example.com', 'S123');
  const instructor = new Instructor('Deepak', 'Deepak@example.com', 'I456');
  
 
  student.getDetails();      
  student.enroll();         
  instructor.getDetails();    
  instructor.assignGrade(student); 