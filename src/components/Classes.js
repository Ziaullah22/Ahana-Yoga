import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Classes.css'; // Import your CSS file for styling

const Classes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of visible cards
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true, // Enable center mode to show centered card
        centerPadding: '0', // Remove default padding from center mode
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };
    

  const cards = [
    { 
      image: '/images/Class1.jpg.webp', 
      heading: 'Yoga Therapy', 
      date: '2024-08-01', 
      time: '10:00 AM', 
      paragraph: 'A relaxing class to improve flexibility and reduce stress.',
      trainerImage: '/images/Trainer.jpg.webp',
      trainerName: 'Vectoria Webb',
      trainerDesc: 'Yoga Trainer'
    },
    { 
      image: '/images/Class2.jpg.webp', 
      heading: 'Traditional Hatha', 
      date: '2024-08-02', 
      time: '11:00 AM', 
      paragraph: 'A classic yoga style focusing on physical postures and breathing.',
      trainerImage: '/images/Trainer2.jpg.webp',
      trainerName: 'Anglena Jolie',
      trainerDesc: 'Yoga Trainer'
    },
    { 
      image: '/images/Class1.jpg.webp', 
      heading: 'Artistic Yoga', 
      date: '2024-08-03', 
      time: '12:00 PM', 
      paragraph: 'An innovative approach combining yoga with creative expression.',
      trainerImage: '/images/Trainer3.jpg.webp',
      trainerName: 'Vectoria Jolie',
      trainerDesc: 'Yoga Trainer'
    },
    { 
      image: '/images/Class2.jpg.webp', 
      heading: 'Yoga Therapy', 
      date: '2024-08-01', 
      time: '10:00 AM', 
      paragraph: 'A relaxing class to improve flexibility and reduce stress.',
      trainerImage: '/images/Trainer.jpg.webp',
      trainerName: 'Vectoria Webb',
      trainerDesc: 'Yoga Trainer'
    },
    { 
      image: '/images/Class1.jpg.webp', 
      heading: 'Traditional Hatha', 
      date: '2024-08-02', 
      time: '11:00 AM', 
      paragraph: 'A classic yoga style focusing on physical postures and breathing.',
      trainerImage: '/images/Trainer2.jpg.webp',
      trainerName: 'Anglena Jolie',
      trainerDesc: 'Yoga Trainer'
    },
    { 
      image: '/images/Class2.jpg.webp', 
      heading: 'Artistic Yoga', 
      date: '2024-08-03', 
      time: '12:00 PM', 
      paragraph: 'An innovative approach combining yoga with creative expression.',
      trainerImage: '/images/Trainer3.jpg.webp',
      trainerName: 'Vectoria Jolie',
      trainerDesc: 'Yoga Trainer'
    },
  ];

  return (
    <div className="classes-container">
      <div className="classes-header">
        <img src="/images/logo-icon.png.webp" alt="Logo" className="classes-logo" />
        <h2 className="classes-title">POPULAR CLASSES</h2>
        <p className="classes-description">Explore our most popular classes that are trending right now.</p>
      </div>
      <div className="classes-slider">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="classes-card" key={index}>
              <img src={card.image} alt={`Card ${index + 1}`} className="classes-card-image" />
              <div className="classes-card-content">
                <a href="#!" className="classes-card-heading" onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  window.location.reload(); // Reload the page
                }}>
                  {card.heading}
                </a>
                <div className="classes-card-date-time">
                  <i className="fas fa-calendar-day"></i>
                  <span className="date">{card.date}</span>
                  <i className="fas fa-clock"></i>
                  <span className="time">{card.time}</span>
                </div>
                <p className="classes-card-paragraph">{card.paragraph}</p>
                <div className="classes-trainer">
                  <img src={card.trainerImage} alt={`Trainer ${index + 1}`} className="classes-trainer-image" />
                  <div className="classes-trainer-info">
                    <p className="classes-trainer-name">{card.trainerName}</p>
                    <p className="classes-trainer-desc">{card.trainerDesc}</p>
                    <a href="#!" className="classes-book-now">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Classes;
