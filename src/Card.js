// import React from 'react';

// const Card = ({ title, description, imageUrl }) => {
//   return (
//     <div style={{ width: '300px', margin: '0 auto' }}>
//       {/* <img className="app" src='https://images.pexels.com/photos/1122418/pexels-photo-1122418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt={title} style={{ width: '100%' }} /> */}
    
//       <p style="background-image: url('https://images.pexels.com/photos/1122418/pexels-photo-1122418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
//     </p>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default Card;

import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    left:'-1900px',
    
    width:'950px',
    height: '350px', // Set the desired height for the card
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#fff', // Text color (you might need to adjust this depending on your images)
    padding: '0px 24px',
    left_padding:'20px',
    boxSizing: 'border-box',
    margin:'200px',
    margin_left:'300%',
    top:'70px',
    align_items:'center',


     
     
  };

  return (

    <div className='custom-card'>
    <div className="card1" style={cardStyle}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;



