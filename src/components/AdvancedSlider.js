import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../Card'; // Import the Card component

const AdvancedSlider = () => {
  // Sample array of data for cards
  

  const cardData = [
    {

      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
  
    },
    

    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://images.pexels.com/photos/3426880/pexels-photo-3426880.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'https://images.pexels.com/photos/1122418/pexels-photo-1122418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more card data as needed
  ];

  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {cardData.map((card, index) => (
        <div key={index}>
          <Card {...card} />
        </div>
      ))}
    </Carousel>
  );
};

export default AdvancedSlider;
