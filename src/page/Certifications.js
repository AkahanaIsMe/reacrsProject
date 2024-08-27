import React from 'react';
import toscaImage from '../certifications/tosca.png';
import devopsImage from '../certifications/devops.png';
import networkImage from '../certifications/network.png';

const Certifications = () => {
    const verificationLink1 = "https://verify.skilljar.com/c/wxak5qgq38jh";
    const verificationLink2 = "https://www.credly.com/badges/7ad88422-13fe-4db1-ad21-c60423025953/public_url";
    const verificationLink3 = "https://www.credly.com/badges/1e1f2f77-070f-4f35-9446-1c047bc99f79/public_url";

    return (
        <div id="certifications">
            <h2>CERTIFICATIONS</h2>
            <div className="certification-images">
                <div className="certification-item">
                    <a href={verificationLink1} target="_blank" rel="noopener noreferrer">
                        <img src={toscaImage} alt="Tosca Certification" />
                    </a>
                    <p>Issued Date: November 24, 2023</p>
                </div>
                <div className="certification-item">
                    <a href={verificationLink2} target="_blank" rel="noopener noreferrer">
                        <img src={devopsImage} alt="DevOps Certification" />
                    </a>
                    <p>Issued Date: May 24, 2024</p>
                </div>
                <div className="certification-item">
                    <a href={verificationLink3} target="_blank" rel="noopener noreferrer">
                        <img src={networkImage} alt="Network Certification" />
                    </a>
                    <p>Issued Date: June 21, 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
