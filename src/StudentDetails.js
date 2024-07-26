import React from 'react';

const StudentDetails = ({ student }) => {
  if (!student) {
    return <div>No student found</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Gender: {student.gender}</p>
      <p>
        Address: {student.address.street}, {student.address.city}, {student.address.zip}, {student.address.country}
      </p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Courses: {student.courses.join(', ')}</p>
      <p>GPA: {student.gpa}</p>
      <img src={student.image} alt={`${student.name}'s profile`} />
    </div>
  );
};

export default StudentDetails;
