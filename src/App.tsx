import React from 'react';
import { useState } from 'react';
import {Grade} from './interfaces';
import './App.css'; //Main CSS page, mainly used Flexbox 
import GradeList from './components/GradeList'; //First Component for the content 
import GradeDetails from './components/GradeDetails'; //Second Component for the content
import logo from './Pictures/GitHub-Mark.png';

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

  let grade4: Grade ={ //Used for initial state for our variable
    id: -1,
    studentFirstName: "",
    studentLastName: "",
    subject: "",
    score: 0, 
    date: new Date(),
  };

  let GradeArray = [grade1, grade2, grade3];

  const [grades, setGrades] = useState(GradeArray);
  const [selectedGrade, setGrade] = useState<Grade>(grade4); //{} as Grade - second solution //grade1 - first solution

  

  const handleSaveGrade = (grade: Grade) => {
    let gradesLength = grades.length + 1;
    grade.id = gradesLength;
    let newGradeArray = [...grades, grade] as Grade[];
    setGrades(newGradeArray);
  };

  const handleGradeUpdate = (grade: Grade) => {

    let gradeIndex = grades.findIndex((item) => item.id === grade.id);
    let gradesUpdateArr = [...grades];
    let updatedGrade = { ...grades[gradeIndex] };
    updatedGrade = grade;
    gradesUpdateArr[gradeIndex] = updatedGrade;
    setGrades(gradesUpdateArr);
  }

  const handleGradeSelection = (grade: Grade) => {
    setGrade(grade);
  }

  const handleGradeDelete = (gradeArr: Grade[]) => {
      let idIndex =1;
      for(let i =0; i < gradeArr.length; i++){
        gradeArr[i].id = idIndex++;
      }
      return gradeArr;
  };

  return (
    <div className="container"> 
      <div className="navbar">
        <a className='aGit' href="https://github.com/GabrielaStoyanova/DSS" target="_blank">
          <img className='git' src={logo} alt="GitHub"/>
        </a>
        <h1 className='n1Nav'>Grade Management system</h1>
      </div>
      <div className="content">
        <div className="content-list">
          <GradeList grades={grades} onSelectedGrade={handleGradeSelection} onDeletedGrade={(newGrades) => setGrades(handleGradeDelete(newGrades))} />
        </div>
        <div className="content-details">
          <GradeDetails onSave={handleSaveGrade} onUpdate={handleGradeUpdate} selectedGrade={selectedGrade} />
        </div>
      </div>
      <div className="footer">
        <p className='Pfooter'>© 2023 Library Management System. All rights reserved.</p>
      </div>
    </div>

  );
}

export default App;
