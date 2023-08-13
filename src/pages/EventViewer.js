import React from 'react';
import { Modal, Paper, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import moment from 'moment';

const EventViewer = ({ event, onClose }) => {
  if (!event) {
    return null;
  }

  const renderLink = () => {
    if (event.place === 'online') {
      return (
        <Typography variant="body2" gutterBottom>
          <a href={event.onlineLink} target="_blank" rel="noopener noreferrer">
            Join Online: {event.onlineLink}
          </a>
        </Typography>
      );
    } else if (event.place === 'other') {
      return (
        <Typography variant="body2" gutterBottom>
          Other Place: {event.otherPlace}
        </Typography>
      );
    } else {
      return (
        <Typography variant="body2" gutterBottom>
          Place: {event.place}
        </Typography>
      );
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Paper sx={{ padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '300px' }}>
        <Typography variant="h6" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Start: {moment(event.start).format('lll')}
        </Typography>
        <Typography variant="body2" gutterBottom>
          End: {moment(event.end).format('lll')}
        </Typography>
        {renderLink()} {/* Render the appropriate link */}
        <Typography variant="body2" gutterBottom>
          Color: <span style={{ color: event.color }}>{event.color}</span>
        </Typography>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Paper>
    </Modal>
  );
};

export default EventViewer;
