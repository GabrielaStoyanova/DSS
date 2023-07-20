import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Grade } from '../interfaces';
import './GradeDetails.css';

interface Props {
    onSave: (grade: Grade) => void;
    onUpdate: (grade: Grade) => void;
    selectedGrade: Grade;
    grades: Grade[];
  }
  
  const GradeDetails: React.FC<Props> = (props: Props) => {
  
    let emptyGrade: Grade = {
      id: -1,
      studentFirstName: "",
      studentLastName: "",
      subject: "",
      score: 0,
      date: new Date(),
    };
  
    const [selectedGrade, setGrade] = useState<Grade>(emptyGrade);

    const handleClear = () => {
        setGrade(emptyGrade);
      };    

    useEffect(() => { //Click and fill in the input texts
      if (props.selectedGrade.score !== 0) {
        setGrade(props.selectedGrade);
      } else {
        handleClear();
      }
    }, [props.onSave , props.selectedGrade])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, [name]: value }));
      };
    
      const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, date: value ? new Date(value) : new Date() }));
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedGrade.id !== -1) {
          props.onUpdate(selectedGrade);
        } else {
          const newId = props.grades.length > 0 ? Math.max(...props.grades.map(grade => grade.id)) + 1 : 1;
          const newGrade: Grade = {
          ...selectedGrade,
          id: newId,
          };
          props.onSave(newGrade);
          handleClear();
        }
    
      };

      return (
        <>
        <div className='container'>
          <h2 className='h2'>Grade Details:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="studentFirstName" className='labelGradeDetails'>Student First Name:</label>
              <input
                type="text"
                id="field1"
                name="studentFirstName"
                value={selectedGrade.studentFirstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="studentLastName" className='labelGradeDetails'>Student Last Name:</label>
              <input
                type="text"
                id="field2"
                name="studentLastName"
                value={selectedGrade.studentLastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className='labelGradeDetails'>Subject:</label>
              <input
                type="text"
                id="field3"
                name="subject"
                value={selectedGrade.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="score" className='labelGradeDetails'>Score:</label>
              <input
                type="number"
                id="field4"
                name="score"
                value={selectedGrade.score}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date" className='labelGradeDetails'>Date:</label>
              <input
                type="date"
                id="field5"
                name="date"
                value={selectedGrade.date ? selectedGrade.date.toISOString().substr(0, 10):""}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className='buttonsDetails'>
            <button id='saveButton' type='submit'>Save</button>
            <button id='clearButton' onClick={handleClear} >Clear</button>
            </div>
          </form>
        </div>
        </>
      );
    };
    
    export default GradeDetails;
    