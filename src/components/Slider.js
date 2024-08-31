import React, { useState, useEffect } from 'react';
import './slider.css'; // Ensure you have appropriate CSS for the slider

const slides = [
  { id: 1, picture: '/images/first.png.webp' },
  {
    id: 2,
    picture: '/images/second.png.webp',
    title: 'Get slim and toned with yoga',
    paragraph: 'Achieve a slimmer, more toned physique with the transformative power of yoga. This ancient practice not only strengthens and sculpts your body but also enhances flexibility and balance.'
  },
  {
    id: 3,
    picture: '/images/third.png.webp',
    title: 'Reduce your stress',
    paragraph: 'Learn how to manage stress with our comprehensive guide. Join us for a journey towards a calmer, healthier you.',
    button: 'Register Now'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Social Media Icons */}
            <div className="social-icons">
              <i className="fab fa-facebook-f social-icon"></i>
              <i className="fab fa-instagram social-icon"></i>
              <i className="fab fa-twitter social-icon"></i>
              <i className="fab fa-linkedin-in social-icon"></i>
            </div>

            {slide.picture && (
              <img src={slide.picture} alt={`Slide ${slide.id}`} className="slide-image" />
            )}
            {slide.title && <h2 className="slide-title">{slide.title}</h2>}
            {slide.paragraph && <p className="slide-paragraph">{slide.paragraph}</p>}
            {slide.button && (
              <button className="register-button">
                {slide.button}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
