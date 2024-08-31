import React from 'react';
import './SignUp.css';
import { FaDirections } from 'react-icons/fa';

const SignUp = () => {
    const handleDirectionClick = () => {
        // Open Google Maps with directions to New York
        window.open('https://www.google.com/maps/dir/?api=1&destination=New+York,NY', '_blank');
    };

    return (
        <div className="signUp">
            <div className="signUp__row">
                <div className="signUp__column signUp__map">
                    <div className="signUp__mapContainer">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.936169265982!2d-74.0060156845937!3d40.71277527933071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31693c28bb%3A0xfed3e9115d5efbdb!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1692000071674!5m2!1sen!2s"
                            width="100%"
                            height="500"
                            allowFullScreen=""
                            loading="lazy"
                            title="New York Map"
                        ></iframe>
                    </div>
                </div>
                <div className="signUp__column signUp__form">
                    <form>
                        <h2>Sign Up for Our Classes</h2>
                        <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                        <div className="signUp__formGroup signUp__inlineGroup">
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
                        <div className="signUp__formGroup signUp__inlineGroup">
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
                        <div className="signUp__formGroup">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="signUp__formGroup">
                            <button type="submit" className="signUp__submitButton">GET STARTED</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
