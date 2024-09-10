import React from 'react';
import justin from '../assets/images/justin.jpg';
import hunter from '../assets/images/hunter.jpg';
import deven from '../assets/images/devan.jpg';
import adam from '../assets/images/adam.jpg';
import connor from '../assets/images/connor.jpg';

const staffMembers = [
  { id: 1, name: 'Justin Myers', role: 'Pastor', img: justin, about: 'Pastor Justin has been serving as the pastor for over 15 years and is passionate about sharing the love of Christ with the community. His leadership and vision have guided the church through many seasons of growth and ministry.' },
  { id: 2, name: 'Hunter Trotter', role: 'Youth Leader', img: hunter },
  { id: 3, name: 'Deven Sanderson', role: 'Children\'s Ministry Leader', img: deven },
  { id: 4, name: 'Adam & Brittany Minga', role: 'Worship Leaders', img: adam },
  { id: 5, name: 'Connor & Haley Davis', role: 'Church Administrator', img: connor }
];

const Staff = () => {
  return (
    <div className="bg-[#2A3030] py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Pastor Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center mb-16">
        <img className="h-64 w-64 object-cover rounded-full mx-auto mb-6" src={justin} alt="Justin Myers" />
        <h2 className="text-4xl font-bold text-gray-900">Justin Myers</h2>
        <h3 className="text-2xl text-gray-600 mb-4">Pastor</h3>
        <p className="text-gray-700 text-lg">{staffMembers[0].about}</p>
      </div>

      {/* Rest of the Staff */}
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.slice(1).map(member => (
            <div key={member.id} className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden p-4">
              <img className="h-48 w-48 object-cover rounded-full mb-4" src={member.img} alt={member.name} />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff;