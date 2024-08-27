import React, { useState } from 'react';
import profileImg from './profile1.png';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import resumePdf from './CV-JennyRoseTagumpay.pdf';
import Certifications from './page/Certifications';
import Skill from './page/Skill';
import ContactMe from './page/ContactMe';

function App() {
    const [animationKey, setAnimationKey] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDownload = () => {
        window.open(resumePdf); // Opens the PDF in a new tab/window for download
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const handleScrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });

        if (sectionId === 'home') {
            setAnimationKey(prevKey => prevKey + 1); // Change key to restart animation
        }
        if (isMenuOpen) {
            setIsMenuOpen(false); // Close the menu after clicking a button
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                {/* Menu Icon */}
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                {/* Menu Bar */}
                <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}>
                    <div className="close-button" onClick={toggleMenu}>
                        <i className="fa-solid fa-square-xmark"></i>
                    </div>
                    <div className="navbar-center">
                        <button onClick={(e) => handleScrollToSection(e, 'home')}>HOME</button>
                        <button onClick={(e) => handleScrollToSection(e, 'certifications')}>CERTIFICATIONS</button>
                        <button onClick={(e) => handleScrollToSection(e, 'skills')}>SKILLS</button>
                        <button onClick={(e) => handleScrollToSection(e, 'contact')}>CONTACT ME</button>
                    </div>
                </div>

                <div className="navbar">
                  
                    <div className="navbar-center">
                        <button onClick={(e) => handleScrollToSection(e, 'home')}>HOME</button>
                        <button onClick={(e) => handleScrollToSection(e, 'certifications')}>CERTIFICATIONS</button>
                        <button onClick={(e) => handleScrollToSection(e, 'skills')}>SKILLS</button>
                        <button onClick={(e) => handleScrollToSection(e, 'contact')}>CONTACT ME</button>
                    </div>
                    <div className="navbar-right">
                        <button onClick={handleDownload}>DOWNLOAD CV</button>
                    </div>
                </div>
                <section id="home" className="section profile-container">
                    <div className="circle-design"></div>
                    <div className="image-container">
                        <img src={profileImg} className="App-logo" alt="Profile picture of Jenny Rose Cuevas Tagumpay" />
                    </div>
                    <div className="text-container">
             
                            <h3>JENNY ROSE CUEVAS TAGUMPAY</h3>
                    
                        <p className="objectives-career">
                            I'm excited to leverage my passion for technology and software development skills to contribute meaningfully to your dynamic team. 
                        </p>
                        <p className="objectives-career">
                            Seeking a challenging role within a respected organization where I can showcase my abilities and stay at the forefront of emerging IT trends.
                        </p>
                        <div className="icon-container">
                            <a href="https://github.com/AkahanaIsMe" target="_blank" rel="noopener noreferrer" className="icon-button">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jenny-rose-tagumpay-3a8516309/" target="_blank" rel="noopener noreferrer" className="icon-button">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </section>

            </header>




            <section id="certifications" className="section">
                <Certifications />
            </section>

            <section id="skills" className="section">
                <Skill />

            </section>

            <section id="contact" className="section">
                <ContactMe />
            </section>
        </div>
    );
}

export default App;
