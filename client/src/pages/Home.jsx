import React from 'react';
import BackgroundImage from '../assets/images/service-picture-bw.jpg';
import LogoImage from '../assets/logos/New AFA Logo-4.png';
import ServicePic from '../assets/images/justin-letterstochurch.jpg';
import GuysOutside from '../assets/images/guysoutside.jpg'
import justin from '../assets/images/justin.jpg';

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
          className="opacity-0 animate-fade-in w-full max-w-3xl md:max-w-5xl"
        />
      </section>

      {/* Hero Section */}
      <section
  className="flex-1 flex flex-col md:flex-row items-center justify-center text-white py-20 px-4"
  style={{ backgroundColor: '#2A3030' }} // Set gunmetal background
>
  <div className="w-full md:w-1/3 mb-8 md:mb-0">
    <img
      src={ServicePic}
      alt="Service Background"
      className="rounded-lg shadow-2xl mx-auto md:ml-0"
    />
  </div>

  <div className="w-full md:w-2/3 flex justify-center md:justify-start">
    <div className="p-10 text-white"> {/* Removed the box */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center ">
        Welcome to Amory First Assembly of God
      </h1>
      <p className="text-lg md:text-2xl text-center mb-6 leading-relaxed">
        We are a church that is Relational, Real, and Relevant! <br /><br />
        We are dedicated to families with ministries for all ages. When you walk through our doors, we aim to make you feel welcome and show the love of Christ. <br /><br />
      </p>
      <p className="text-4xl md:text-5xl font-bold text-center leading-relaxed mb-8">
        Join Us In-Person Or Online
      </p>
      <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-2">
        Sunday School : 9:30 A.M. <br />
        Sunday Service : 10:30 A.M. <br />
        Wednesday Service : 6:30 P.M.
      </p>
    </div>
  </div>
</section>

 {/* Second Section - About Us */}
 <section className="flex flex-col md:flex-row items-center justify-center py-20 px-4 bg-white">
    <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
      <img
        src={GuysOutside} // Change to the desired "About Us" image
        alt="About Us"
        className="rounded-lg shadow-2xl  max-w-xs h-auto" // Adjusted image size
      />
    </div>

    <div className="w-full md:w-2/3 flex justify-center  text-center md:text-left">
      <h1 className="text-8xl font-bold text-gray-900 mb-4">
        About Us
      </h1>
    </div>
    <div className="w-full flex justify-center mt-8">
      <a href="/about" className="bg-gunmetal text-white py-3 px-6 rounded-md hover:bg-blue-700 text-xl">
        Learn More
      </a>
    </div>
  </section>

  {/* Third Section - Our Staff with Gunmetal Background */}
  <section
    className="flex flex-col md:flex-row items-center justify-center py-20 px-4"
    style={{ backgroundColor: '#2A3030' }} // Gunmetal background for Our Staff
  >
    <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
      <img
        src={justin} // Change to the desired "Our Staff" image
        alt="Our Staff"
        className="rounded-lg shadow-2xl max-w-xs h-auto" // Adjusted image size
      />
    </div>

    <div className="w-full md:w-2/3 flex justify-center  text-center md:text-left">
      <h1 className="text-8xl font-bold text-white mb-4">
        Our Staff
      </h1>
    </div>
    <div className="w-full flex justify-center mt-8">
      <a href="/staff" className="bg-white text-black py-3 px-6 rounded-md hover:bg-blue-700 text-xl">
        Learn More
      </a>
    </div>
  </section>
  </div>
    );
}

export default Homepage;
