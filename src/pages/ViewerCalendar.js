// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { Paper, Typography } from '@mui/material';
// import EventIcon from '@mui/icons-material/Event';
// import { useEvents } from './EventsContext';
// import EventViewer from './EventViewer';
// const localizer = momentLocalizer(moment);
// const localizer = momentLocalizer(moment);

// const ViewerCalendar = () => {
//   const { events } = useEvents();
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const handleCloseEvent = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div>
//       <h2>Viewer Calendar</h2>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: '500px' }}
      //   onSelectEvent={handleEventClick}
      // />
      // <EventViewer event={selectedEvent} onClose={handleCloseEvent} />
//     </div>
//   );
// };

// export default ViewerCalendar;




import React, { createContext, useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Paper, Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { useEvents } from './EventsContext';
import EventViewer from './EventViewer';
const localizer = momentLocalizer(moment);

const ViewerCalendar = () => {
  const { events } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const publicEvents = events.filter((event) => !event.private);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    console.log('Event details:', event.title, event.type, event.place, event.time);

  };

  const handleCloseEvent = () => {
    setSelectedEvent(null);
  };

  return (
    <div style={{ height: 500, overflowY: 'auto' }}>
      <Calendar
        localizer={localizer}
        events={publicEvents} // Use the filtered publicEvents array
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        onSelectEvent={handleEventClick}
        />
        <EventViewer event={selectedEvent} onClose={handleCloseEvent} />
      
    </div>
  );
};

export default ViewerCalendar;