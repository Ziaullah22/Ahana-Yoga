import React, { useState, useEffect } from 'react';
import './Slider2nd.css'; // Ensure you have appropriate CSS for the slider

const Slider2nd = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming 3 slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const designers = [
    {
      img: '/images/Trainer.jpg.webp', // Replace with the path to your designer's profile picture
      name: 'Emily Smith',
      bio: "Sophia is a passionate yoga designer with over 10 years of experience in creating serene and holistic environments for yoga enthusiasts. Her designs are inspired by nature and aim to provide a calming space that enhances the practice of yoga. Sophia believes that a well-designed space can deepen one's yoga practice, making it a more profound and transformative experience"
    },
    {
      img: '/images/Trainer2.jpg.webp', // Replace with the path to your designer's profile picture
      name: 'Sophia Johnson',
      bio: "Emily's journey as a yoga designer began when she combined her love for yoga with her eye for design. With a background in interior design and a deep understanding of yoga's spiritual and physical benefits, Emily creates spaces that are both functional and beautiful. Her goal is to make yoga accessible to everyone by designing spaces that invite relaxation, focus, and mindfulness.",
    },
    {
      img: '/images/Trainer3.jpg.webp', // Replace with the path to your designer's profile picture
      name: 'Olivia Brown',
      bio: "Isabella is a renowned yoga designer known for her innovative approach to creating yoga spaces. She incorporates elements of light, texture, and color to craft environments that are not only visually appealing but also conducive to meditation and mindfulness. Isabella's designs have been featured in several wellness magazines, and she continues to push the boundaries of what a yoga space can be.",
    }
  ];

  return (
    <div className="slider2nd">
      <div className="slides2nd">
        {designers.map((designer, index) => (
          <div
            key={index}
            className={`slide2nd ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="background-layer"></div>
            <div className="slide-content">
              <img src={designer.img} alt={designer.name} className="profile-pic" />
              <p className="bio">{designer.bio}</p>
              <h2 className="designer-name">{designer.name}</h2>
              <p className="title">Designer</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots2nd">
        {designers.map((_, index) => (
          <span
            key={index}
            className={`dot2nd ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider2nd;
