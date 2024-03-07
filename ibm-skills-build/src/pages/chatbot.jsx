import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [currentStep, setCurrentStep] = useState(1);
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    // Function to fetch the current step's details from the backend
    async function fetchStep(step) {
      try {
        const response = await fetch(`http://localhost:3002/api/chatstep/${step}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestion(data.question);
        setResponses(data.responses);
      } catch (error) {
        console.error("Failed to fetch step", error);
        // Handle error or set default error message
        setQuestion('Sorry, I encountered an error. Please try again later.');
        setResponses([]);
      }
    }
    fetchStep(currentStep);
  }, [currentStep]);

  // Function to handle response button click
  const handleResponseClick = (nextStep) => {
    setCurrentStep(nextStep);
  };

  return (
    <div>
      <h2>{question}</h2>
      {responses.map((response, index) => (
        <button key={index} onClick={() => handleResponseClick(response.nextStep)}>
          {response.text}
        </button>
      ))}
    </div>
  );
}

export default Chatbot;