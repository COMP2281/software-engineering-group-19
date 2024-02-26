import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="top-nav">
        <div className="nav-links">
          <a href="/dashboard" className="active">Dashboard</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/homework">Homework</a>
          <a href="/chatbot">Chatbot</a>
        </div>
        <button className="logout-button">Logout</button>
      </nav>

      <header className="header">
        <h1>Welcome, Alex</h1>
        <p>Have a good day!</p>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </header>

      <main className="main-content">
        <section className="featured-video">
          <div className="video-thumbnail">
            <button className="play-button"></button>
          </div>
          <div className="video-info">
            <h2>Getting Started with Enterprise-grade AI</h2>
            <p>2 Lessons | 1 Hour</p>
          </div>
        </section>

        <section className="my-classes">
          <h3>My Classes</h3>
          <a href="/all-classes" className="see-all">See all</a>
          <div className="class-list">
            <div className="class-item">
              <h4>Interaction</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.</p>
              <span>Wade Warren</span>
              <span>8 Classes</span>
              <span>3 Hours</span>
            </div>
            {/* Repeat .class-item for each class */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
