import React, { useState } from 'react';
import profileCon from '../profile.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const address = "Cielito Homes, Camarin, Caloocan City, Philippines";

    const handleButtonClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleSendMessage = () => {
        if (message.trim() === '' || senderName.trim() === '' || senderEmail.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        emailjs.send('jennyrose08', 'jennyrose_08', {
            from_name: senderName,
            from_email: senderEmail,
            to_name: 'Jenny',
            message: message,
            to_email: 'jennyrosetagumpay08@gmail.com'
        }, 'UNg0kEq1mMa0M1epy')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send the message.');
            });
        setPopupVisible(false);
        setMessage('');
        setSenderName('');
        setSenderEmail('');
    };

    return (
        <div id="contact-me" className="contact-section">
            <div className="profile-info-container">
                <div className="profile-container2">
                    <img src={profileCon} alt="Profile" className="profile-image" />
                </div>
                <div className="contact-info">
                    <h3><center>Contact me</center></h3>
                    <p>Phone: (+63) 975-106-0599</p>
                    <p>Email: jennyrosetagumpay08@gmail.com</p>
                    <p>Address: {address}</p>
                </div>
            </div>
            <div className="contact-content">
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6914455588827!2d121.04514951471837!3d14.74670838978602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b034de2d387d%3A0xa7a5b13d7a07ff6b!2sAratiles%20St.%2C%20Cielito%20Homes%2C%20Camarin%2C%20Caloocan%2C%201405%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1625066563927!5m2!1sen!2sph"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {!isPopupVisible && (
                <button onClick={handleButtonClick} className="message-button">
                    <i className="fa-solid fa-message"></i>
                </button>
            )}

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h4>Write your message</h4>
                        <input
                            type="text"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="Your Full Name"
                            className="input-field"
                        />
                        <input
                            type="email"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            placeholder="Your Email Address"
                            className="input-field"
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            rows="4"
                            cols="50"
                        ></textarea>
                        <div className="popup-actions">
                            <button onClick={handleSendMessage}>Send</button>
                            <button onClick={handleClosePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactMe;
