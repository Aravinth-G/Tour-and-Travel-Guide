import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './dash.css'
const Dashboard = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [bookingStatus, setBookingStatus] = useState('No booking made yet.');

    const bookSlot = () => {
        if (name && date && time) {

            setBookingStatus(`Booking confirmed for ${name} on ${date} at ${time}.`);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className='booking-website'>
        <Container>
            <h1 style={{color:'black'}}>Booking Dashboard</h1>
            <div className="booking now">
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label style={{color:"black"}}> Name:</Form.Label>
                        <Form.Control  style={{color:"black"}}
                            type="text"
                            style={{color:"black"}}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /> 
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label  style={{color:"black"}}>Date:</Form.Label>
                        <Form.Control   style={{color:"black"}}
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.Label  style={{color:"black"}}>Time:</Form.Label>
                        <Form.Control
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                         />
                    </Form.Group>
                    <Button variant="primary" onClick={bookSlot}>
                        Book Now
                    </Button>
                    <div className="booking-statusbar">
                <h2 style={{color:"black"}}>Booking Status:</h2>
                <p>{bookingStatus}</p>  </div>
                </Form>
            </div>
            <br></br>
           
        </Container>
        
      
        </div>
    );
};

export default Dashboard;
