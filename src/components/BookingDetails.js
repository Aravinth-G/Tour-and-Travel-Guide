// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
// import './BookingDetails.css';

//   const BookingDetails=()=> {
//   const [bookings, setBookings] = useState([
//     { id: 1, customer: 'John Doe', date: '2024-01-05', status: 'Confirmed' },
//     { id: 2, customer: 'Alice Smith', date: '2024-01-06', status: 'Pending' },
//     { id: 3, customer: 'John Doe', date: '2024-01-05', status: 'Confirmed' },
//     { id: 4, customer: 'Alice Smith', date: '2024-01-06', status: 'Pending' },
//     { id: 5, customer: 'John Doe', date: '2024-01-05', status: 'Confirmed' },
//     { id: 6, customer: 'Alice Smith', date: '2024-01-06', status: 'Pending' },
//     { id: 7, customer: 'John Doe', date: '2024-01-05', status: 'Confirmed' },
//     { id: 8, customer: 'Alice Smith', date: '2024-01-06', status: 'Pending' },
//     { id: 9, customer: 'John Doe', date: '2024-01-05', status: 'Confirmed' },
//     { id: 10, customer: 'Alice Smith', date: '2024-01-06', status: 'Pending' },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [newBooking, setNewBooking] = useState({});

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const addNewBooking = () => {
//     setBookings([...bookings, newBooking]);
//     setNewBooking({});
//     handleClose();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewBooking({ ...newBooking, [name]: value });
//   };

//   const resetForm = () => {
//     setNewBooking({});
//     handleClose();
//   };

//   const deleteBooking = (id) => {
//     const updatedBookings = bookings.filter((booking) => booking.id !== id);
//     setBookings(updatedBookings);
//   };

//   return (
//     <div className='admin page'>
//       <Container>
//       <Button variant="success" onClick={handleShow} className="mb-3">
//           Add Booking
//         </Button>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Customer</th> 
//               <th>Date</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.id}>
//                 <td>{booking.id}</td>
//                 <td>{booking.customer}</td>
//                 <td>{booking.date}</td>
//                 <td>{booking.status}</td>
//                 <td>
//                   <Button variant="danger" onClick={() => deleteBooking(booking.id)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>

//         <Modal show={showModal} onHide={handleClose}>
        
//         <Modal.Header closeButton>
//             <Modal.Title>Add New Booking</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group controlId="customerName">
//                 <Form.Label>Customer Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter customer name"
//                   name="customer"
//                   value={newBooking.customer || ''}
//                   onChange={handleInputChange}
//                   style={{width: "300px"}} />
//               </Form.Group>
//               <Form.Group controlId="bookingDate">
//                 <Form.Label style={{width: "300px"}}>Booking Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="date"
//                   value={newBooking.date || ''}
//                   onChange={handleInputChange}
//                   style={{width: "300px"}} />
//               </Form.Group>
//                           </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={resetForm}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={addNewBooking}>
//               Save Booking
//             </Button>
//           </Modal.Footer>

//                     </Modal>
//       </Container>
//     </div>
//   );
// }

// export default BookingDetails;


import { Navbar } from '../components/Navbar';
import React, { useState } from 'react';
 import './Contact.css'; // Import the ContactForm.css file for styling
const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration purposes, log the form data
    // You can add your logic to handle the form data submission
  };

  return (
    <>
    <div> <Navbar /></div>
    <div className="contact">
    
      <form onSubmit={handleSubmit} >
        <h2>Contact Us</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Contact;