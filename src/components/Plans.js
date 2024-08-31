import React from 'react';
import './Plans.css'; // Import your custom CSS

const OurPlans = () => {
  return (
    <div className="our-plans-container container mt-5">
        <center><img src="/images/logo-icon.png.webp" alt="Logo" className="classes-logo" /></center>
      <h2 className="text-center our-plans-heading">PRICING PLANS</h2>
      <p className="text-center our-plans-paragraph">
        Choose the plan that best fits your needs. We offer a variety of plans to suit different requirements.
      </p>

      <div className="row our-plans-row">
        <div className="col-md-3 our-plans-column">
          <div className="plan-header beginner">BEGINNER</div>
          <div className="plan-box">
            <div className="price-circle">
              <h3>$59</h3>
              <p>PER MONTH</p>
            </div>
            <p className="plan-description">
              This beginner course covers the basics and provides a strong foundation for further learning.
            </p>
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
        <div className="col-md-3 our-plans-column">
          <div className="plan-header intermediate">INTERMEDIATE</div>
          <div className="plan-box">
            <div className="price-circle">
              <h3>$99</h3>
              <p>PER MONTH</p>
            </div>
            <p className="plan-description">
              This course dives deeper into the subject matter and introduces more complex concepts and techniques.
            </p>
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
        <div className="col-md-3 our-plans-column">
          <div className="plan-header advanced">ADVANCED</div>
          <div className="plan-box">
            <div className="price-circle">
              <h3>$159</h3>
              <p>PER MONTH</p>
            </div>
            <p className="plan-description">
              This advanced course focuses on specialized topics advanced techniques and concepts.
            </p>
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
        <div className="col-md-3 our-plans-column">
          <div className="plan-header professional">PROFESSIONAL</div>
          <div className="plan-box">
            <div className="price-circle">
              <h3>$199</h3>
              <p>PER MONTH</p>
            </div>
            <p className="plan-description">
              This professional course offers in-depth knowledge, practical experience, and advanced skills.
            </p>
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlans;
