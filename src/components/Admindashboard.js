// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
// import './Admindashboard.css';

// function BookingDetails() {
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
//         {/* <h1>Admin Dashboard - Bookings</h1> */}
//         <Button variant="success" onClick={handleShow} className="mb-3">
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
//               {/* Add other input fields for status, etc., if needed */}
//             </Form>
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







// Amin dashboard chart
// Admindashboard.js

import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';
import './Admindashboard.css'; 
function Admindashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const bookingsData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Number of Bookings',
              data: [12, 19, 3, 5, 2, 3, 15], 
              backgroundColor: 'rgba(54, 162, 235, 0.6)', 
              borderColor: 'rgba(54, 162, 235, 1)', 
              borderWidth: 1,
            },
          ],
        };

        if (window.myChart !== undefined) {
          window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
          type: 'bar',
          data: bookingsData,
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Travel Bookings Chart',
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Bookings',
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <>
    <div className="sidebar">
    <Link to='/admindashboard'><a href="#"><br />Dashboard</a></Link>
    <br />
  
 <Link to="/contact">   <a href="#"><p>Booking Details</p></a></Link>
  </div>
    <div className="admin-page">
      <div className="main-content">
        <div className="chart-container">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
 
    </>
  );
}

export default Admindashboard;
