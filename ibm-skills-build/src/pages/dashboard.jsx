import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import coursesData from '../course.json'; // Make sure the path is correct
import "../styles/dashboard.css";

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  const addToCalendar = (course) => {
    // Assuming each course is 1 hour for simplicity
    const newEvent = {
      title: course.title,
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      allDay: false
    };

    setEvents(events.concat(newEvent));
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <img src="/assets/ibm_logo.png" alt="IBM SkillsBuild Logo" className="logo" />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/leaderboard">Leaderboard</a>
          </li>
          <li className="nav-item">
            <a href="/homework">Homework</a>
          </li>
          <li className="nav-item">
            <a href="/chatbot">Chatbot</a>
          </li>
          <li className="nav-item">
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <header>
          <div className="search-bar">
            <input type="text" />
          </div>
        </header>
        <div className="welcome-banner">
          <h1>Welcome, Alex</h1>
          <p>Have a good day!</p>
        </div>
        <div className="video-banner">
          <img src="/assets/Video.png" className="video" />
        </div>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          {coursesData.map(course => (
            <div key={course.id} className="carousel-item">
              <h3>{course.title}</h3>
              <p>{course.category}</p>
              <p>{course.description}</p>
              <a href={course.link} target="_blank" rel="noreferrer noopener">Go to course</a>
              <button onClick={() => addToCalendar(course)}>Add to Calendar</button>
            </div>
          ))}
        </Carousel>
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
