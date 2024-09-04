import React from 'react';
import justin from '../assets/images/justin.jpg';
import hunter from '../assets/images/hunter.jpg';
import deven from '../assets/images/devan.jpg';
import adam from '../assets/images/adam.jpg';
import connor from '../assets/images/connor.jpg';

const staffMembers = [
  { id: 1, name: 'Justin Myers', role: 'Pastor', img: justin, about: 'John has been serving as the pastor for over 15 years...' },
  { id: 2, name: 'Hunter Trotter', role: 'Youth Leader', img: hunter, about: 'Jane leads the youth ministry with a passion for guiding the next generation...' },
  { id: 3, name: 'Deven Sanderson', role: 'Children\'s Ministry Leader', img: deven, about: 'Emily has a heart for children and has been leading the ministry for 10 years...' },
  { id: 4, name: 'Adam & Brittany Minga', role: 'Worship Leaders', img: adam, about: 'Michael is dedicated to leading the congregation in worship...' },
  { id: 5, name: 'Connor Davis', role: 'Church Administrator', img: connor, about: 'Sarah keeps the church running smoothly with her administrative skills...' }
];

const Staff = () => {
  return (
    <div className="bg-[#011638] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {staffMembers.map(member => (
          <div key={member.id} className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
            <img className="h-48 w-full lg:h-auto lg:w-48 object-cover" src={member.img} alt={member.name} />
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-xl text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700">{member.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
