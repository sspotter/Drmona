import React, { createContext, useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Paper, Typography, Modal, TextField, Button, Select, MenuItem, FormControl, InputLabel,FormControlLabel ,  } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { useEvents } from './EventsContext';
import { Radio } from '@mui/material';


const localizer = momentLocalizer(moment);

const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#2196F3', '#00BCD4', '#009688', '#4CAF50', '#CDDC39'];

const AdminCalendar = () => {
  const { events, setEvents } = useEvents();
  const [eventPrivate, setEventPrivate] = useState(false);
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');

  // const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [eventTitle, setEventTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventPlace, setEventPlace] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventColor, setEventColor] = useState(colors[0]);
  const [otherPlace, setOtherPlace] = useState(''); // New state for other place input
  const [onlineLink, setOnlineLink] = useState(''); // New state for online link

  const handleEventClick = (event) => {
    setModalData(event);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: eventTitle,
      type: eventType,
      place: eventPlace === 'other' ? otherPlace : eventPlace, // Use otherPlace if 'other' is selected
      time: eventTime,
      start: new Date(eventStart),
      end: new Date(eventEnd),
      color: eventColor,
      private: eventPrivate,
      onlineLink: onlineLink, // Add online link to event

    };

    setEvents([...events, newEvent]);
    setOpenModal(false);
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter((event) => event.id !== modalData.id);
    setEvents(updatedEvents);
    setOpenModal(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Admin Calendar
      </Typography>
      <div style={{ height: 500, overflowY: 'auto' }}>  
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
        onSelectEvent={handleEventClick}
        selectable
        onSelectSlot={({ start, end }) => {
          setModalData({});
          setOpenModal(true);
          setEventTitle('');
          setEventStart(start);
          setEventEnd(end);
          setEventColor(colors[0]);
        }}
        components={{
          event: CustomEvent,
        }}
      /> </div>

      <Modal open={openModal} onClose={handleModalClose}>
        <Paper sx={{ padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '300px' }}>
          {modalData.id ? (
            <div>


              <Typography variant="h6" gutterBottom>
                {modalData.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Start: {moment(modalData.start).format('lll')}
              </Typography>
              <Typography variant="body2" gutterBottom>
                End: {moment(modalData.end).format('lll')}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Color: <span style={{ color: modalData.color }}>{modalData.color}</span>
              </Typography>
              <Button variant="contained" color="error" onClick={handleDeleteEvent}>
                Delete
              </Button>
            </div>
          ) : (

<div>
  <Typography variant="h6" gutterBottom>
    Add Event
  </Typography>
  <FormControlLabel
            control={<Radio color="primary" />}
            label="Private Event"
            checked={eventPrivate}
            onChange={(e) => setEventPrivate(e.target.checked)}
          />
  <TextField label="Title" fullWidth value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
  {/* <TextField label="Type" fullWidth value={eventType} onChange={(e) => setEventType(e.target.value)} /> */}
  <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel>Place</InputLabel>
            <Select
              value={eventPlace}
              onChange={(e) => setEventPlace(e.target.value)}
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="center">Center</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          {eventPlace === 'other' && (
            <TextField
              label="Other Place"
              fullWidth
              value={otherPlace}
              onChange={(e) => setOtherPlace(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
          )}
          {eventPlace === 'online' && (
            <TextField
              label="https://support.microsoft.com/en-us/office/schedule-a-meeting-in-microsoft-teams-943507a9-8583-4c58-b5d2-8ec8265e04e5"
              fullWidth
              value={onlineLink}
              onChange={(e) => setOnlineLink(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
          
          )}
          <TextField
            label="Time"
            type="time"
            minRows={1}
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 minutes
            }}
            sx={{ marginBottom: '10px' }} // Add margin
          />
  <FormControl fullWidth>
    <InputLabel>Color</InputLabel>
    <Select value={eventColor} onChange={(e) => setEventColor(e.target.value)}>
      {colors.map((color, index) => (
        <MenuItem key={index} value={color} style={{ backgroundColor: color }}>
          {color}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  <Button variant="contained"  onClick={handleAddEvent}>
    Add Event
  </Button>

</div>
          )}
        </Paper>
      </Modal>
    </Paper>
  );
};

const CustomEvent = ({ event }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2px 6px',
      borderRadius: '10px',
      backgroundColor: event.color,
      color: 'white', // White text color on colored background
      marginBottom: '2px',
      cursor: 'pointer',
    }}
  >
    <div>
      <div>{event.title}</div>
      <div>{event.type}</div>
      <div>{event.place}</div>
      <div>{event.time}</div>
    </div>
    <EventIcon sx={{ fontSize: 16 }} />
  </div>
);

export default AdminCalendar;
