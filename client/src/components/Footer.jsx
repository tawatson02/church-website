import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/logos/facebook_1384005.png'; // replace with the actual path to your Facebook icon
import YouTubeIcon from '../assets/logos/youtube_1384028.png';   // replace with the actual path to your YouTube icon
import FooterImage from '../assets/logos/RRR.png'; // replace with the actual path to your image

const Footer = () => {
    return (
        <footer className="bg-lightBlue text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Footer Image */}
                <div className="mb-4 md:mb-0">
                    <img src={FooterImage} alt="Footer Text" className="h-12" />
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com/amoryfirstassembly" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" className="h-8 w-8 hover:opacity-75" />
                    </a>
                    <a href="https://www.youtube.com/@AmoryFirstAssembly" target="_blank" rel="noopener noreferrer">
                        <img src={YouTubeIcon} alt="YouTube" className="h-8 w-8 hover:opacity-75" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;