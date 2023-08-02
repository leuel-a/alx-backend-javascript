// Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string
}

const student1: Student = {
  firstName: 'Leuel',
  lastName: 'Asfaw',
  age: 22,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Kidus',
  lastName: 'Tilahun',
  age: 23,
  location: 'Sebeta',
};

const students: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement('table');

  // Creating the header for the table
  const header = table.createTHead();
  const headerRow = header.insertRow();

  headerRow.insertCell().textContent = 'First Name';
  headerRow.insertCell().textContent = 'Last Name';
  headerRow.insertCell().textContent = 'Age';
  headerRow.insertCell().textContent = 'Location';

  students.forEach((student) => {
    const newStudent = table.insertRow();

    newStudent.insertCell().textContent = student.firstName;
    newStudent.insertCell().textContent = student.lastName;
    newStudent.insertCell().textContent = String(student.age);
    newStudent.insertCell().textContent = student.location;
  })

  document.body.appendChild(table);
}

renderTable();
