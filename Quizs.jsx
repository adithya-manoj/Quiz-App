import React, { useState } from 'react';

const Quiz = () => {
  const [selectAns, setSelectAns] = useState({});
  const [page, setPage] = useState(0);

  const questions = [
    {
      question: "What is the first Alphabet?",
      answers: ["A", "B", "C", "D"],
      correctAnswer: "A"
    },
    {
      question: "What is the second Alphabet?",
      answers: ["A", "B", "C", "D"],
      correctAnswer: "B"
    },
    {
      question: "What is the third Alphabet?",
      answers: ["A", "B", "C", "D"],
      correctAnswer: "C"
    },
    {
      question: "What is the fourth Alphabet?",
      answers: ["A", "B", "C", "D"],
      correctAnswer: "D"
    }
  ];

  const handleClick = (questionIndex, answer) => {
    setSelectAns({ ...setSelectAns, [questionIndex]: answer });
  };

  const TotalMarks = () => {
    let totalMarks = 0;
    questions.forEach((question, index) => {
      if (setSelectAns[index] === question.correctAnswer) {
        totalMarks += 3;
      }
    });
    return totalMarks;
  };

  const handleNext = () => {
    if (page < questions.length - 1) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      
      <div className='p-2'>
        <h4>{questions[page].question}</h4>
        <div>
          {questions[page].answers.map((answer, index) => (
            <button key={index} onClick={() => handleClick(page, answer)} className={`p-4 rounded-circle`}>
              {answer}
            </button>
          ))}
        </div>
      </div>
      
      <div className='p-3 m-2'>
        <h3>Total Marks: {TotalMarks()}</h3>
      </div>
      
      <div className='p-3 m-2'>
        <button onClick={handlePrevious}  className='rounded-4'>Previous</button>
        <button onClick={handleNext}   className='rounded-4'>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
