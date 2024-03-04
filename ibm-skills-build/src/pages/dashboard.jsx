<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import coursesData from '../course.json'; // assuming course.json is in the same directory

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  // Function to handle adding courses to the calendar
  const addToCalendar = (course) => {
    const newEvent = {
      title: course.title,
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      allDay: false
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div className="dashboard">
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
          <img src="/path-to-your-logo.png" alt="IBM SkillsBuild Logo" />
          <div className="search-bar">
            {/* Search bar content */}
          </div>
        </header>
        <section className="video-section">
          <video src="/path-to-your-video.mp4" controls />
        </section>
        <section className="carousel-section">
          <Carousel>
            {coursesData.map((course) => (
              <div key={course.id} className="course">
                <h3>{course.title}</h3>
                <p>{course.category}</p>
                <p>{course.description}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">Go to course</a>
                <button onClick={() => addToCalendar(course)}>Add to Calendar</button>
              </div>
            ))}
          </Carousel>
        </section>
        <section className="calendar-section">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;















>>>>>>> Stashed changes
