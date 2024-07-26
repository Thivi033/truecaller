import React, { useState, useEffect } from 'react';
import StudentForm from '../StudentForm';
import StudentDetails from '../StudentDetails';
import './Home.css';

import './Home.css';

const Home = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/students');
        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        console.error('Error fetching students data:', error);
      }
    };

    fetchStudentsData();
  }, []);

  const findStudent = (phoneNumber) => {
    const student = studentsData.find((s) => s.phone === phoneNumber);
    setStudent(student);
  };

  return (
    <div className="home-container">
      <StudentForm onSubmit={findStudent} />
      {student && <StudentDetails student={student} />}
    </div>
  );
};

export default Home;
