import React, { useState } from "react";
import data from "../chatbot.json";
import courses from "../course.json";
import "../styles/chatbot.css";

function Chatbot() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userResponses, setUserResponses] = useState({});

  const handleResponseClick = (response) => {
    const { nextStep, text } = response;
    let responseType;

    // Determine the type based on the current step
    if (currentStep === 1) {
      responseType = "difficulty";
    } else if (currentStep === 3) {
      responseType = "topic";
    }

    if (responseType) {
      setUserResponses((prevResponses) => ({
        ...prevResponses,
        [responseType]: text,
      }));
    }

    setCurrentStep(nextStep);
  };

  function getRecommendedCourses() {
    const { difficulty, topic } = userResponses;
    return courses.filter(
      (course) => course.difficulty === difficulty && course.topic === topic
    );
  }

  const renderRecommendations = () => {
    const recommendedCourses = getRecommendedCourses();

    return (
      <div>
        <h2>Recommended Courses:</h2>
        {recommendedCourses.length > 0 ? (
          recommendedCourses.map((course, index) => (
            <div key={index}>{course.title}</div>
          ))
        ) : (
          <div>No courses found for your selection.</div>
        )}
        <button
          className="button"
          onClick={() => handleResponseClick({ nextStep: 5 })}
        >
          Ok
        </button>
      </div>
    );
  };

  const getCurrentQuestion = () => {
    return data.find((question) => question.step === currentStep);
  };

  const renderQuestion = () => {
    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return <div>Loading...</div>;

    if (currentQuestion.step === 4) {
      return renderRecommendations();
    }

    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <img src="/assets/ibm_logo.png" alt="Logo" />
          </div>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/Leaderboard">Leaderboard</a>
            <a href="/chatbot">Chatbot</a>
          </div>
        </nav>
        <div className="questionnaire">
          <h2 className="question">{currentQuestion.question}</h2>
          <div>
            {currentQuestion.responses.map((response, index) => (
              <button
                className="button"
                key={index}
                onClick={() =>
                  handleResponseClick(response, currentQuestion.type)
                }
              >
                {response.text}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  };

  return <div className="App">{renderQuestion()}</div>;
}

export default Chatbot;
