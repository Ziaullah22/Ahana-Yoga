import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './AhanaSlider.css'; // Import your CSS file for styling

const AhanaSlider = () => {
    const settings = {
        dots: false, // No dots
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Show 6 cards at a time
        slidesToScroll: 1,
        centerMode: false, // Disable center mode
        arrows: true, // Enable arrows
        swipe: true, // Enable swipe
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
    };

    const cards = [
        { image: '/images/ahanaSlider1.jpg', name: 'Ahana.Yoga' },
        { image: '/images/ahanaSlider2.jpg', name: 'Ahana.Yoga' },
        { image: '/images/ahanaSlider3.jpg', name: 'Ahana.Yoga' },
        { image: '/images/ahanaSlider4.jpg.webp', name: 'Ahana.Yoga' },
        { image: '/images/ahanaSlider5.jpg', name: 'Ahana.Yoga' },
        { image: '/images/ahanaSlider6.jpg', name: 'Ahana.Yoga' },
    ];

    return (
        <div className="ahana-slider">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div className="ahana-slider-card" key={index}>
                        <img src={card.image} alt={`Card ${index + 1}`} className="ahana-slider-card-image" />
                        <div className="ahana-slider-card-overlay">
                            <i className="fab fa-instagram ahana-slider-card-icon"></i>
                            <p className="ahana-slider-card-name">{card.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AhanaSlider;
