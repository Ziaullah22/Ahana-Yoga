import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Trainer.css'; // Import your CSS file for styling

const Trainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Number of visible cards
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    const trainers = [
        { 
            name: 'Vectoria Webb',
            intro: 'A passionate yoga trainer with over 10 years of experience.',
            image: '/images/Yoga1.png.webp', // Replace with actual image path
            socialLinks: {
                facebook: 'https://www.facebook.com/VectoriaWebb',
                instagram: 'https://www.instagram.com/VectoriaWebb',
                twitter: 'https://twitter.com/VectoriaWebb',
                linkedin: 'https://www.linkedin.com/in/VectoriaWebb'
            }
        },
        { 
            name: 'Anglena Jolie',
            intro: 'Specializing in traditional Hatha yoga with a focus on wellness.',
            image: '/images/Yoga2.png.webp', // Replace with actual image path
            socialLinks: {
                facebook: 'https://www.facebook.com/AnglenaJolie',
                instagram: 'https://www.instagram.com/AnglenaJolie',
                twitter: 'https://twitter.com/AnglenaJolie',
                linkedin: 'https://www.linkedin.com/in/AnglenaJolie'
            }
        },
        { 
            name: 'Vectoria Jolie',
            intro: 'An innovative yoga trainer blending creativity and mindfulness.',
            image: '/images/Yoga3.png.webp', // Replace with actual image path
            socialLinks: {
                facebook: 'https://www.facebook.com/VectoriaJolie',
                instagram: 'https://www.instagram.com/VectoriaJolie',
                twitter: 'https://twitter.com/VectoriaJolie',
                linkedin: 'https://www.linkedin.com/in/VectoriaJolie'
            }
        }
    ];

    return (
        <div className="trainer-container">
            <div className="trainer-header">
            <img src="/images/logo-icon.png.webp" alt="Logo" className="classes-logo" />
                <h2 className="trainer-title">OUR TRAINER YOGA</h2>
                <p className="trainer-description">Meet our exceptional yoga trainers who will guide you on your journey.</p>
            </div>
            <div className="trainer-slider">
                <Slider {...settings}>
                    {trainers.map((trainer, index) => (
                        <div className="trainer-card" key={index}>
                            <div className="row no-gutters">
                                <div className="col-md-6 trainer-card-content border-right">
                                    <h3 className="trainer-card-name">{trainer.name}</h3>
                                    <p className="trainer-card-desc">Yoga Trainer</p>
                                    <p className="trainer-card-intro">{trainer.intro}</p>
                                    <div className="trainer-social-icons">
                                        <a href={trainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="trainer-social-icon"><i className="fab fa-facebook-f"></i></a>
                                        <a href={trainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="trainer-social-icon"><i className="fab fa-instagram"></i></a>
                                        <a href={trainer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="trainer-social-icon"><i className="fab fa-twitter"></i></a>
                                        <a href={trainer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="trainer-social-icon"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-6 trainer-card-image border-left">
                                    <img src={trainer.image} alt={trainer.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Trainer;
