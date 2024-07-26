import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import StudentDetails from './StudentDetails';
import './App.css';

const App = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

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
    setSelectedStudent(student);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage onSearch={findStudent} />} />
          <Route path="/student-details" element={<StudentDetails student={selectedStudent} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
