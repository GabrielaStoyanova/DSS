import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Grade } from '../interfaces';
import './GradeDetails.css';

interface Props {
    onSave: (grade: Grade) => void;
    onUpdate: (grade: Grade) => void;
    selectedGrade: Grade;
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
  
    useEffect(() => {
      if (props.selectedGrade.score) {
        setGrade(props.selectedGrade);
      } else {
        handleClear();
      }
    }, [props.selectedGrade])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, [name]: value }));
      };
    
      const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setGrade(prevGrade => ({ ...prevGrade, publicationDate: new Date(value) }));
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (selectedGrade.id !== -1) {
          props.onUpdate(selectedGrade);
        } else {
          props.onSave(selectedGrade);
        }
    
      };

      return (
        <>
        <div className='container'>
          <h2 className='h2'>Grade Details:</h2>
          <form className='form1' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="studentFirstName">Student First Name:</label>
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
              <label htmlFor="studentLastName">Student Last Name:</label>
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
              <label htmlFor="subject">Subject:</label>
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
              <label htmlFor="score">Score:</label>
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
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="field5"
                name="date"
                value={selectedGrade.date.toISOString().substr(0, 10)}
                onChange={handleDateChange}
                required
              />
            </div>
            <button id='saveButton' type='submit'>Save</button>
            <button id='clearButton' onClick={handleClear} >Clear</button>
          </form>
        </div>
        </>
      );
    };
    
    export default GradeDetails;
    