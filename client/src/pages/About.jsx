import React from 'react';
import AboutImage from '../assets/logos/Mural Background.png'; // Update with actual image path
import 'flowbite';

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section for About Us */}
      <section
        className="flex-1 flex flex-col md:flex-row items-center justify-center text-white py-20 px-4"
        style={{ backgroundColor: '#2A3030' }} // Gunmetal background
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={AboutImage} // Change to your "About Us" image
            alt="About Us Image"
            className="rounded-lg shadow-2xl mx-auto md:ml-0"
          />
        </div>

        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="p-10 text-white"> {/* Content without the box */}
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center md:text-left">
              About Us
            </h1>
            <p className="text-lg md:text-2xl text-center mb-6 leading-relaxed">
              Amory First Assembly of God has a longstanding tradition of community, faith, and service. We are dedicated to making an impact in people's lives and empowering them through the teachings of Christ. To create a church that brings together people of all backgrounds and walks of life, cultivating a spirit of unity and purpose.
            </p>
            <p className="text-3xl md:text-5xl font-bold text-center leading-relaxed mb-8">
              Our Mission
            </p>
            <p className="text-xl md:text-3xl font-bold text-center leading-relaxed mb-2">
              To love and serve our community with the heart of Jesus.
            </p>
          </div>
        </div>
      </section>


      
      <section
        className="flex-1 flex flex-col md:flex-row items-center justify-center text-white py-20 px-4"
        style={{ backgroundColor: 'whiteSmoke' }} 
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={AboutImage} 
            alt="Our Vision"
            className="rounded-lg shadow-2xl mx-auto md:ml-0"
          />
        </div>

        <div className="w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="p-10 text-black"> 
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-center md:text-left">
              What We Believe
            </h1>
            <p className="text-2xl md:text-2xl text-center mb-6 leading-relaxed">
              Assemblies of God Fundamental Truths
            </p>
            
<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">WE BELIEVE...</h2>
<ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
    <li>
        The Scriptures are inspired by God and declare his design and plan for mankind.
    </li>
    <li>
        There is only One True God - revealed in three persons.. Father, Son, and Holy Spirit (commonly know as the Trinity).
    </li>
    <li>
        In the Deity of the Lord Jesus Christ. As God's son Jesus was both human and divine.
    </li>
    <li>
        Though originally good, Man Willingly fell into Sin - ushering evil and death, both physical and spiritual, into the world.
    </li>
    <li>
         Every Person Can Have Restored Fellowship with God Through 'Salvation'(trusting Christ through faith and repentance to be our personal Savior).
    </li>
    <li>
        We practice two ordinances (1) Water Baptism by Immersion after repenting of one's sins and recieving Christ's gift of salvation, and (2) Holy Communion (the Lord's Supper) as a syumbolic remembrance of Christ's suffering and death for our salvation.
    </li>
    <li>
        
    </li>
    <li>
        
    </li>
    <li>
        
    </li>
    <li>
        
    </li>
    <li>
        
    </li>
</ul>

          </div>
        </div>
      </section>
      
    </div>
  );
}

export default AboutUs;