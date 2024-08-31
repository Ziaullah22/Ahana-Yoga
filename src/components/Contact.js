import React from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    const handleSocialMediaClick = (platform) => {
        const urls = {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://www.linkedin.com/'
        };
        window.open(urls[platform], '_blank');
    };

    return (
        <div className="contactUs">
            <div className="contactUs__mapContainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.936169265982!2d-74.0060156845937!3d40.71277527933071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31693c28bb%3A0xfed3e9115d5efbdb!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1692000071674!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    allowFullScreen=""
                    loading="lazy"
                    title="New York Map"
                ></iframe>
            </div>
            <div className="contactUs__contentRow">
                <div className="contactUs__infoColumn">
                    <h2>Visit the Yoga Ahana</h2>
                    <div className="contactUs__infoItem">
                        <FaMapMarkerAlt className="contactUs__icon" />
                        <p>184 Main Collins Street</p>
                    </div>
                    <div className="contactUs__infoItem">
                        <FaPhoneAlt className="contactUs__icon" />
                        <p>(965) 436 3274</p>
                    </div>
                    <div className="contactUs__infoItem">
                        <FaEnvelope className="contactUs__icon" />
                        <p>ahana.yoga@gmail.com</p>
                    </div>
                    <div className="contactUs__infoItem">
                        <FaClock className="contactUs__icon" />
                        <div>
                            <p>Mon - Fri: 6:30am - 07:45pm</p>
                            <p>Sat - Sun: 8:30am - 05:45pm</p>
                        </div>
                    </div>
                    <div className="contactUs__socialMedia">
                        <FaFacebookF onClick={() => handleSocialMediaClick('facebook')} />
                        <FaTwitter onClick={() => handleSocialMediaClick('twitter')} />
                        <FaInstagram onClick={() => handleSocialMediaClick('instagram')} />
                        <FaLinkedin onClick={() => handleSocialMediaClick('linkedin')} />
                    </div>
                </div>
                <div className="contactUs__formColumn">
                    <form>
                        <div className="contactUs__formGroup contactUs__inlineGroup">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="contactUs__formGroup contactUs__inlineGroup">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="contactUs__formGroup">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="contactUs__formGroup">
                            <button type="submit" className="contactUs__submitButton">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
