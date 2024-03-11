import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import coursesData from "../course.json";
import "../styles/dashboard.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const addToCalendar = (course) => {
    // Assuming each course is 1 hour for simplicity
    const newEvent = {
      title: course.title,
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      allDay: false,
    };

    setEvents(events.concat(newEvent));
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
          <img src="/assets/Video.png" className="video" />
        </div>
        <p className="featured">Featured Courses:</p>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000} // Change as needed
          showStatus={false}
          showThumbs={false}
          transitionTime={550}
        >
          {groupedCourses.map((group, index) => (
            <div key={index} className="carousel-slide">
              {group.map((course) => (
                <div key={course.id}>
                  <div key={course.id} className="card">
                    <p className="card_title">{course.title}</p>
                    <div className="course_desc">
                      <p>{course.description}</p>
                    </div>
                    <a href={course.link} className="course-link">
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </a>
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
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
