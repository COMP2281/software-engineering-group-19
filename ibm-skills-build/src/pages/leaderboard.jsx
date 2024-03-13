import React from "react";
import "../styles/leaderboard.css"; 

const LeaderboardPage = () => {

  const learners = [
    { name: "Noah Jones", score: 100 },
    { name: "Isabella Brown", score: 89 },
    { name: "James Davis", score: 72 },
    { name: "Benjamin Taylor", score: 65 },
    { name: "Mia Thomas", score: 57 },
  ];  

  return (
    <div className="leaderboard-container">
      <nav className="side">
        <img
          src="/assets/ibm_skills_build.png"
          alt="IBM SkillsBuild Logo"
          className="ibm_logo"
        />
        <div className="sidebar-list">
          <a href="/dashboard" className="sidebar-item">
            Dashboard
          </a>
          <a href="/homework" className="sidebar-item">
            Homework
          </a>
          <a href="/chatbot" className="sidebar-item">
            Chatbot
          </a>
        </div>
        <button className="sidebar-item logout">Logout</button>
      </nav>

      <div className="main-content">
        <h1>Top Learners</h1>
        {learners.map((learner, index) => (
          <div key={index} className="learner-card">
            <span className="blue-dot"></span> 
            <div className="headers">
              <div>
                <div className="learner-header">Name</div>
                <div className="learner-content">{learner.name}</div>
              </div>
              <div>
                <div className="learner-header">Score</div>
                <div className="learner-content">{learner.score}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
