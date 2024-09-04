import React from 'react';
import BackgroundImage from '../assets/images/service-picture-bw.jpg';
import LogoImage from '../assets/logos/New AFA Logo-4.png';
import ServicePic from '../assets/images/justin-letterstochurch.jpg';

import 'flowbite';

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Section with Background Image */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <img
          src={LogoImage}
          alt="Logo"
          className="opacity-0 animate-fade-in w-full max-w-3xl md:max-w-5xl" // Adjusted size
        />
      </section>

      {/* Hero Section with Solid Background Color */}
      <section
        className="flex-1 flex flex-col md:flex-row items-center justify-center text-white py-20 px-4"
        style={{ backgroundColor: '#011638' }}
      >
        {/* Image on the Left */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={ServicePic}
            alt="Service Background"
            className="rounded-lg shadow-2xl mx-auto md:ml-0"
          />
        </div>

        {/* Text Box on the Right */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="p-10 bg-gradient-to-r from-lightBlue to-paleGreen text-white rounded-xl shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              Welcome to Amory First Assembly of God
            </h1>
            <p className="text-lg md:text-2xl mb-6 leading-relaxed">
              We are a church that is Relational, Real, and Relevant! <br /><br />
              We are dedicated to families with ministries for all ages. When you walk through our doors, we aim to make you feel welcome and show the love of Christ. <br /><br />
            </p>
            <p className="text-xl md:text-3xl font-bold text-center leading-relaxed"> {/* Increased text size and bold */}
              Sunday School: 9:30 A.M. <br />
              Service: 10:30 A.M. <br />
              Wednesday Night: 6:30 P.M.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;