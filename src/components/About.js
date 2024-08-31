import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-container">
      <div className="about-logo">
        <img src="\images\logo-icon.png.webp" alt="Ahana Logo" className="about-logo-img" />
      </div>
      <h1 className="about-heading">WELCOME TO AHANA</h1>
      <p className="about-description">
        Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!
      </p>

      <div className="about-row">
        <div className="about-column">
          <img src="\images\about.png.webp" alt="Yoga" className="about-image" />
        </div>
        <div className="about-column">
          <div className="about-feature">
            <div className="about-feature-image">
              <img src="\images\about-1.png.webp" alt="Full Rejuvenation" className="about-circle-image" />
            </div>
            <div className="about-feature-text">
              <h3 className="about-feature-heading">Full Rejuvenation</h3>
              <p className="about-feature-description">
                Rejuvenate your body and mind with our holistic approach to wellness. Experience the ultimate relaxation, improve your physical health.
              </p>
            </div>
          </div>
          <div className="about-feature">
            <div className="about-feature-image">
              <img src="\images\about-2.png.webp" alt="Extension of Spring" className="about-circle-image" />
            </div>
            <div className="about-feature-text">
              <h3 className="about-feature-heading">Extension of Spring</h3>
              <p className="about-feature-description">
                Embrace the vitality and freshness of spring all year round. Our programs are designed to keep you feeling young, vibrant, and full of energy.
              </p>
            </div>
          </div>
          <div className="about-feature">
            <div className="about-feature-image">
              <img src="\images\about-3.png.webp" alt="Against Aging" className="about-circle-image" />
            </div>
            <div className="about-feature-text">
              <h3 className="about-feature-heading">Against Aging</h3>
              <p className="about-feature-description">
                Discover the secrets to staying youthful and energetic. Our anti-aging yoga techniques focus on maintaining flexibility, strength, and peace of mind.
              </p>
            </div>
          </div>
          <a href="/"><button className="about-button">EXPLORE MORE</button></a>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default About;
