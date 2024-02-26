import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./index.css";
import HomePage from "./pages/homepage";

const localizer = momentLocalizer(moment);

const App = () => {
  const [events, setEvents] = useState([
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(),
    },
    // Add more events as needed
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleEventClick = (event) => {
    const title = window.prompt("Edit Event name", event.title);
    if (title) {
      const updatedEvents = events.map((e) =>
        e === event ? { ...e, title } : e
      );
      setEvents(updatedEvents);
    }
  };

  return (
    <React.StrictMode>
      <HomePage />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick}
        popup
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
