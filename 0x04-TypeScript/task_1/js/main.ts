export interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
 }
 // Interface describing the constructor
 
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class and its methods
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
