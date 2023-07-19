import React from 'react';
import {Grade} from '../interfaces';
import { useState } from 'react';
import './GradeList.css';

interface Props { //!Have to fill these props,which are like parameters, when using <GradeList/> in App.tsx!
    grades: Grade[];
    onSelectedGrade: (data: Grade ) => void;
    onDeletedGrade: (grades: Grade[]) => void;
  }

const GradeList: React.FC<Props> = (props: Props) => {
    //const [selectedBookId, setSelectedBookId] = useState<number | null>(props.books.length === 0 ? null : props.books[0].id);
    const [isGradeDeleted,setIsGradeDeleted] = useState(false);
    const [selectedGrade,setGrade] = useState<Grade>();

    const handleClick = (id: number, ignoreItem: boolean) => {
      let foundGrade = props.grades.find((grade) => grade.id === id) as Grade;
    
      props.onSelectedGrade(foundGrade);
    
    };
  
    const handleDelete = (id: number) => {
        let deletedGrade = props.grades.find((grade) => grade.id === id) as Grade;
        deletedGrade.score = 0;
        setGrade(selectedGrade);
        const updatedGrades = props.grades.filter((grade) => grade.id !== id);
        props.onDeletedGrade(updatedGrades);
      };
    
      return (
        <>
        
          <h2 className='h2List'>Grade List</h2>
          <hr></hr>
    
          {props.grades.length === 0 ? <h3>No grades found</h3> : null}
          <ul className='ulGradeList'>
            {props.grades.map((grade) => (
              <li key={grade.id} onClick={(e) => { handleClick(grade.id,isGradeDeleted) }}>
                <p className='id'>{grade.id}</p>
                <p className='field1'>{grade.studentFirstName}</p>
                <p className='field2'>{grade.studentLastName}</p>
                <p className='field3'>{grade.subject}</p>
                <p className='field4'>{grade.score}</p>
                <p className='field5'>{grade.date.toString()}</p>
    
                <button className="deleteButton" onClick={() => handleDelete(grade.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      );
    };
    
    export default GradeList;