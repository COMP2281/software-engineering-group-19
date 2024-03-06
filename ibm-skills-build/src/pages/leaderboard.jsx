import React from 'react';
import '../styles/leaderboard.css';
import ibmLogo from './ibm_logo.png'; // make sure the logo is in your src folder

const Leaderboard = () => {
    const learners = [
        { name: 'Tika Sarak', score: 1200 },
        // ... other learners
    ];

    return (
        <div className="leaderboard-container">
            <aside className="sidebar">
                <div className="logo-container">
                    <img src={ibmLogo} alt="IBM Logo" className="logo" />
                </div>
                <nav className="navigation">
                    <button className="nav-item">Dashboard</button>
                    <button className="nav-item active">Leaderboard</button>
                    <button className="nav-item">Homework</button>
                    <button className="nav-item">Chatbot</button>
                </nav>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1 className="top-learners-title">Top Learners</h1>
                    <div className="user-actions">
                        <button className="action-item">Logout</button>
                        <button className="action-item">Dashboard</button>
                        <button className="action-item">Home</button>
                    </div>
                </header>
                <section className="learner-scores">
                    {learners.map((learner, index) => (
                        <div key={index} className="learner-card">
                            <div className="learner-info">
                                <div className="learner-name-label">Name</div>
                                <div className="learner-name">{learner.name}</div>
                            </div>
                            <div className="learner-info">
                                <div className="learner-score-label">Score</div>
                                <div className="learner-score">{learner.score}</div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Leaderboard;
