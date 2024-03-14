import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coursesData from "../course.json";
import "../styles/dashboard.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This import is duplicated; consider removing one of them.

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState(""); // If not used, consider removing this state.
  const [isAdding, setIsAdding] = useState(false); // Flag to toggle adding mode
  const [calendarClasses, setCalendarClasses] = useState(""); // To toggle calendar classes for appearance
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const addToCalendar = (course) => {
    // Example: assuming course has startTime and endTime in ISO 8601 format
    const newEvent = {
      title: course.title,
      start: new Date(course.startTime), // or your logic to set the start time
      end: new Date(course.endTime), // or your logic to set the end time
      allDay: false,
    };
  
    setEvents([...events, newEvent]);
  };

  const startAddingToCalendar = (course) => {
    setIsAdding(true);
    setSelectedCourse(course); // Store the selected course
    setCalendarClasses("adding-mode"); // Visually indicate we're in adding mode
  };

  const handleSelectSlot = (slotInfo) => {
    if (isAdding && selectedCourse) {
      const newEvent = {
        title: selectedCourse.title,
        start: slotInfo.start,
        end: slotInfo.end,
        allDay: false,
      };
  
      setEvents([...events, newEvent]);
      setIsAdding(false);
      setCalendarClasses(""); // Reset the visual indication of adding mode
      setSelectedCourse(null); // Clear the selected course
    }
  };
      
  const cardsPerSlide = 2;
  // Group the courses into sub-arrays of the specified size
  const groupedCourses = [];
  for (let i = 0; i < coursesData.length; i += cardsPerSlide) {
    groupedCourses.push(coursesData.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <img
          src="/assets/ibm_skills_build.png"
          alt="IBM SkillsBuild Logo"
          className="ibm_logo"
        />
        <div className="nav-list">
          <a href="/leaderboard" className="nav-item">
            Leaderboard
          </a>
          <a href="/homework" className="nav-item">
            Homework
          </a>
          <a href="/chatbot" className="nav-item">
            Chatbot
          </a>
        </div>
        <button className="nav-item nav-exit logout-button">Logout</button>
      </nav>

      <div className="main-content">
        <div className="welcome-banner">
          <div>
            <p>Welcome, Alex</p>
            <p>Have a good day!</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="video-banner">
          <img src="/assets/card_3.jpg" className="main_image" />
        </div>
        <p className="featured">Featured Courses:</p>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          transitionTime={550}
        >

      
        {groupedCourses.map((group, index) => (
          <div key={index} className="carousel-slide">
            {group.map((course) => (
              <div key={course.id} className="card">
                <p className="card_title">{course.title}</p>
                <div className="course_desc">
                  <p>{course.description}</p>
                </div>
                <div className="card-actions">
                  <a href={course.link} className="course-link">
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </a>
                  <button className="add-to-calendar-btn" onClick={() => startAddingToCalendar(course)}>Add to Calendar</button>
                </div>
              </div>
            ))}
          </div>
        ))}
        </Carousel>
      </div>
      <div className="calendar">
        <div className="schedule">
          <p>Schedule</p>
          <div className="calendar">
          {/* Calendar component... */}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectSlot={handleSelectSlot}
            selectable={true} // Allows slot selection
            defaultView="week" // Sets the default view to week
            className={calendarClasses} // Use this to control the appearance
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
