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
            
<h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">WE BELIEVE...</h2>
<ul class="max-w-md space-y-1 text-black list-none list-inside dark:text-gray-400">
    <li>
    - WE BELIEVE... The Scriptures are inspired by God and declare his design and plan for mankind.
    </li>
    <li>
    - WE BELIEVE... There is only One True God - revealed in three persons.. Father, Son, and Holy Spirit (commonly know as the Trinity).
    </li>
    <li>
    - WE BELIEVE... In the Deity of the Lord Jesus Christ. As God's son Jesus was both human and divine.
    </li>
    <li>
    - WE BELIEVE... Though originally good, Man Willingly fell into Sin - ushering evil and death, both physical and spiritual, into the world.
    </li>
    <li>
    - WE BELIEVE... Every Person Can Have Restored Fellowship with God Through 'Salvation'(trusting Christ through faith and repentance to be our personal Savior).
    </li>
    <li>
    - WE BELIEVE... We practice two ordinances (1) Water Baptism by Immersion after repenting of one's sins and recieving Christ's gift of salvation, and (2) Holy Communion (the Lord's Supper) as a 
       syumbolic remembrance of Christ's suffering and death for our salvation.
    </li>
    <li>
    - WE BELIEVE... The Baptism in the Holy Spirit is a Special Experience Following Salvation that empowers believers for witnessing and effective service, just as it did in New Testament times.
    </li>
    <li>
    - WE BELIEVE... The Initial Physical Evidence of the Baptism in the Holy Spirit is Speaking in Tongues as experienced on the Day of Pentecost and referenced throughout Acts and the Epistles.
    </li>
    <li>
    - WE BELIEVE... Sanctification Initially Occurs at Salvation and is not a declaration that a believer is holy, but also a progressive lifelong process of separating from evil as believers continually draw closer and become more Christ-like.
    </li>
    <li>
    - WE BELIEVE... The Church has a Mission to seek and save all who are lost in sin. We believe 'the Church' is the body of Christ and consists of the people who, through time, 
        have accepted God's offer of redemption through the sacrificial death of His son Jesus Christ.
    </li>
    <li>
    - WE BELIEVE... A Divinely called and Scripturally Ordained leadership Ministry Serves the Church. The Bible teaches that each of us inder leadership must commit ourselves to reach others for Christ, to worship Him with other believers,
         to build up or edify 
        the body of believers - the Church and to meet human need with ministries of love and compassion.
    </li>
    <li>
    - WE BELIEVE... Divine Healing of the Sick is a Privilege for Christians Today and is provided for in Christ's attonement. 
    </li>
    <li>
    - WE BELIEVE... In the blessed Hope - When Jesus Raptures His Church Prior to His Return to Earth, this future moment in time all believers who have died will rise from their graves and meet the Lord in the air.
    </li>
    <li>
    - WE BELIEVE... In the 
    </li>
    <li>
    - WE BELIEVE...
    </li>
    <li>
    - WE BELIEVE...
    </li>
</ul>

          </div>
        </div>
      </section>
      
    </div>
  );
}

export default AboutUs;