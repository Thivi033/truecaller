import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(phoneNumber);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter student's phone number"
      />
      <button type="submit">Search</button>
    </form>
  );
};


export default StudentForm;
