import React from 'react';
import Mural from '../assets/logos/Mural Background.png';
import 'flowbite';

function Homepage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover  bg-center"
      style={{ backgroundImage: `url(${Mural})` }}
    >
{/* Hero Section */}
<section className="flex-1 flex items-center justify-center  text-black py-20">
<a  class="block p-6 bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

  <div className="text-center p-8 bg-whiteSmoke bg-opacity-50 rounded-lg shadow-lg">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-lightBlue ">
      Welcome to Amory First Assembly of God
    </h1>
    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
      We are a church that is Relational, Real, and Relevant! <br/><br/>
      We are a church dedicated to families. We have different ministries for all ages. When you walk into the doors of our church, our goal is to make you feel welcome and show the love of Christ. <br/><br/>
      Sunday School is at 9:30 A.M. <br/>
      Service is at 10:30 A.M. <br/>
      Wednesday Night at 6:30 P.M.
    </p>
  </div>
  </a>
</section>

      {/* Feature Section */}
      <section className=" py-16 ">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12 text-gunmetal">
            Get to know us!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
            <div className="p-8 bg-lightBlue rounded-lg shadow-lg hover:bg-darkerBlue">
              <h4 className="text-2xl text-white font-bold mb-4">Staff</h4>
              <p className="text-gray-700">
                Description of feature 1.
              </p>
            </div>
            <div className="p-8 bg-lightBlue rounded-lg shadow-lg hover:bg-darkerBlue">
              <h4 className="text-2xl text-white font-bold mb-4">Ministries</h4>
              <p className="text-gray-700">
                Description of feature 2.
              </p>
            </div>
            <div className="p-8 bg-lightBlue rounded-lg shadow-lg hover:bg-darkerBlue">
              <h4 className="text-2xl text-white font-bold mb-4">Calendar</h4>
              <p className="text-gray-700">
                Description of feature 3.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
