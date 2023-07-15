import React from 'react';
import { useState } from 'react';
import {Grade} from './interfaces';
import './App.css';

function App() {
  let grade1: Grade ={
    id: 1,
    studentFirstName: "Petar",
    studentLastName: "Stoyanov",
    subject: "Math",
    score: 3, 
    date: new Date(),
  };

  let grade2: Grade ={
    id: 2,
    studentFirstName: "Katq",
    studentLastName: "Milenova",
    subject: "Physics",
    score: 4, 
    date: new Date(),
  };
  
  let grade3: Grade ={
    id: 3,
    studentFirstName: "Sonq",
    studentLastName: "Petrushkova",
    subject: "English",
    score: 6, 
    date: new Date(),
  };

  let GradeArray = [grade1, grade2, grade3];

  const [grades, setGrades] = useState(GradeArray);

  return (
    <div className="container">
      <div className="navbar">Grade Management system</div>
      <div className="content">
      <div className="content-list">content list</div>
      <div className="content-details">content details</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;