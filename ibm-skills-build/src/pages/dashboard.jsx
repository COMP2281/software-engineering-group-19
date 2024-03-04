import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import coursesData from '../course.json'; // Make sure the path is correct

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
        <img src="/path-to-your-logo.png" alt="IBM SkillsBuild Logo" className="logo" />
        <ul className="nav-list">
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">Leaderboard</li>
          <li className="nav-item">Homework</li>
          <li className="nav-item">Chatbot</li>
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
      <div className="main-content">
        <header>
          <div className="search-bar">
            {/* Search bar content */}
          </div>
        </header>
        <div className="welcome-banner">
          <h1>Welcome, Alex</h1>
          <p>Have a good day!</p>
        </div>
        <div className="video-banner">
          {/* Video content should go here */}
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
